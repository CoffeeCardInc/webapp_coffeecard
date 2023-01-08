import { useContext, useState } from 'react'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { session } from 'next-auth'

import Layout from '../components/layout'

export defailt function MyApp(props) {
  // const [state, setState] = useState({ cart: cart })
  const { Component, pageProps: {session, ...pageProps } } = props

  // setUser = (user) => {
  //   setState({ user })
  // }

  return (
    <SessionProvider session={session}>
      <Layout className='container m-0 p-0' style={{ height: '100vh' }}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
