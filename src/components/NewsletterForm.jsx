import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { ArrowRight, LoaderCircle } from 'lucide-react'
import { validateFields, submitForm } from './forms'

const fields = [{ name: 'email', label: 'Email address', type: 'email', required: true }]

/** Compact newsletter sign-up (posts to the same form endpoint as form "newsletter"). */
export default function NewsletterForm({ idPrefix = 'newsletter' }) {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')
  const startedAt = useRef(Date.now())
  const id = `${idPrefix}-email`

  async function onSubmit(e) {
    e.preventDefault()
    const errs = validateFields(fields, { email })
    if (errs.email) {
      setError(errs.email)
      return
    }
    setError('')
    setStatus('submitting')
    try {
      await submitForm('newsletter', { email: email.trim() }, { honeypot, startedAt: startedAt.current })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p role="status" className="rounded-2xl bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/80">
        Thank you for subscribing. New perspectives will arrive in your inbox.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <label htmlFor={id} className="sr-only">Email address</label>
      <div className={`flex rounded-md border bg-night-2 p-1 pl-4 ${error ? 'border-error' : 'border-white/20 focus-within:border-glow'}`}>
        <input
          id={id}
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          enterKeyHint="send"
          className="min-w-0 flex-1 bg-transparent py-2 text-base text-white placeholder:text-haze focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-label="Subscribe to insights"
          className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white text-night transition-colors hover:bg-brand"
        >
          {status === 'submitting' ? (
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      {error && <p id={`${id}-error`} className="mt-2 text-sm text-error">{error}</p>}
      {status === 'error' && (
        <p role="alert" className="mt-2 text-sm text-error">
          We couldn&rsquo;t add you just now. Try again shortly, or{' '}
          <Link to="/contact" className="underline underline-offset-2">send us a message</Link> instead.
        </p>
      )}
    </form>
  )
}
