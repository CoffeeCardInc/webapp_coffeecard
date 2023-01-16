import { useSession } from "next-auth/react"
import Layout from "../components/layout"

export default function MePage() {
  const { data: session } = useSession()

  return (
    <div>
      <h1>{JSON.stringify(session, null, 2)}</h1>
    </div>
  )
}

