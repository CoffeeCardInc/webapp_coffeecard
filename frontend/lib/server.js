const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'https://localhost:3000' : 'www.coffeecard.io'
