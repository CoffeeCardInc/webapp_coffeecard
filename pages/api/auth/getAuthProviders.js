/* returns the list of providers currently configured for sign in.
It calls /api/auth/providers and returns a list of the currently configured authentication providers.
It can be useful if you are creating a dynamic custom sign in page. */
import { getProviders } from "next-auth/react"

export default async (req, res) => {
  const providers = await getProviders()
  console.log("Providers", providers)
  res.end()
}