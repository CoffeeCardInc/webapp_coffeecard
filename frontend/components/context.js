/* /context/AppContext.js */

import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
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
const SelectedCoffee = React.createContext()
const SetSelectedCoffee = React.createContext()

export function useUser() {
  return useContext(UserContext)
}
export function useUpdateUser() {
  return useContext(UserContextUpdate)
}
export function useSelectedCoffee() {
  return useContext(SelectedCoffee)
}
export function useSetSelectedCoffee() {
  return useContext(SetSelectedCoffee)
}

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(true)
  const [selectedCoffee, setSelectedCoffee] = useState()
  const [data, setData] = useState([])

  const toggleUser = () => {
    setLoggedIn(!loggedIn)
  }

  // useEffect(() => {
  //   const fetchUrl = async () => {
  //     const request = await fetch(`https://data.whop.com/api/v2/memberships`, {
  //       method: 'GET',
  //       headers: {
  //         WhopCompany: 'biz_tYbEGaWmYllltU',
  //         Authorization: 'Bearer deH0AJrOoNNIE5U6FaWi6OMfmzBxrwvjyr1AuqCkdvM',
  //       },
  //     })
  //     const response = request.json()
  //     console.log('res', response)
  //     setData(response)
  //   }
  //   fetchUrl()
  // }, [])

  return (
    <UserContext.Provider value={loggedIn}>
      <UserContextUpdate.Provider value={toggleUser}>
        <SelectedCoffee.Provider value={selectedCoffee}>
          <SetSelectedCoffee.Provider value={setSelectedCoffee}>
            {children}
          </SetSelectedCoffee.Provider>
        </SelectedCoffee.Provider>
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  )
}

export default AppContext
