import {
  ClipboardCheck,
  Lightbulb,
  Palette,
  Megaphone,
  TrendingUp,
  BarChart3,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Audit',
    description:
      'We understand your business, audience and current digital presence.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description:
      'We identify opportunities and build a marketing strategy around your goals.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Content',
    description:
      'We create purposeful content designed to attract attention and build trust.',
  },
  {
    number: '04',
    icon: Megaphone,
    title: 'Campaign',
    description:
      'We launch targeted campaigns across the platforms where your customers are.',
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Optimization',
    description:
      'We monitor performance and continuously improve what is working.',
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Reporting',
    description:
      'You receive clear insights into activity, performance and next steps.',
  },
]

export default function Process() {
  return (
    <section className="bg-[#F7F9FC] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
            Our Process
          </p>

          <h2 className="mt-4 font-['Poppins'] text-4xl font-bold text-[#0B1F3A] sm:text-5xl">
            From Strategy to
            <span className="text-[#007BFF]"> Growth.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A simple, structured process designed to turn digital
            activity into purposeful marketing.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-gray-200 bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#00C2FF]">
                    <Icon size={23} />
                  </div>

                  <span className="font-['Poppins'] text-4xl font-bold text-gray-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 font-['Poppins'] text-xl font-bold text-[#0B1F3A]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}