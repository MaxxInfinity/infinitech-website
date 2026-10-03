import {
  ArrowUpRight,
  AtSign,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#07162A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#007BFF] text-2xl font-bold">
                ∞
              </div>

              <div>
                <div className="font-['Poppins'] text-lg font-bold">
                  INFINI TECH
                </div>

                <div className="text-[10px] uppercase tracking-[0.18em] text-[#00C2FF]">
                  Marketing the Future, Today.
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              AI-powered digital marketing helping businesses attract
              customers, build visibility and grow.
            </p>

            <a
              href="#audit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#007BFF] px-5 py-3 text-sm font-semibold transition hover:bg-[#00C2FF]"
            >
              Get a Free Audit
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-['Poppins'] font-semibold">Company</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
              <a href="#about" className="transition hover:text-[#00C2FF]">
                About
              </a>

              <a href="#services" className="transition hover:text-[#00C2FF]">
                Services
              </a>

              <a
                href="#portfolio"
                className="transition hover:text-[#00C2FF]"
              >
                Portfolio
              </a>

              <a href="#pricing" className="transition hover:text-[#00C2FF]">
                Pricing
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Poppins'] font-semibold">Services</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
              <span>Social Media</span>
              <span>Content Creation</span>
              <span>Paid Advertising</span>
              <span>Google & Local Growth</span>
              <span>WhatsApp Marketing</span>
              <span>AI & Automation</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Poppins'] font-semibold">Let's Talk</h3>

            <div className="mt-5 space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#00C2FF]"
                />

                <span>
                  2369 St Mary's
                  <br />
                  Chitungwiza, Zimbabwe
                </span>
              </div>

              <a
                href="mailto:info@infinitech.co.zw"
                className="flex items-center gap-3 transition hover:text-[#00C2FF]"
              >
                <Mail size={18} className="text-[#00C2FF]" />
                info@infinitech.co.zw
              </a>

              <a
  href="https://www.instagram.com/infinitech"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 transition hover:text-[#00C2FF]"
>
  <AtSign size={18} className="text-[#00C2FF]" />
  @infinitech
</a>

<a
  href="#contact"
  className="flex items-center gap-3 transition hover:text-[#00C2FF]"
>
  <MessageCircle size={18} className="text-[#00C2FF]" />
  Facebook
</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-sm text-gray-500">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Infini Tech. All rights reserved.
            </p>

            <p>Marketing the Future, Today.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}