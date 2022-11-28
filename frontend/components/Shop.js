import React from 'react'
import Image from 'next/image'

const Shop = () => {
  return (
    <section className='p-2 p-md-5 text-center text-lg-start shadow-1-strong rounded'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-10'>
          <div className='card'>
            <div className='card-body m-1'>
              <div className='row'>
                <div className='col-lg-4 d-flex justify-content-center align-items-center mb-1 mb-lg-0'>
                  <img
                    src='https://coffeecard.nyc/images/froth_logo.jpg'
                    className='img-fluid shadow-1'
                    alt='coffeeshop avatar'
                    width='200'
                    height='200'
                  />
                </div>
                <div className='col-lg-8'>
                  <p className='fw-bold lead mb-2'>
                    <strong>Froth</strong>
                  </p>
                  <p className='fw-bold text-muted mb-4'>New York</p>
                  <p className='text-muted fw-light mb-0'>
                    Sample description about the coffeeshop.
                  </p>
                  <button
                    className='btn mt-2 col-sm-12 col-lg-7'
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
    </section>
  )
}

export default Shop
