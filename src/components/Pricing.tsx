import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$150',
    description: 'For businesses ready to establish a consistent digital presence.',
    features: [
      'Social media management',
      'Content planning',
      'Branded social posts',
      'Basic community management',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth',
    price: '$300',
    description: 'For businesses ready to actively grow their digital customer base.',
    featured: true,
    features: [
      'Everything in Starter',
      'More content & short-form video',
      'Paid advertising management',
      'Google Business Profile support',
      'WhatsApp marketing strategy',
      'Detailed monthly reporting',
    ],
  },
  {
    name: 'Scale',
    price: '$600+',
    description: 'For businesses requiring a broader digital growth system.',
    features: [
      'Everything in Growth',
      'Advanced campaigns',
      'AI & automation workflows',
      'Advanced strategy',
      'Conversion optimization',
      'Priority support',
    ],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
            Pricing
          </p>

          <h2 className="mt-4 font-['Poppins'] text-4xl font-bold text-[#0B1F3A] sm:text-5xl">
            Choose Your
            <span className="text-[#007BFF]"> Growth Level.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Flexible starting packages designed for different stages
            of business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.featured
                  ? 'border-[#007BFF] bg-[#0B1F3A] text-white shadow-2xl'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-[#007BFF] px-3 py-1 text-xs font-bold text-white">
                  POPULAR
                </div>
              )}

              <p
                className={`text-sm font-bold uppercase tracking-wider ${
                  plan.featured ? 'text-[#00C2FF]' : 'text-[#007BFF]'
                }`}
              >
                {plan.name}
              </p>

              <div className="mt-5">
                <span className="font-['Poppins'] text-5xl font-bold">
                  {plan.price}
                </span>

                <span
                  className={
                    plan.featured ? 'text-gray-400' : 'text-gray-500'
                  }
                >
                  /month
                </span>
              </div>

              <p
                className={`mt-5 min-h-[72px] leading-6 ${
                  plan.featured ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <div className="my-7 h-px bg-current opacity-10" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[#00C2FF]"
                    />

                    <span
                      className={
                        plan.featured
                          ? 'text-gray-300'
                          : 'text-gray-600'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                className={`mt-8 block rounded-full px-6 py-3.5 text-center font-semibold transition ${
                  plan.featured
                    ? 'bg-[#007BFF] text-white hover:bg-[#00C2FF]'
                    : 'border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Advertising spend is separate from Infini Tech management fees.
        </p>

      </div>
    </section>
  )
}