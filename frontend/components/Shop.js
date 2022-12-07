import React from 'react'
import Image from 'next/image'

const Shop = ({ shop }) => {
  const { type, store, storeImage } = shop
  return (
    <section className='p-2 p-md-5 text-center text-lg-start shadow-1-strong rounded'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-10'>
          <div className='card'>
            <div className='card-body m-0 pt-0'>
              <div className='row'>
                <div className='col-lg-4 d-flex justify-content-center align-items-center mb-1 mb-lg-0'>
                  <img
                    src={storeImage}
                    className='img-fluid shadow-1'
                    alt='coffeeshop avatar'
                    width='150'
                    height='150'
                  />
                </div>
                <div className='col-lg-8'>
                  <p className='fw-bold lead mb-2'>
                    <strong>{store}</strong>
                  </p>
                  <p className='fw-bold text-muted'>shop adress</p>
                  <p className='fw-bold text-muted'>shop hours</p>
                  {/* <p className='text-muted fw-light mb-0'>
                    Sample description about the coffeeshop.
                  </p> */}
                  <hr />
                  <div className='row justify-content-around'>
                    <p className='my-auto'>Tier 1</p>
                    <button
                      className='btn'
                      style={{ backgroundColor: '#40312e', color: 'white' }}
                    >
                      {' '}
                      Subscribe
                    </button>
                  </div>
                  <hr />
                  <div className='row justify-content-around'>
                    <p className='my-auto'>Tier 2</p>
                    <button
                      className='btn'
                      style={{ backgroundColor: '#40312e', color: 'white' }}
                    >
                      {' '}
                      Subscribe
                    </button>
                  </div>
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
