import { useContext, useState } from 'react'
import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp(props) {
  // const [state, setState] = useState({ cart: cart })
  const { Component, pageProps } = props

  // setUser = (user) => {
  //   setState({ user })
  // }

  return (
    <Layout className='container m-0 p-0' style={{ height: '100vh' }}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
