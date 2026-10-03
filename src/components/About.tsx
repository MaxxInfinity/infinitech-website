import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  Target,
  TrendingUp,
} from 'lucide-react'

export default function About() {
  const values = [
    'Results First',
    'Innovation',
    'Creativity',
    'Integrity',
    'Continuous Learning',
    'Customer Success',
  ]

  return (
    <section
      id="about"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
              About Infini Tech
            </p>

            <h2 className="mt-4 font-['Poppins'] text-4xl font-bold leading-tight text-[#0B1F3A] sm:text-5xl">
              Marketing built for the
              <span className="text-[#007BFF]"> way business works today.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Infini Tech is an AI-powered digital marketing company helping
              businesses build stronger brands, reach more customers and turn
              online attention into measurable business opportunities.
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              We combine creative content, digital advertising, social media,
              local search, websites and AI-powered tools to create practical
              marketing systems that businesses can actually use.
            </p>

            <a
              href="#audit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#007BFF]"
            >
              Start With a Free Audit
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl bg-[#0B1F3A] p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <AboutCard
                  icon={<Target size={24} />}
                  title="Strategy"
                  text="Every campaign starts with a clear business objective."
                />

                <AboutCard
                  icon={<BrainCircuit size={24} />}
                  title="AI-Powered"
                  text="We use modern AI tools to improve speed, creativity and insight."
                />

                <AboutCard
                  icon={<TrendingUp size={24} />}
                  title="Growth"
                  text="Our work focuses on visibility, leads, customers and growth."
                />

                <AboutCard
                  icon={<Lightbulb size={24} />}
                  title="Innovation"
                  text="We continuously explore better ways to solve marketing problems."
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:block">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Our Mission
              </p>
              <p className="mt-2 max-w-xs font-semibold leading-6 text-[#0B1F3A]">
                Help businesses grow through creative, data-driven and
                AI-assisted marketing.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 border-t border-gray-200 pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
                What We Believe
              </p>

              <h3 className="mt-3 font-['Poppins'] text-3xl font-bold text-[#0B1F3A]">
                Built around your growth.
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#007BFF]"
                  />
                  <span className="font-medium text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#007BFF]/20 text-[#00C2FF]">
        {icon}
      </div>

      <h4 className="mt-5 font-['Poppins'] text-lg font-bold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-gray-400">{text}</p>
    </div>
  )
}