import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  AtSign,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          {/* Left */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
              Let's Work Together
            </p>

            <h2 className="mt-4 max-w-2xl font-['Poppins'] text-4xl font-bold leading-tight text-[#0B1F3A] sm:text-5xl">
              Ready to turn your
              <span className="text-[#007BFF]"> online presence </span>
              into growth?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Whether you need better social media, more customers from
              Google, stronger advertising or a complete digital marketing
              strategy, let's talk about where your business can go next.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={<Mail size={21} />}
                title="Email Us"
                text="info@infinitech.co.zw"
                href="mailto:info@infinitech.co.zw"
              />

              <ContactCard
                icon={<AtSign size={24} />}
                title="Instagram"
                text="@infinitech"
                href="https://www.instagram.com/infinitech"
                external
              />

              <ContactCard
                icon={<MapPin size={21} />}
                title="Visit Us"
                text="2369 St Mary's, Chitungwiza"
              />

              <ContactCard
                icon={<Phone size={21} />}
                title="Call Us"
                text="+263 78 003 7355"
                href="tel:+263780037355"
              />

              <ContactCard
                icon={<MessageCircle size={21} />}
                title="Free Audit"
                text="Request your audit"
                href="#audit"
              />
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-[#0B1F3A] p-8 shadow-xl sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007BFF]/20 text-[#00C2FF]">
              <MessageCircle size={28} />
            </div>

            <h3 className="mt-7 font-['Poppins'] text-2xl font-bold text-white">
              Start with a conversation.
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Tell us what you're trying to achieve, where you're currently
              struggling and what you'd like to improve.
            </p>

            <div className="mt-7 space-y-4">
              {[
                'Tell us about your business',
                'Explain your biggest marketing challenge',
                'Get practical recommendations',
                'Choose the right next step',
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-[#00C2FF]">
                    {index + 1}
                  </div>

                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#audit"
              className="mt-9 flex items-center justify-center gap-2 rounded-xl bg-[#007BFF] px-6 py-4 font-semibold text-white transition hover:bg-[#00C2FF]"
            >
              Request Your Free Audit
              <ArrowUpRight size={18} />
            </a>

            <p className="mt-4 text-center text-xs text-gray-500">
              No obligation. No commitment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  title,
  text,
  href,
  external = false,
}: {
  icon: ReactNode
  title: string
  text: string
  href?: string
  external?: boolean
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#007BFF]/10 text-[#007BFF]">
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold text-[#0B1F3A]">
          {text}
        </p>
      </div>
    </>
  )

  if (!href) {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5">
        {content}
      </div>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#007BFF]/30 hover:shadow-lg"
    >
      {content}
    </a>
  )
}