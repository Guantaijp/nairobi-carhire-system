import Link from "next/link"
import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to dashboard
  redirect("/dashboard")

  return (
    <div>
      <h1>Nairobi CarHire</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  )
}
