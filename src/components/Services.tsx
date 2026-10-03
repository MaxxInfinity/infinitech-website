import {
  Megaphone,
  Camera,
  Target,
  MapPin,
  MessageCircle,
  Bot,
} from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    number: '01',
    title: 'Social Media Management',
    description:
      'We manage your social presence with strategic content, consistent publishing, community engagement and performance tracking.',
    features: [
      'Facebook & Instagram',
      'TikTok management',
      'Content calendars',
      'Community management',
    ],
  },
  {
    icon: Camera,
    number: '02',
    title: 'Content Creation',
    description:
      'Professional graphics, short-form videos, photography concepts and campaigns designed to capture attention and drive action.',
    features: [
      'Reels & short videos',
      'Graphic design',
      'Product content',
      'Campaign creatives',
    ],
  },
  {
    icon: Target,
    number: '03',
    title: 'Paid Advertising',
    description:
      'We create and optimize targeted advertising campaigns designed to put your business in front of the right audience.',
    features: [
      'Facebook & Instagram Ads',
      'Google Ads',
      'TikTok Ads',
      'Campaign optimization',
    ],
  },
  {
    icon: MapPin,
    number: '04',
    title: 'Google & Local Growth',
    description:
      'Make it easier for nearby customers to discover your business when they search for products and services you offer.',
    features: [
      'Google Business Profile',
      'Local SEO',
      'Google Maps visibility',
      'Review strategy',
    ],
  },
  {
    icon: MessageCircle,
    number: '05',
    title: 'WhatsApp Marketing',
    description:
      'Turn conversations into opportunities with structured WhatsApp marketing, customer follow-up and conversion workflows.',
    features: [
      'WhatsApp Business',
      'Customer follow-up',
      'Broadcast strategy',
      'Lead conversion',
    ],
  },
  {
    icon: Bot,
    number: '06',
    title: 'AI & Automation',
    description:
      'Use practical AI tools and automation to reduce repetitive work, improve customer response and scale your marketing.',
    features: [
      'AI content workflows',
      'Chatbots',
      'Marketing automation',
      'AI-assisted strategy',
    ],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
            What We Do
          </p>

          <h2 className="font-['Poppins'] text-4xl font-bold leading-tight text-[#0B1F3A] sm:text-5xl">
            Everything You Need to
            <span className="text-[#007BFF]"> Grow Digitally.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From social media and content to advertising, Google,
            WhatsApp and AI automation, we build digital systems
            that help businesses attract and convert customers.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#007BFF]/40 hover:shadow-xl"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 font-['Poppins'] text-5xl font-bold text-gray-100 transition group-hover:text-[#007BFF]/10">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#00C2FF] transition group-hover:bg-[#007BFF] group-hover:text-white">
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 font-['Poppins'] text-xl font-bold text-[#0B1F3A]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="text-[#007BFF]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-[#0B1F3A] p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-['Poppins'] text-2xl font-bold text-white">
                Not sure what your business needs?
              </h3>

              <p className="mt-2 text-gray-300">
                We'll audit your current digital presence and
                identify your biggest growth opportunities.
              </p>
            </div>

            <a
              href="#audit"
              className="shrink-0 rounded-full bg-[#007BFF] px-7 py-3.5 font-semibold text-white transition hover:bg-[#00C2FF]"
            >
              Get Your Free Audit
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}