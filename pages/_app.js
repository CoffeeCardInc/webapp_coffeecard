import { useContext, useState } from 'react'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth'

import Layout from '../components/layout'

export default function MyApp({
  Component,
  pageProps: { session, pageProps}
}) {
  // session provides ability to pass the session all around
  // [Documentation](https://next-auth.js.org/getting-started/client#sessionprovider)  
  return (
    <SessionProvider session={session}>
      <Layout className='container m-0 p-0' style={{ height: '100vh' }}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
