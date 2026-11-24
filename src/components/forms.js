import { site } from '../data/site'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\d\s-]{7,20}$/

/** Validates values against a field config. Returns { fieldName: message }. */
export function validateFields(fields, values) {
  const errors = {}
  for (const f of fields) {
    const v = String(values[f.name] ?? '').trim()
    if (f.required && !v) {
      errors[f.name] =
        f.requiredMessage ||
        (f.type === 'select'
          ? `Please choose an option for ${f.label.toLowerCase()}.`
          : f.type === 'textarea'
            ? 'Please add a short message so we can prepare for the conversation.'
            : `Please enter your ${f.label.toLowerCase()}.`)
      continue
    }
    if (!v) continue
    if (f.type === 'email' && !EMAIL_RE.test(v)) errors[f.name] = 'Please enter a valid email address.'
    else if (f.type === 'tel' && !PHONE_RE.test(v)) errors[f.name] = 'Please enter a valid telephone number, including the country code.'
    else if (f.minLength && v.length < f.minLength) errors[f.name] = `Please share a little more detail (at least ${f.minLength} characters).`
    else if (v.length > (f.maxLength ?? (f.type === 'textarea' ? 4000 : 200))) errors[f.name] = 'This entry is too long.'
  }
  return errors
}

/**
 * Sends a form submission. Applies the honeypot + time-trap checks, simulates
 * delivery during `npm run dev`, otherwise POSTs JSON to the configured endpoint.
 * Resolves on success, throws Error(message) on failure.
 */
export async function submitForm(formName, values, { honeypot, startedAt }) {
  const elapsed = (Date.now() - startedAt) / 1000
  if (honeypot || elapsed < site.forms.minSecondsToSubmit) return // silently drop bots

  const payload = { form: formName, ...values, website: honeypot, elapsed: Math.round(elapsed) }

  if (import.meta.env.DEV) {
    await new Promise((r) => setTimeout(r, 900))
    console.info(`[${site.name}] ${formName} submission (dev simulation, not sent):`, payload)
    return
  }

  const res = await fetch(site.forms.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.ok) throw new Error(data.message || '')
}
