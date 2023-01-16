import React, { useState, useEffect } from 'react'
import Landing from '../components/Landing' // determines which landing page to render
import { unstable_getServerSession, useSession } from 'next-auth' // to be used for protected pages (i.e. profile.js or admin.js)
import { authOptions } from 'next-auth';

export default function Home() {
  // Basically contains the landing component which checks whether there is a session or not
  // const { data: session, status } = useSession();
  return (
    <div>
      <Landing />
      <br></br>
    </div>
  );
};
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