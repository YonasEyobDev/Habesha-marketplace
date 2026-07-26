import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

export function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    register(form.name, form.email, form.password)
    navigate("/")
  }

  return (
    <section className="max-w-md mx-auto px-6 py-24">
      <h1 className="text-2xl font-bold mb-8">Create Account</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name" value={form.name} onChange={handleChange}
          placeholder="Full Name" required
          className="border border-neutral-300 rounded-lg px-4 py-2"
        />
        <input
          name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="Email" required
          className="border border-neutral-300 rounded-lg px-4 py-2"
        />
        <input
          name="password" type="password" value={form.password} onChange={handleChange}
          placeholder="Password" required
          className="border border-neutral-300 rounded-lg px-4 py-2"
        />

        <Button size="lg" type="submit">Create Account</Button>
      </form>

      <p className="text-sm text-neutral-500 mt-6 text-center">
        Already have an account?{" "}
        <Link to="/login" className="underline text-neutral-900">Log in</Link>
      </p>
    </section>
  )
}