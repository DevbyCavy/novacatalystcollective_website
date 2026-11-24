import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleCheck, CircleAlert, LoaderCircle, ChevronDown } from 'lucide-react'
import Button from './Button'
import { easePremium } from './Reveal'
import { site } from '../data/site'
import { validateFields, submitForm } from './forms'

const themes = {
  dark: {
    label: 'text-white/60',
    optional: 'text-white/45',
    input: 'text-white placeholder:text-white/30 border-white/20 hover:border-white/40 focus:border-accent',
    option: 'bg-plum text-white',
    error: 'text-error',
    errorBorder: 'border-error',
    note: 'text-white/50',
    chip: 'border-white/20 text-white/70 hover:border-white/50',
    chipActive: 'border-accent bg-accent text-ink',
    success: 'border-white/10 text-white',
    successText: 'text-white/70',
    icon: 'text-accent',
    alert: 'border-error/40 bg-error/5 text-white/80',
    submit: 'light',
  },
  light: {
    label: 'text-slate',
    optional: 'text-slate/80',
    input: 'text-ink placeholder:text-slate/50 border-ink/20 hover:border-ink/40 focus:border-brand',
    option: 'bg-white text-ink',
    error: 'text-[#a12c2c]',
    errorBorder: 'border-[#a12c2c]',
    note: 'text-slate',
    chip: 'border-ink/15 text-slate hover:border-brand/50 hover:text-brand',
    chipActive: 'border-brand bg-brand text-white',
    success: 'border-mist text-ink',
    successText: 'text-slate',
    icon: 'text-brand',
    alert: 'border-[#a12c2c]/30 bg-[#a12c2c]/5 text-charcoal',
    submit: 'brand',
  },
}

/**
 * Configurable enquiry form with validation, honeypot/time-trap spam protection,
 * and success / error feedback.
 *
 * fields: [{ name, label, type: text|email|tel|date|select|textarea, required,
 *            options, autoComplete, placeholder, minLength, full }]
 * types:  optional enquiry-type chips [{ value, label }]
 */
export default function EnquiryForm({
  formName,
  fields,
  types,
  initialType,
  initialValues = {},
  submitLabel = 'Submit Enquiry',
  successTitle = 'Thank you.',
  successText = 'Your enquiry has been received. A member of our team will be in touch to continue the conversation.',
  tone = 'dark',
  idPrefix = formName,
}) {
  const t = themes[tone]
  const empty = Object.fromEntries(fields.map((f) => [f.name, '']))
  const [values, setValues] = useState(() => ({ ...empty, ...initialValues }))
  const [type, setType] = useState(initialType || types?.[0]?.value || '')
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState('')
  const startedAt = useRef(Date.now())
  const formRef = useRef(null)
  const statusRef = useRef(null)

  useEffect(() => {
    if (initialType) setType(initialType)
  }, [initialType])
  useEffect(() => {
    if (status === 'success' || status === 'error') statusRef.current?.focus()
  }, [status])

  const fid = (name) => `${idPrefix}-${name}`
  const update = (name) => (e) => {
    const next = { ...values, [name]: e.target.value }
    setValues(next)
    if (touched[name]) setErrors(validateFields(fields, next))
  }
  const blur = (name) => () => {
    setTouched((p) => ({ ...p, [name]: true }))
    setErrors(validateFields(fields, values))
  }
  const showError = (name) => touched[name] && errors[name]

  async function onSubmit(e) {
    e.preventDefault()
    const found = validateFields(fields, values)
    setErrors(found)
    setTouched(Object.fromEntries(fields.map((f) => [f.name, true])))
    const first = fields.find((f) => found[f.name])
    if (first) {
      formRef.current?.querySelector(`#${fid(first.name)}`)?.focus()
      return
    }
    setStatus('submitting')
    setServerMessage('')
    try {
      const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, String(v).trim()]))
      if (types) trimmed.enquiryType = types.find((x) => x.value === type)?.label ?? type
      await submitForm(formName, trimmed, { honeypot, startedAt: startedAt.current })
      setStatus('success')
      setValues(empty)
      setTouched({})
    } catch (err) {
      setServerMessage(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easePremium }}
        className={`flex flex-col items-start border p-10 focus:outline-none sm:p-14 ${t.success}`}
      >
        <CircleCheck className={`h-10 w-10 ${t.icon}`} strokeWidth={1.25} aria-hidden="true" />
        <h3 className="mt-8 text-4xl">{successTitle}</h3>
        <p className={`mt-4 max-w-md leading-relaxed ${t.successText}`}>{successText}</p>
        <button
          type="button"
          onClick={() => {
            startedAt.current = Date.now()
            setStatus('idle')
          }}
          className={`mt-10 text-[0.78rem] font-semibold tracking-[0.16em] uppercase underline-offset-8 hover:underline ${t.icon}`}
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  const inputBase = `mt-3 w-full border-0 border-b bg-transparent px-0 py-3 text-base transition-colors focus:outline-none focus:ring-0`

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative grid gap-9 sm:grid-cols-2">
      {types && (
        <fieldset className="sm:col-span-2">
          <legend className={`eyebrow ${t.label}`}>I&rsquo;d like to</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {types.map((opt) => (
              <label
                key={opt.value}
                className={`cursor-pointer border px-4 py-2.5 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                  type === opt.value ? t.chipActive : t.chip
                }`}
              >
                <input
                  type="radio"
                  name={`${idPrefix}-type`}
                  value={opt.value}
                  checked={type === opt.value}
                  onChange={() => setType(opt.value)}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {fields.map((f) => {
        const id = fid(f.name)
        const err = showError(f.name)
        const cls = `${inputBase} ${t.input} ${err ? t.errorBorder : ''}`
        const common = {
          id,
          name: f.name,
          value: values[f.name],
          onChange: update(f.name),
          onBlur: blur(f.name),
          required: f.required,
          autoComplete: f.autoComplete,
          placeholder: f.placeholder,
          'aria-invalid': Boolean(err),
          'aria-describedby': err ? `${id}-error` : undefined,
        }
        return (
          <div key={f.name} className={`flex flex-col ${f.full || f.type === 'textarea' ? 'sm:col-span-2' : ''}`}>
            <label htmlFor={id} className={`eyebrow flex justify-between ${t.label}`}>
              <span>{f.label}</span>
              {!f.required && <span className={`tracking-[0.15em] normal-case ${t.optional}`}>Optional</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea rows={5} {...common} className={`${cls} resize-y`} />
            ) : f.type === 'select' ? (
              <div className="relative">
                <select {...common} className={`${cls} cursor-pointer appearance-none pr-8 ${values[f.name] ? '' : 'opacity-60'}`}>
                  <option value="" disabled className={t.option}>Select…</option>
                  {f.options.map((o) => (
                    <option key={o} value={o} className={t.option}>{o}</option>
                  ))}
                </select>
                <ChevronDown className={`pointer-events-none absolute right-0 bottom-3.5 h-4 w-4 ${t.icon}`} strokeWidth={1.5} aria-hidden="true" />
              </div>
            ) : (
              <input type={f.type || 'text'} inputMode={f.type === 'tel' ? 'tel' : undefined} {...common} className={cls} />
            )}
            <AnimatePresence initial={false}>
              {err && (
                <motion.p
                  id={`${id}-error`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mt-2 text-sm ${t.error}`}
                >
                  {errors[f.name]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={fid('website')}>Website</label>
        <input id={fid('website')} type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className={`max-w-sm text-sm leading-relaxed ${t.note}`}>We use your details only to respond to your enquiry.</p>
        <Button type="submit" variant={t.submit} disabled={status === 'submitting'} arrow={status !== 'submitting'}>
          {status === 'submitting' ? (
            <span className="flex items-center gap-3">
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending
            </span>
          ) : (
            submitLabel
          )}
        </Button>
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            ref={statusRef}
            tabIndex={-1}
            role="alert"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex items-start gap-4 border p-5 text-sm focus:outline-none sm:col-span-2 ${t.alert}`}
          >
            <CircleAlert className={`mt-0.5 h-5 w-5 shrink-0 ${t.error}`} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="font-semibold">We couldn&rsquo;t send your message.</p>
              <p className="mt-1">
                {serverMessage ? `${serverMessage} ` : ''}
                Please try again in a moment
                {site.contact.email ? (
                  <>
                    , or email us at <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
                  </>
                ) : (
                  '.'
                )}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
