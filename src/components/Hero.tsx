import {
  ArrowRight,
  BarChart3,
  Bot,
  Megaphone,
  Sparkles,
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B1F3A] pt-28"
    >
      {/* Background glow */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#007BFF]/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#00C2FF]/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

        {/* Left side */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 px-4 py-2 text-sm text-[#00C2FF]">
            <Sparkles size={16} />
            AI-Powered Digital Marketing
          </div>

          <h1 className="max-w-3xl font-['Poppins'] text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Turn Your Online Presence Into a{' '}
            <span className="text-[#00C2FF]">
              Growth Engine.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
            We help businesses attract more customers through
            AI-powered social media, content, advertising, Google,
            WhatsApp and digital strategy.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#audit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#007BFF] px-7 py-4 font-semibold text-white transition hover:bg-[#00C2FF]"
            >
              Get a Free Digital Marketing Audit
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#00C2FF] hover:text-[#00C2FF]"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-400">
            <span>✓ AI-powered workflows</span>
            <span>✓ Creative content</span>
            <span>✓ Data-driven strategy</span>
          </div>
        </div>

        {/* Right side */}
        <div className="relative mx-auto w-full max-w-lg">

          {/* Main card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  Digital Growth
                </p>

                <p className="mt-1 font-['Poppins'] text-2xl font-bold text-white">
                  Marketing Dashboard
                </p>
              </div>

              <div className="rounded-xl bg-[#007BFF]/20 p-3 text-[#00C2FF]">
                <BarChart3 size={25} />
              </div>
            </div>

            {/* Fake analytics visual */}
            <div className="flex h-52 items-end gap-3 rounded-2xl bg-black/20 p-5">
              {[35, 50, 42, 65, 58, 78, 92].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-[#007BFF] to-[#00C2FF]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <Metric
                icon={<Bot size={17} />}
                label="AI"
                value="24/7"
              />

              <Metric
                icon={<Megaphone size={17} />}
                label="Campaigns"
                value="Live"
              />

              <Metric
                icon={<BarChart3 size={17} />}
                label="Growth"
                value="↑"
              />
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#122d50] p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#00C2FF]/10 p-3 text-[#00C2FF]">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Strategy
                </p>

                <p className="font-semibold text-white">
                  Built for Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
      <div className="mb-2 text-[#00C2FF]">
        {icon}
      </div>

      <p className="text-xs text-gray-400">
        {label}
      </p>

      <p className="mt-1 font-semibold text-white">
        {value}
      </p>
    </div>
  )
}