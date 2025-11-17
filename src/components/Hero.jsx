import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <p className="text-white/60 tracking-wider uppercase text-xs mb-4">Computer Science Student</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight">
          Nicolas‑Raul Nita
        </h1>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          I build minimal, fast, and delightful software — focused on systems, web, and ML fundamentals.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-md border border-white/20 text-white text-sm font-medium hover:border-white/40 transition">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
