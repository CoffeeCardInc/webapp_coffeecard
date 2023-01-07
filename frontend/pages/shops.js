import React, { useEffect } from 'react'
import Shop from '../components/Shop'
import RestaurantList from '../components/Shop'
import { useState } from 'react'
import { server } from '../lib/server.js'

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/coffeecard/shops`)
  const req = await res.json()

  return {
    props: {
      req,
    },
  }
}
const shops = ({ req }) => {
  const [coffeeShops, setCoffeeShops] = useState([])

  const shops = [
    {
      id: 1,
      type: 'Espresso',
      store: 'Froth',
      storeImage: 'https://coffeecard.nyc/images/froth_logo.jpg',
    },
    {
      id: 2,
      type: 'Cappuchino',
      store: 'Bean',
      storeImage: 'https://coffeecard.nyc/images/bean_logo.jpg',
    },
    {
      id: 3,
      type: 'Cappuchino',
      store: 'Royal Leaf',
      storeImage: 'https://coffeecard.nyc/images/royal_leaf_tea_logo.png',
    },
  ]
  // const [search, setSearch] = useState('')

  // const fetchCoffeeShops = async () => {
  //   const req = await fetch(`/api/coffeecard/shops`)
  //   const res = await req.json()
  //   setCoffeeShops(res)
  //   console.log('shops', res)
  // }

  // useEffect(() => {
  //   fetchCoffeeShops()
  // }, [])

  // const searchResult = shops.filter((shop) => {
  //   return shop.store.toLowerCase().includes(search.toLowerCase())
  // })
  console.log('test', req)
  return (
    <>
      <style jsx>{`
        .form {
          position: relative;
        }

        .form span {
          position: absolute;
          right: 17px;
          top: 13px;
          padding: 2px;
          border-left: 1px solid #d1d5db;
        }

        .left-pan {
          padding-left: 7px;
        }

        .left-pan i {
          padding-left: 10px;
        }

        .form-input {
          height: 55px;
          // text-indent: 33px;
          border-radius: 10px;
        }

        .form-input:focus {
          box-shadow: none;
          border: none;
        }
      `}</style>
      <div className='row height d-flex justify-content-center align-items-center pt-5 mb-5'>
        <div className='col-md-6'>
          <div className='form'>
            <input
              type='text'
              className='form-control form-input'
              placeholder='Search shops...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className='left-pan'>
              <i className='fa fa-search'></i>
            </span>
          </div>
        </div>
      </div>
      <div>
        {req.map((shop) => {
          return <Shop shop={shop} key={shop.id} />
        })}
      </div>
    </>
  )
}

export default shops
