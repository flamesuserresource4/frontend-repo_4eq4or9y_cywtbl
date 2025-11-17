import { useMemo } from 'react'

const resumePdfUrl = '/resume_nicolas_raul_nita.pdf'

export default function Resume() {
  const items = useMemo(() => ([
    { label: 'Education', value: 'BSc in Computer Science (In progress)' },
    { label: 'Focus', value: 'Systems • Web • ML' },
    { label: 'Skills', value: 'Python, JavaScript/TypeScript, React, FastAPI, SQL, MongoDB, Git' },
    { label: 'Tools', value: 'Linux, Docker, VS Code, Figma' },
  ]), [])

  return (
    <section id="resume" className="relative bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Resume</h2>
          <a href={resumePdfUrl} download className="px-3 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition">Download PDF</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.label} className="rounded-xl border border-white/10 p-5 bg-white/[0.02]">
              <div className="text-white/60 text-sm">{i.label}</div>
              <div className="text-white mt-1">{i.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 p-5 bg-white/[0.02] text-white/80">
          <p className="text-white/60 text-sm mb-2">On the page</p>
          <p>
            Passionate about building reliable systems and intuitive interfaces. I value clarity, performance, and thoughtful details.
          </p>
        </div>
      </div>
    </section>
  )
}
