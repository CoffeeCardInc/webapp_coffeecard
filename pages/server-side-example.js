import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { useSession } from 'next-auth/react'

export default function Page() {
  const { data: session } = useSession()

  //  if (typeof window === "undefined") return null
  console.log('ServerSideExamplePage: Data:', session)
  if (session) {
    return (
      <>
        <h1>This is Me:</h1>
        <p>{JSON.stringify(session)}</p>
      </>
    )
  }
  return <h2>Access Denied</h2>
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: {
        ...(await getServerSession(ctx.req, ctx.res, authOptions)),
      },
    },
  }
}
