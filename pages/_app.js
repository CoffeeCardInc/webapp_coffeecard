/* Can we use context and Sessionprovider at the same time? to pass props between pages and components*/

import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

import Layout from '../components/layout'

export default function MyApp({
  Component,
  pageProps: { session, pageProps }, // session prop avoids checking the session TWICE on pages that support both server and client side rendering
}) {
  // session provides ability to pass the session all around
  // To be able to use useSession first you'll need to expose the session context, <SessionProvider />
  // [Documentation](https://next-auth.js.org/getting-started/client#sessionprovider)
  return (
    // <SessionProvider/> has built-in context and can be accessed via (i.e. session.user etc.)
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.

    // When you supply a session prop in _app.js, useSession won't show a 'loading' state, as it'll already have the session available. In this way, you can provide a more seamless user experience.
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Layout className='container m-0 p-0' style={{ height: '100vh' }}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
