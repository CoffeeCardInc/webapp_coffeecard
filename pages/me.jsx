import { useSession, getSession } from "next-auth/react"
import Layout from "../components/layout"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "pages/api/auth/[...nextauth]"

export default function MePage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return ("You must be signed in to view this page")
    }
  })

  if (status === "loading") {
  return "Loading or not authenticated..."
  }

  return <p>Signed in as {JSON.stringify(session)}</p>
}
// Replaced with useSession() hook
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }
  return {
    props: { session },
  }
}