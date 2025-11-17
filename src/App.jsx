import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <footer className="bg-black border-t border-white/10 py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Nicolas‑Raul Nita</footer>
      </main>
    </div>
  )
}

export default App
