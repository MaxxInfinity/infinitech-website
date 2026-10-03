import {
  Utensils,
  ShoppingBag,
  Scissors,
  Smartphone,
  Building2,
  GraduationCap,
  Hotel,
  BriefcaseBusiness,
} from 'lucide-react'

const industries = [
  {
    icon: Utensils,
    title: 'Restaurants & Cafés',
    description:
      'Turn food, atmosphere and offers into content that brings more people through your doors.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Boutiques',
    description:
      'Showcase products, promotions and your brand to customers who are ready to buy.',
  },
  {
    icon: Scissors,
    title: 'Salons & Beauty',
    description:
      'Build a recognizable brand and turn your work into content that attracts new clients.',
  },
  {
    icon: Smartphone,
    title: 'Electronics & Tech',
    description:
      'Make products easier to discover with compelling content, targeted campaigns and local visibility.',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description:
      'Generate attention and qualified inquiries for properties, developments and property services.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Build trust, communicate your value and reach students, parents and communities online.',
  },
  {
    icon: Hotel,
    title: 'Hotels & Hospitality',
    description:
      'Turn your location, rooms and experiences into digital content that attracts guests.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professional Services',
    description:
      'Build authority and make it easier for potential clients to discover and contact you.',
  },
]

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-[#F7F9FC] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
            Industries We Serve
          </p>

          <h2 className="font-['Poppins'] text-4xl font-bold leading-tight text-[#0B1F3A] sm:text-5xl">
            Built for Businesses
            <span className="text-[#007BFF]"> Like Yours.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every business is different. We adapt our digital marketing
            strategy to your customers, industry, goals and local market.
          </p>
        </div>

        {/* Industry cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon

            return (
              <div
                key={industry.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#007BFF]/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#00C2FF] transition group-hover:bg-[#007BFF] group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 font-['Poppins'] text-lg font-bold text-[#0B1F3A]">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#0B1F3A]">
          <div className="relative px-8 py-12 sm:px-12 lg:px-16">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#007BFF]/20 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C2FF]">
                Your Business. Your Market. Your Strategy.
              </p>

              <h3 className="mt-4 font-['Poppins'] text-3xl font-bold leading-tight text-white sm:text-4xl">
                Stop posting just to stay active.
                Start marketing with a purpose.
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-gray-300">
                Your content should have a job — attract attention,
                build trust, generate inquiries or drive sales.
                We build marketing around that purpose.
              </p>

              <a
                href="#audit"
                className="mt-7 inline-flex rounded-full bg-[#007BFF] px-7 py-3.5 font-semibold text-white transition hover:bg-[#00C2FF]"
              >
                Find Your Growth Opportunities
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}