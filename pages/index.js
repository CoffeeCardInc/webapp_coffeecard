/* HOME page
- this page will be rendered with Landing Component. The component is set to show based on session value (loged in or not)
- there seems to be a page rendering glitch when you load other pages you can see for a moment the other components.
- the landing component 
- The home page also show the card components. The card components are the active / inactive memberships that is being fetched from memberships api (see api/coffeecard/memberships)
- the cards ui still missing some of the information. 
- the cards after redeeming clicked are currently not showing the accurate redeemable items that belong to the pass (pass API shows what kind of subscription options the shops have.)
- the cards component will need to pass props to (cups page) - propbably with react/context.....
*/

import { getServerSession, useSession, signIn, signOut } from 'next-auth/react' // to be used for protected pages (i.e. profile.js or admin.js)
import { authOptions } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
import Cards from '../components/Card'
import ProfileHeader from '../components/ProfileHeader'
// import AppContext from './context'
// import { useContext } from 'react'
import { useMemberships, useSetMemberships } from '../components/context'
// import { signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
// session ? login page : landing page
// useSession Hook is the easiest way to check if someone is signed in.
// has built in Context through <SessionProvider/> in pages/_app.js

export default function Home() {
  const session = useSession() // to determine which landing page to show
  // const memberships = useMemberships()
  const [memberships, setMemberships] = useState([])

  const fetchMemberships = async () => {
    const res = await fetch('http://localhost:3000/api/coffeecard/memberships')
    const data = await res.json()
    setMemberships(data)
  }

  useEffect(() => {
    fetchMemberships()
  }, [])
  // TODO: add logic if Landing component is loading

  if (session.status === 'authenticated') {
    return (
      <>
        <section>
          <ProfileHeader />
        </section>
        <h5 className='d-md-flex flex-column align-items-center justify-content-around '>
          Your Subscriptions:
        </h5>
        <div className='col-lg-4 p-0 cards'>
          {memberships.length > 0 ? (
            memberships?.map((membership, index) => {
              return <Cards key={index} membership={membership} />
            })
          ) : (
            <>
              <p className='mt-5'>
                You currently do not have any subscription.
              </p>
              <button
                className='btn col-md-12 col-lg-4 mt-4'
                style={{ backgroundColor: '#40312e', color: 'white' }}
              >
                Subscribe
              </button>
            </>
          )}
        </div>
      </>
    )
  } else {
    return (
      <section>
        <div>
          <div className='row align-items-center'>
            {/* <div
            className='col-md-12 p-0 bg-img shadow-lg rounded'
            style={{ height: '450px' }}
          ></div> */}
            <div
              className='col text-col col-md-12 p-2 bg-img shadow-lg rounded'
              style={{
                fontSize: '18px',
                letterSpacing: '.1rem',
                height: '450px',
                color: '#fff',
              }}
            >
              <h2>Your most refined ritual yet.</h2>
              <br />
              <div style={{ marginTop: '240px' }}>
                <p className='about-text-2 '>
                  CoffeeCard empowers local coffee shops to turn their customers
                  into recurring subscribers.
                </p>
              </div>
            </div>
          </div>
          <div className='d-sm-flex flex-column align-items-center justify-content-around'>
            <Link href='/login' className='nav-item nav-link col-lg-12'>
              <button
                className='btn col-md-12 col-lg-4 mt-4'
                style={{ backgroundColor: '#40312e', color: 'white' }}
                // onClick={() => signIn()}
              >
                Log In
              </button>
            </Link>
            <Link href='/register' className='nav-item nav-link col-lg-12'>
              <button
                className='btn col-md-12 col-lg-4 mt-1'
                style={{ backgroundColor: '#40312e', color: 'white' }}
              >
                Join
              </button>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

// This function is called on every request
// It checks if there is a session and if there is, it passes it as a prop to the page
// This authentication is done on the server side
// This is the only way to get the session on the server side
// happens in the server before the page is rendered
// export async function getServerSideProps(ctx) {
//   const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
//   //console.log("Session: ", session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     props: {
//       session,
//     },
//     redirect: {
//       destination: '/profile',
//     }
//   }
// }
