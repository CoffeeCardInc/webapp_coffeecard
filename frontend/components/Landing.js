import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <section>
      <div>
        <div className='row align-items-center'>
          <div
            className='col-md-12 p-0 bg-img shadow-lg rounded'
            style={{ height: '400px' }}
          ></div>
          <div
            className='col text-col mt-5'
            style={{ fontSize: '18px', letterSpacing: '.1rem' }}
          >
            <h2>Your most refined ritual yet.</h2>
            <br />
            <div>
              <p className='about-text-2'>
                The best coffee in New York now has a subscirption.
              </p>
              <div className='d-sm-flex flex-column align-items-center justify-content-around'>
                <Link href='/login' className='nav-item nav-link'>
                  <button
                    className='btn col-md-12 col-lg-3 mt-4'
                    style={{ backgroundColor: '#40312e', color: 'white' }}
                  >
                    Log In
                  </button>
                </Link>
                <Link href='/register' className='nav-item nav-link'>
                  <button
                    className='btn col-md-12 col-lg-3 mt-4'
                    style={{ backgroundColor: '#40312e', color: 'white' }}
                  >
                    Join
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
