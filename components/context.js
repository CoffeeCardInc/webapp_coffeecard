/* /context/AppContext.js 
currently not being used due to switch to next/auth (sessionprovider)
*/

import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
// create auth context with default value

const UserContext = React.createContext()
const UserContextUpdate = React.createContext()
const SelectedCoffee = React.createContext()
const SetSelectedCoffee = React.createContext()
const SelectedMembership = React.createContext()
const SetSelectedMembership = React.createContext()
const UserData = React.createContext()
const SetUserData = React.createContext()

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
export function useSelectedMembership() {
  return useContext(SelectedMembership)
}
export function useSetSelectedMembership() {
  return useContext(SetSelectedMembership)
}
export function useUserData() {
  return useContext(UserData)
}
export function useSetUserData() {
  return useContext(SetUserData)
}

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [selectedCoffee, setSelectedCoffee] = useState()
  const [data, setData] = useState([])
  // const [membership, setMembership] = useState([])
  const [memberships, setMemberships] = useState([])

  const fetchMemberships = async () => {
    const res = await fetch('http://localhost:3000/api/coffeecard/memberships')
    const data = await res.json()
    setMemberships(data)
  }

  useEffect(() => {
    fetchMemberships()
  }, [])

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
            <SelectedMembership.Provider value={memberships}>
              <SetSelectedMembership.Provider value={setMemberships}>
                <UserData.Provider value={data}>
                  <SetUserData.Provider value={setData}>
                    {children}
                  </SetUserData.Provider>
                </UserData.Provider>
              </SetSelectedMembership.Provider>
            </SelectedMembership.Provider>
          </SetSelectedCoffee.Provider>
        </SelectedCoffee.Provider>
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  )
}

// export default AppContext
