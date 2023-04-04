import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
// import AppleProvider from 'next-auth/providers/apple'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
// Prisma Adapter
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'

let userAccount = null
const bcrypt = require('bcrypt')

const confirmPasswordHash = (plainPassword, hashedPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, function (err, res) {
      resolve(res)
    })
  })
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
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
        let [local, domain] = identifier.toLowerCase().trim().split('@')
        domain = domain.split(',')[0]
        return `${local}@${domain}`
      },
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {},
      async authorize(credentials: any) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          })

          if (user !== null) {
            //Compare the hash
            const res = await confirmPasswordHash(
              credentials.password,
              user.password
            )
            if (res === true) {
              userAccount = {
                id: user.id,
                email: user.email,
              }

              return userAccount
            } else {
              console.log('Hash not matched logging in')
              return null
            }
          } else {
            return null
          }
        } catch (err) {
          console.log('Authorize error:', err)
        }
      },
    }),
  ],

  session: {
    // strategy:"database"
    strategy: 'jwt', // jwt: true,
    // maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('JWT callback. Got User: ', user)
      if (typeof user !== typeof undefined) {
        token.user = user
        console.log('token', token.user)
      }
      return token
    },
    async session({ session, token, user }) {
      console.log('SESSION CALLED')
      if (token) {
        if (userAccount !== null) {
          //session.user = userAccount;
          session.user = {
            id: userAccount.id,
            // name: `${userAccount.firstName} ${userAccount.lastName}`,
            email: userAccount.email,
          }
          console.log('session test', userAccount)
        } else if (
          typeof token.user !== typeof undefined &&
          (typeof session.user === typeof undefined ||
            (typeof session.user !== typeof undefined &&
              typeof session.user.id === typeof undefined))
        ) {
          session.user = token.user
        } else if (typeof token !== typeof undefined) {
          session.token = token
        } else {
          session.user.id = user.id
        }
      }

      return session
    },
    // cookie: {
    //   secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
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
      // const isAllowedToSignIn = true
      // if (isAllowedToSignIn) {
      //   return true
      // } else {
      //   // Return false to display a default error message
      //   return false
      //   // Or you can return a URL to redirect to:
      //   // return '/unauthorized'
      // }
      try {
        // the user object is wrapped in another user object so extract it

        console.log('Sign in callback', user)
        console.log('User id: ', user.id)
        if (typeof user.id !== typeof undefined) {
          if (user.id) {
            console.log('User is active')
            return user
          } else {
            console.log('User is not active')
            return false
          }
        } else {
          console.log('User id was undefined')
          return false
        }
      } catch (err) {
        console.error('Signin callback error:', err)
      }
    },
    async register(email, password) {
      try {
        await prisma.user.create({
          data: {
            email: email,
            password: password,
          },
        })
        return true
      } catch (err) {
        console.error('Failed to register user. Error', err)
        return false
      }
    },
  },
  pages: {
    signIn: '/login',
  },
  debug: true,
}

export default NextAuth(authOptions as any)
