import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white/90 font-semibold tracking-tight">Nicolas‑Raul Nita</div>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-white/70 hover:text-white transition-colors">
              {l.label}
            </button>
          ))}
        </nav>
        <button className="md:hidden text-white/80" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {links.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left w-full text-white/80 py-2">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
