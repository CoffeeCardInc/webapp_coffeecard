import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
// import Cart from '../components/cart'
// import {
//   ApolloProvider,
//   ApolloClient,
//   HttpLink,
//   InMemoryCache,
// } from '@apollo/client'
import Landing from '../components/Landing' // determines which landing page to render

function Home() {
  // const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
  // console.log(`URL: ${API_URL}`)
  const [query, setQuery] = useState('')
  // const link = new HttpLink({ uri: `${API_URL}/graphql` })
  // const cache = new InMemoryCache()
  // const client = new ApolloClient({ link, cache })

  const [data, setData] = useState([])

  return (
    // <ApolloProvider client={client}> 
    <div>
      <Landing />
      <br></br>
    </div>

    // </ApolloProvider>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getCoffeeCardAuthSession(ctx)
    }
  }
}

export default Home
