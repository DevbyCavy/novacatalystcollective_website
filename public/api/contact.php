<?php
/**
 * Nova Catalyst Collective — form handler.
 *
 * Handles three forms posted as JSON by the website:
 *   - "enquiry"    (contact page)
 *   - "speaking"   (Digital Bae speaking enquiry)
 *   - "newsletter" (insights newsletter sign-up)
 *
 * Re-validates server-side, applies spam protection (honeypot, time-trap,
 * per-IP rate limit) and emails the submission to NC_CONTACT_TO.
 *
 * SETUP: set NC_CONTACT_TO / NC_CONTACT_FROM below (or as environment variables)
 * and make sure PHP mail() works on the server (XAMPP needs sendmail/SMTP set up in
 * php.ini). For production, consider an SMTP library or a transactional email
 * service, a newsletter provider (e.g. Mailchimp) for sign-ups, and a CAPTCHA such
 * as Cloudflare Turnstile if spam appears.
 */

declare(strict_types=1);

const NC_CONTACT_TO   = '';   // e.g. 'hello@novacatalystcollective.com'
const NC_CONTACT_FROM = '';   // a sender on your own domain, e.g. 'website@novacatalystcollective.com'
const NC_MIN_SECONDS  = 3;    // time-trap: minimum seconds on page
const NC_RATE_LIMIT   = 5;    // max submissions per IP per hour

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, bool $ok, string $message = ''): void {
    http_response_code($code);
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Method not allowed.');
}

$data = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($data)) {
    respond(400, false, 'Invalid request.');
}

$get = static fn(string $k, int $max = 200): string =>
    mb_substr(trim((string)($data[$k] ?? '')), 0, $max);

// Field definitions per form: key => [label, required, max length, type]
$forms = [
    'enquiry' => [
        'title'  => 'Website enquiry',
        'fields' => [
            'enquiryType'  => ['Enquiry type', false, 60, 'text'],
            'name'         => ['Full name', true, 120, 'text'],
            'organisation' => ['Organisation', false, 150, 'text'],
            'email'        => ['Email address', true, 200, 'email'],
            'phone'        => ['Telephone', false, 30, 'tel'],
            'interest'     => ['Area of interest', true, 120, 'text'],
            'message'      => ['Business needs', true, 4000, 'long'],
        ],
    ],
    'speaking' => [
        'title'  => 'Digital Bae speaking enquiry',
        'fields' => [
            'name'         => ['Full name', true, 120, 'text'],
            'organisation' => ['Organisation', true, 150, 'text'],
            'email'        => ['Email address', true, 200, 'email'],
            'phone'        => ['Telephone', false, 30, 'tel'],
            'eventName'    => ['Event name', true, 200, 'text'],
            'eventDate'    => ['Event date', false, 20, 'text'],
            'format'       => ['Engagement type', true, 120, 'text'],
            'location'     => ['Location', false, 200, 'text'],
            'message'      => ['Event & audience', true, 4000, 'long'],
        ],
    ],
    'newsletter' => [
        'title'  => 'Newsletter sign-up',
        'fields' => [
            'email' => ['Email address', true, 200, 'email'],
        ],
    ],
];

$formName = $get('form', 30);
if (!isset($forms[$formName])) {
    respond(400, false, 'Unknown form.');
}
$form = $forms[$formName];

// Spam: honeypot or implausibly fast submission -> pretend success, send nothing.
if ($get('website') !== '' || (int)($data['elapsed'] ?? 0) < NC_MIN_SECONDS) {
    respond(200, true);
}

// Per-IP rate limit using the system temp directory.
$ip     = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/nc_rate_' . hash('sha256', $ip);
$recent = array_filter(
    is_file($bucket) ? (array)json_decode((string)file_get_contents($bucket), true) : [],
    static fn($t) => is_int($t) && $t > time() - 3600
);
if (count($recent) >= NC_RATE_LIMIT) {
    respond(429, false, 'Too many submissions from this connection.');
}

// Validate.
$values = [];
foreach ($form['fields'] as $key => [$label, $required, $max, $type]) {
    $v = $get($key, $max);
    if ($required && $v === '') respond(422, false, "Please complete: {$label}.");
    if ($v !== '' && $type === 'email' && !filter_var($v, FILTER_VALIDATE_EMAIL)) respond(422, false, 'Please enter a valid email address.');
    if ($v !== '' && $type === 'tel' && !preg_match('/^[+()\d\s-]{7,20}$/', $v)) respond(422, false, 'Please enter a valid telephone number.');
    if ($type === 'long' && $required && mb_strlen($v) < 20) respond(422, false, "Please add more detail to: {$label}.");
    $values[$key] = $v;
}

$to = getenv('NC_CONTACT_TO') ?: NC_CONTACT_TO;
if ($to === '') {
    respond(503, false, 'The form service is not configured yet.');
}

// Strip line breaks from anything placed in headers (header injection).
$clean = static fn(string $s): string => str_replace(["\r", "\n"], ' ', $s);

$body = "{$form['title']} — Nova Catalyst Collective website\n\n";
foreach ($form['fields'] as $key => [$label, , , $type]) {
    $v = $values[$key] !== '' ? $values[$key] : '-';
    $body .= $type === 'long' ? "\n{$label}:\n{$v}\n" : str_pad($label . ':', 18) . "{$v}\n";
}

$email   = $values['email'];
$name    = $values['name'] ?? $email;
$from    = getenv('NC_CONTACT_FROM') ?: NC_CONTACT_FROM ?: $to;
$subject = $form['title'] . (isset($values['interest']) ? ': ' . $values['interest'] : (isset($values['eventName']) ? ': ' . $values['eventName'] : ''));
$headers = [
    'From: Nova Catalyst Collective Website <' . $clean($from) . '>',
    'Reply-To: ' . $clean($name) . ' <' . $clean($email) . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($clean($subject)) . '?=', $body, implode("\r\n", $headers));
if (!$sent) {
    respond(502, false, 'Your message could not be delivered.');
}

$recent[] = time();
@file_put_contents($bucket, json_encode(array_values($recent)));

respond(200, true);
