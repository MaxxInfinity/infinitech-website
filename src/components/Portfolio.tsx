import {
  ArrowUpRight,
  BarChart3,
  ShoppingBag,
  Utensils,
  Sparkles,
} from 'lucide-react'

const projects = [
  {
    category: 'Restaurant Marketing',
    title: 'Restaurant Growth Campaign',
    description:
      'A social media campaign concept built around food photography, short-form video and promotional content.',
    icon: Utensils,
    tag: 'CONCEPT PROJECT',
  },
  {
    category: 'Retail Marketing',
    title: 'Boutique Social Campaign',
    description:
      'A visual campaign concept designed to showcase products, promotions and a modern retail brand.',
    icon: ShoppingBag,
    tag: 'CONCEPT PROJECT',
  },
  {
    category: 'Digital Strategy',
    title: 'Local Business Growth System',
    description:
      'A digital marketing concept combining social media, Google visibility, WhatsApp and paid advertising.',
    icon: BarChart3,
    tag: 'STRATEGY CONCEPT',
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
              Selected Work
            </p>

            <h2 className="font-['Poppins'] text-4xl font-bold leading-tight text-[#0B1F3A] sm:text-5xl">
              Ideas Designed to
              <span className="text-[#007BFF]"> Drive Growth.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore selected campaign concepts and digital
              marketing work created by Infini Tech.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Sparkles size={17} className="text-[#007BFF]" />
            Concept work will be replaced with real case studies
            as campaigns launch.
          </div>
        </div>

        {/* Portfolio cards */}
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Visual */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#0B1F3A]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/30 via-transparent to-[#00C2FF]/20" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-[#00C2FF] backdrop-blur-md transition duration-500 group-hover:scale-110">
                    <Icon size={42} />
                  </div>

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-md">
                    {project.tag}
                  </span>

                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B1F3A] transition group-hover:bg-[#00C2FF]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#007BFF]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 font-['Poppins'] text-xl font-bold text-[#0B1F3A]">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <span className="text-sm font-semibold text-[#0B1F3A]">
                      View Project Concept →
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Looking for a marketing partner for your business?
          </p>

          <a
            href="#audit"
            className="mt-4 inline-flex rounded-full border-2 border-[#007BFF] px-7 py-3 font-semibold text-[#007BFF] transition hover:bg-[#007BFF] hover:text-white"
          >
            Start With a Free Audit
          </a>
        </div>

      </div>
    </section>
  )
}