/* /context/AppContext.js */

import React, { useContext } from 'react'
import { useState } from 'react'
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext({
  isAuthenticated: true,
  cart: { items: [], total: 0 },
  addItem: () => {},
  removeItem: () => {},
  user: false, // default logged out
  setUser: () => {},
})
const UserContext = React.createContext()
const UserContextUpdate = React.createContext()

export function useUser() {
  return useContext(UserContext)
}
export function useUpdateUser() {
  return useContext(UserContextUpdate)
}

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState()

  const toggleUser = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <UserContext.Provider value={loggedIn}>
      <UserContextUpdate.Provider value={toggleUser}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  )
}

export default AppContext
