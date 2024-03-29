// This is a sample API for a protected page and only authorized users can access this
import { getSession } from "next-auth/next"
import { authOptions } from "next-auth"

export default async (req, res) => {
  const session = await getSession({ req})
  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}