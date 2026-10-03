import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, ClipboardCheck, Send } from 'lucide-react'

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitting(true)
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xdekrbwg', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Something went wrong while submitting the form.')
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError(
        'We could not submit your request. Please check your internet connection and try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="audit"
      className="relative overflow-hidden bg-[#0B1F3A] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#007BFF]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#00C2FF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007BFF]/20 text-[#00C2FF]">
            <ClipboardCheck size={28} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#00C2FF]">
            Free Digital Marketing Audit
          </p>

          <h2 className="mt-4 font-['Poppins'] text-4xl font-bold leading-tight text-white sm:text-5xl">
            Find Out What's Holding
            <span className="text-[#00C2FF]"> Your Growth Back.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Tell us a little about your business and we'll review your
            digital presence to identify practical opportunities for
            improvement.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="font-['Poppins'] text-2xl font-bold text-white">
              What we'll look at
            </h3>

            <div className="mt-7 space-y-5">
              {[
                'Branding & online presence',
                'Social media & content',
                'Google visibility',
                'Customer engagement',
                'Lead generation & conversion',
                'Your biggest growth opportunities',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#00C2FF]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-sm font-semibold text-[#00C2FF]">
                YOUR AUDIT
              </p>

              <p className="mt-3 leading-7 text-gray-300">
                We'll identify your current position, highlight key
                opportunities and outline practical next steps.
              </p>

              <p className="mt-4 text-sm text-gray-400">
                No obligation. No commitment required.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-2xl sm:p-9">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={34} />
                </div>

                <h3 className="mt-6 font-['Poppins'] text-2xl font-bold text-[#0B1F3A]">
                  Audit Request Received
                </h3>

                <p className="mt-4 max-w-md leading-7 text-gray-600">
                  Thank you for contacting INFINI TECH. We've received
                  your request and will review your information before
                  getting back to you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-semibold text-[#007BFF] hover:text-[#00C2FF]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-['Poppins'] text-2xl font-bold text-[#0B1F3A]">
                  Request Your Free Audit
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Give us the basics and we'll take it from there.
                </p>

                {error && (
                  <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-600">
                    {error}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Your Name"
                      name="name"
                      placeholder="Maxwell Muchenje"
                      required
                    />

                    <FormField
                      label="Business Name"
                      name="business"
                      placeholder="Your Business"
                      required
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Industry"
                      name="industry"
                      placeholder="Restaurant, Retail, etc."
                      required
                    />

                    <FormField
                      label="WhatsApp / Phone"
                      name="phone"
                      placeholder="+263..."
                      required
                    />
                  </div>

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                  <FormField
                    label="Website"
                    name="website"
                    placeholder="https://yourwebsite.com"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Facebook Page"
                      name="facebook"
                      placeholder="Facebook URL"
                    />

                    <FormField
                      label="Instagram"
                      name="instagram"
                      placeholder="@yourbusiness"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="challenge"
                      className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                    >
                      What's your biggest marketing challenge?
                    </label>

                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      placeholder="Tell us what you're currently struggling with..."
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-6 py-4 font-semibold text-white transition hover:bg-[#00C2FF] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      'Sending Request...'
                    ) : (
                      <>
                        Request My Free Audit
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-gray-400">
                    Your information is used only to respond to your
                    audit request.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
      >
        {label}
        {required && <span className="ml-1 text-[#007BFF]">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#007BFF] focus:ring-2 focus:ring-[#007BFF]/10"
      />
    </div>
  )
}