/* HOME page
- this page will be rendered with Landing Component. The component is set to show based on session value (loged in or not)
- there seems to be a page rendering glitch when you load other pages you can see for a moment the other components.
- the landing component 
- The home page also show the card components. The card components are the active / inactive memberships that is being fetched from memberships api (see api/coffeecard/memberships)
- the cards ui still missing some of the information. 
- the cards after redeeming clicked are currently not showing the accurate redeemable items that belong to the pass (pass API shows what kind of subscription options the shops have.)
- the cards component will need to pass props to (cups page) - propbably with react/context.....
*/

import React, { useState, useEffect } from 'react'
import Landing from '../components/Landing' // determines which landing page to render
import { unstable_getServerSession, useSession } from 'next-auth' // to be used for protected pages (i.e. profile.js or admin.js)
import { authOptions } from 'next-auth'

export default function Home() {
  // Basically contains the landing component which checks whether there is a session or no
  // const { data: session, status } = useSession();
  return (
    <div>
      <Landing />
      <br></br>
    </div>
  )
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
