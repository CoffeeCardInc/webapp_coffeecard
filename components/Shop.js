/* Individual shops component the imports the Tiers from database*/

import React from 'react'
import Image from 'next/image'
import Tier from './Tier'

const Shop = ({ shop }) => {
  const { shop_name, pass, shop_address, shop_owner_name } = shop
  return (
    <section className='p-2 p-md-5 text-center text-lg-start shadow-1-strong rounded'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-10'>
          <div className='card'>
            <div className='card-body m-0 pt-0'>
              <div className='row'>
                <div className='col-lg-4 d-flex justify-content-center align-items-center mb-1 mb-lg-0'>
                  <img
                    src={shop_owner_name}
                    className='img-fluid shadow-1'
                    alt='coffeeshop'
                    width='150'
                    height='150'
                  />
                </div>
                <div className='col-lg-8'>
                  <p className='fw-bold lead mb-2'>
                    <strong>{shop_name}</strong>
                  </p>
                  <p className='fw-bold text-muted mb-0'>{shop_address}</p>
                  <p className='fw-bold text-muted'>8:00 am - 5:00 pm</p>
                  {/* <p className='text-muted fw-light mb-0'>
                    Sample description about the coffeeshop.
                  </p> */}
                  {pass.map((tier, index) => {
                    return <Tier key={index} tier={tier} />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
