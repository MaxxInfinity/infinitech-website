
import { useState } from 'react'
import {
  ArrowUpRight,
  X,
  CheckCircle2,
  Monitor,
  Megaphone,
  Palette,
} from 'lucide-react'

const projects = [
  {
    title: 'Restaurant Growth Campaign',
    category: 'Social Media',
    type: 'Campaign Concept',
    description:
      'A proposed digital campaign for a restaurant looking to strengthen its online presence and attract more customers.',
    challenge:
      'Restaurants need consistent content that makes their food appealing and gives customers a reason to visit.',
    solution:
      'A coordinated content concept featuring food photography, promotional graphics, local audience targeting and calls to action.',
    deliverables: [
      'Social media campaign direction',
      'Promotional graphic concepts',
      'Content calendar proposal',
      'Local advertising strategy',
    ],
    icon: Megaphone,
    color: 'from-orange-400/20 to-red-500/10',
  },
  {
    title: 'Boutique Brand Campaign',
    category: 'Branding',
    type: 'Design Concept',
    description:
      'A visual identity and social media concept designed for a fashion or retail business.',
    challenge:
      'Retail brands need consistent visual communication that makes their products stand out.',
    solution:
      'A coordinated design direction for product promotions, branded posts and seasonal campaigns.',
    deliverables: [
      'Visual direction and colour palette',
      'Social media post concepts',
      'Product promotion layouts',
      'Brand consistency guidelines',
    ],
    icon: Palette,
    color: 'from-pink-400/20 to-purple-500/10',
  },
  {
    title: 'Small Business Website',
    category: 'Web Design',
    type: 'Website Concept',
    description:
      'A proposed responsive website experience that helps a small business present its services and receive enquiries.',
    challenge:
      'Businesses need a professional online presence that explains their offering and makes contacting them easy.',
    solution:
      'A mobile-friendly layout with clear service information, prominent calls to action and contact pathways.',
    deliverables: [
      'Responsive website design',
      'Service presentation layout',
      'Contact and enquiry flow',
      'Search-friendly page structure',
    ],
    icon: Monitor,
    color: 'from-blue-400/20 to-cyan-500/10',
  },
]

const filters = ['All Projects', 'Social Media', 'Branding', 'Web Design']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null)

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === 'All Projects' ||
      project.category === activeFilter
  )

  return (
    <section
      id="portfolio"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007BFF]">
              Selected Concepts
            </p>

            <h2 className="mt-4 font-['Poppins'] text-4xl font-bold text-[#0B1F3A] sm:text-5xl">
              Creative Ideas.
              <span className="block text-[#007BFF]">
                Built for Growth.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore illustrative campaign and design concepts
              demonstrating how we approach digital marketing,
              branding and website experiences.
            </p>
          </div>

          <a
            href="#audit"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#007BFF] hover:text-[#00C2FF]"
          >
            Discuss your project
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'bg-[#007BFF] text-white'
                  : 'border border-gray-200 text-gray-600 hover:border-[#007BFF] hover:text-[#007BFF]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => {
            const Icon = project.icon

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <div className="absolute inset-4 rounded-xl border border-white/70" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-lg transition duration-300 group-hover:scale-110">
                    <Icon size={42} className="text-[#007BFF]" />
                  </div>

                  <span className="absolute left-6 top-6 rounded-full bg-[#0B1F3A] px-3 py-1.5 text-xs font-semibold text-white">
                    {project.type}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#007BFF]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 font-['Poppins'] text-xl font-bold text-[#0B1F3A]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#007BFF] hover:text-[#00C2FF]"
                  >
                    Explore concept
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm leading-6 text-gray-500">
          These are illustrative concepts, not completed client
          projects or claims of measured business results.
        </p>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#071426]/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="my-auto w-full max-w-2xl rounded-2xl bg-white p-7 shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#007BFF]">
                  {selectedProject.type}
                </p>

                <h3 className="mt-3 font-['Poppins'] text-2xl font-bold text-[#0B1F3A]">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>

            <p className="mt-5 leading-7 text-gray-600">
              {selectedProject.description}
            </p>

            <h4 className="mt-7 font-bold text-[#0B1F3A]">
              The challenge
            </h4>

            <p className="mt-2 leading-7 text-gray-600">
              {selectedProject.challenge}
            </p>

            <h4 className="mt-6 font-bold text-[#0B1F3A]">
              Our proposed approach
            </h4>

            <p className="mt-2 leading-7 text-gray-600">
              {selectedProject.solution}
            </p>

            <h4 className="mt-6 font-bold text-[#0B1F3A]">
              Proposed deliverables
            </h4>

            <ul className="mt-3 space-y-3">
              {selectedProject.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#007BFF]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#audit"
              onClick={() => setSelectedProject(null)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#007BFF] px-6 py-3 font-semibold text-white hover:bg-[#0066D6]"
            >
              Start a project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
