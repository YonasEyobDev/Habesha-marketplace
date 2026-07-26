import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

export function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const result = login(form.email, form.password)
    if (result.success) {
      navigate("/")
    } else {
      setError("Invalid email or password.")
    }
  }

  return (
    <section className="max-w-md mx-auto px-6 py-24">
      <h1 className="text-2xl font-bold mb-8">Log In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && <p className="text-sm text-red-500">{error}</p>}

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

        <Button size="lg" type="submit">Log In</Button>
      </form>

      <p className="text-sm text-neutral-500 mt-6 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="underline text-neutral-900">Register</Link>
      </p>
    </section>
  )
}