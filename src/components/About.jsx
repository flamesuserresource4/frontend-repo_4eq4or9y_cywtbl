export default function About() {
  return (
    <section id="about" className="relative bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">About me</h2>
          <p className="text-white/60 mt-3">Based in Europe • Open to internships</p>
        </div>
        <div className="md:col-span-2 text-white/80 leading-relaxed">
          <p>
            I’m Nicolas‑Raul, a CS student passionate about clean design, robust systems, and thoughtful user experiences.
            I enjoy building across the stack — from efficient backends to crisp frontends — and I’m currently diving deeper into algorithms, distributed systems, and ML.
          </p>
          <p className="mt-4">
            I like minimal interfaces, strong typography, and products that feel calm. Outside of code: coffee, running, photography.
          </p>
        </div>
      </div>
    </section>
  )
}
