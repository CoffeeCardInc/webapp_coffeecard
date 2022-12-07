import { useContext, useState } from 'react'
import '../styles/globals.css'

import Home from './index'
import Layout from '../components/layout'
import Cookie from 'js-cookie'

function MyApp(props) {

  const [state, setState] = useState({ cart: cart })
  const { Component, pageProps } = props

  setUser = (user) => {
    setState({ user })
  }


  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        addItem: addItem,
        removeItem: removeItem,
        isAuthenticated: false,
        user: false,
        setUser: () => {},
      }}
    >
      <Layout className='container m-0 p-0' style={{ height: '100vh' }}>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
