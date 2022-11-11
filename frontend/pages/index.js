import React, { useState } from 'react'
import Cart from '../components/cart'
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import RestaurantList from '../components/restaurantList'
import { Alert, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import Landing from '../components/Landing'

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
  console.log(`URL: ${API_URL}`)
  const [query, setQuery] = useState('')
  const link = new HttpLink({ uri: `${API_URL}/graphql` })
  const cache = new InMemoryCache()
  const client = new ApolloClient({ link, cache })

  return (
    <ApolloProvider client={client}>
      <div>
        {/* <Alert color='primary'>
          Hi! This project is currently under construction
        </Alert>
      </div>
      <div className='search'>
        <h2> Local Cafés</h2>
        <InputGroup>
          <InputGroupAddon addonType='append'> Search </InputGroupAddon>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup> */}
        <Landing />
        <br></br>
      </div>
      {/* <RestaurantList search={query} /> */}
    </ApolloProvider>
  )
}
export default Home
