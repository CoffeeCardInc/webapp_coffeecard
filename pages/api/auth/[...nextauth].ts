import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
// import AppleProvider from 'next-auth/providers/apple'
// import Auth0Provider from "next-auth/providers/auth0"
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
// Prisma Adapter
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'

// const YOUR_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ROOT + 'auth/'
1
// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
export const authOptions = {
  // Prisma Adapter - connects the auth of the web app to DB. This will help persist user info in our own db.
  adapter: PrismaAdapter(prisma),

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // In this auth case, Email Provider will need an adapter for verification tokens
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      normalizeIdentifier(identifier): string {
        // Get the first two elements only,
        // separated by `@` from user input.
        let [local, domain] = identifier.toLowerCase().trim().split('@')
        // The part before "@" can contain a ","
        // but we remove it on the domain part
        domain = domain.split(',')[0]
        return `${local}@${domain}`
      },
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',

      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch('/api/coffeecard/users', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
  session: {
    strategy: 'database',
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  // jwt: {
  //   // The maximum age of the NextAuth.js issued JWT in seconds.
  //   // Defaults to `session.maxAge`.
  //   maxAge: 60 * 60 * 24, // 24 hours
  // },
  callbacks: {
    // we can do side effects such as adjusting context.js
    /* The session callback is called whenever a session is checked. 
    By default, only a subset of the token is returned for increased security. 
    If you want to make something available you added to the token 
    (like access_token and user.id from above) via the jwt() callback, 
    you have to explicitly forward it here to make it available to the client. */
    // Code from: (Docs)[https://next-auth.js.org/configuration/callbacks#session-callback]
    async session({ session, token, user }) {
      console.log('SESSION CALLED')
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken
      session.user.id = user.id
      // session.user.name = token.name // custom
      // session.user.email = token.email // custom
      // session.user.image = token.image // custom
      session.user.role = user.role
      // session.user.mobile = user.mobile
      // session.user.membership = user.membership
      return Promise.resolve(session)
    },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
    async redirect({ url, baseUrl }) {
      console.log('REDIRECT CALLED')
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log('SIGNIN CALLED')
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
  pages: {
    signIn: '/login',
  },
  debug: true,
}

export default NextAuth(authOptions as any)
