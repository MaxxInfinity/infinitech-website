
import {
  ShieldCheck,
  Lightbulb,
  Target,
  MessagesSquare,
} from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Strategy Before Spending',
    description:
      'We start by understanding your business, audience and objectives before recommending marketing activities.',
  },
  {
    icon: Lightbulb,
    title: 'Creativity Meets Technology',
    description:
      'We combine creative design, web development and AI-assisted workflows to develop practical digital solutions.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear Communication',
    description:
      'We aim to keep clients informed about deliverables, campaign priorities and the next steps throughout our work.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest, Transparent Work',
    description:
      'We set clear expectations, explain our approach and focus on meaningful progress rather than unsupported promises.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-gray-50 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
            The INFINI TECH Difference
          </p>

          <h2 className="mt-4 font-['Poppins'] text-4xl font-bold text-[#0B1F3A] sm:text-5xl">
            A Thoughtful Approach to Digital Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe effective digital marketing starts with
            understanding your business, creating with purpose and
            improving through learning.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007BFF]/10 text-[#007BFF]">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 font-['Poppins'] text-lg font-bold text-[#0B1F3A]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {reason.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-8 text-center sm:p-12">
          <h3 className="font-['Poppins'] text-2xl font-bold text-white sm:text-3xl">
            Your business deserves a strategy built around it.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Let's discuss your goals and identify the digital
            opportunities that make sense for your business.
          </p>

          <a
            href="#audit"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#007BFF] px-7 py-3.5 font-semibold text-white transition hover:bg-[#00C2FF]"
          >
            Request a Free Audit
          </a>
        </div>
      </div>
    </section>
  )
}
