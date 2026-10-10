
import {
  Code2,
  Palette,
  Megaphone,
  Rocket,
} from 'lucide-react'

const team = [
  {
    name: 'Maxwell Muchenje',
    role: 'Founder & Lead Developer',
    description:
      'An enthusiastic aerospace engineer, web developer and graphic designer from Harare, Zimbabwe, passionate about technology, creativity and building digital solutions.',
    icon: Rocket,
    initials: 'MM',
    featured: true,
  },
  {
    name: 'Tinaye Katsande',
    role: 'Developer',
    description:
      'Developing digital experiences and helping transform ideas into practical technology solutions.',
    icon: Code2,
    initials: 'TK',
    featured: false,
  },
  {
    name: 'Delma',
    role: 'Designer',
    description:
      'Creating compelling visuals, memorable brand identities and engaging designs for businesses.',
    icon: Palette,
    initials: 'D',
    featured: false,
  },
  {
    name: 'Desire Elia',
    role: 'Marketing',
    description:
      'Supporting brand growth through marketing, audience engagement and creative campaign ideas.',
    icon: Megaphone,
    initials: 'DE',
    featured: false,
  },
]

export default function Team() {
  return (
    <section
      id="team"
      className="bg-[#0B1F3A] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00C2FF]">
            The People Behind INFINI TECH
          </p>

          <h2 className="mt-4 font-['Poppins'] text-4xl font-bold text-white sm:text-5xl">
            Meet Our Team
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            A team of developers, designers and marketers combining
            technology, creativity and strategy to help businesses grow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => {
            const Icon = member.icon

            return (
              <article
                key={member.name}
                className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 hover:border-[#00C2FF]/60 ${
                  member.featured
                    ? 'border-[#007BFF]/70 bg-[#132E4E]'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#007BFF]/20 text-[#00C2FF]">
                  <Icon size={32} />
                </div>

                <div className="mt-6">
                  {member.featured && (
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#00C2FF]">
                      Founder
                    </p>
                  )}

                  <h3 className="font-['Poppins'] text-xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#00C2FF]">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {member.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    INFINI TECH
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300">
            Have a project in mind? Let’s build something great together.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#007BFF] px-7 py-3.5 font-semibold text-white transition hover:bg-[#00C2FF]"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  )
}
