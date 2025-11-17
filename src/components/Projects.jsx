const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Socket-powered chat with auth, dark UI, and message search.',
    tags: ['React', 'Node', 'Socket.io'],
    link: '#'
  },
  {
    title: 'Pathfinding Visualizer',
    description: 'Interactive A* / Dijkstra visualization with performance stats.',
    tags: ['TypeScript', 'Algorithms'],
    link: '#'
  },
  {
    title: 'Personal Finance CLI',
    description: 'Terminal-first budgeting tool with CSV import/export.',
    tags: ['Python'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 p-5 bg-white/[0.02] hover:bg-white/[0.05] transition">
              <div className="flex items-start justify-between">
                <h3 className="text-white font-medium tracking-tight">{p.title}</h3>
                <span className="text-xs text-white/50 group-hover:text-white/70">{p.tags[0]}</span>
              </div>
              <p className="text-white/60 mt-2 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/[0.06] text-white/70 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
