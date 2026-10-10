import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B1F3A]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007BFF] text-xl font-bold text-white">
            ∞
          </div>

          <div>
            <div className="font-['Poppins'] text-lg font-bold tracking-wide text-white">
              INFINI TECH
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-[#00C2FF]">
              Marketing the Future, Today.
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition hover:text-[#00C2FF]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#audit"
            className="rounded-full bg-[#007BFF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00C2FF]"
          >
            Free Audit
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1F3A] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-200 hover:text-[#00C2FF]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#audit"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[#007BFF] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}