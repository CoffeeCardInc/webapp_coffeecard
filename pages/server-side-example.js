import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"

export default function Page() {
  const { data, status } = useSession();

//   if (typeof window === "undefined") return null
  console.log("ServerSideExamplePage: Data:", data,"status", status)
  if (data) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>{JSON.stringify(data)}</p>
      </>
    )
  }
  return <h2>Access Denied</h2>
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: {
        ...(await unstable_getServerSession(ctx.req, ctx.res, authOptions)),
      }
    }
  }
}