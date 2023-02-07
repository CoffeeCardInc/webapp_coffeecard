import { server } from './server'

export async function loadShops() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/coffeecard/shops')
  const data = await res.json()

  return data
}
