import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus({ ok: true })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Contact</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <input required name="name" value={form.name} onChange={onChange} placeholder="Name" className="bg-white/[0.04] border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-white/40" />
          <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className="bg-white/[0.04] border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-white/40" />
          <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject (optional)" className="md:col-span-2 bg-white/[0.04] border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-white/40" />
          <textarea required name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" className="md:col-span-2 bg-white/[0.04] border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-white/40" />
          <div className="md:col-span-2 flex items-center gap-3">
            <button disabled={loading} className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition disabled:opacity-60">
              {loading ? 'Sending…' : 'Send'}
            </button>
            {status?.ok && <span className="text-green-400 text-sm">Sent. Thank you!</span>}
            {status?.ok === false && <span className="text-red-400 text-sm">{status.error || 'Something went wrong'}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
