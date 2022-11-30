import React from 'react'
import Link from 'next/link'
import Cards from './Card'
import ProfileHeader from './ProfileHeader'

const Landing = () => {
  const loggedIn = true
  const subs = [
    {
      type: 'Espresso',
      store: 'Froth',
      bgColor: ' #6a513b',
      isSubscribed: true,
    },
    {
      type: 'Cappuchino',
      store: 'Bean',
      bgColor: '#40312e',
      isSubscribed: true,
    },
    {
      type: 'Cappuchino',
      store: 'Bean',
      bgColor: '#5e5e5e',
      isSubscribed: false,
    },
  ]

  switch (loggedIn) {
    case false:
      return (
        <section>
          <div>
            <div className='row align-items-center'>
              <div
                className='col-md-12 p-0 bg-img shadow-lg rounded'
                style={{ height: '450px' }}
              ></div>
              <div
                className='col text-col mt-5'
                style={{ fontSize: '18px', letterSpacing: '.1rem' }}
              >
                <h2>Your most refined ritual yet.</h2>
                <br />
                <div>
                  <p className='about-text-2'>
                    CoffeeCard empowers local coffee shops to turn their
                    customers into reoccuring subscribers.
                  </p>
                  <div className='d-sm-flex flex-column align-items-center justify-content-around'>
                    <Link href='/login' className='nav-item nav-link col-lg-12'>
                      <button
                        className='btn col-md-12 col-lg-4 mt-4'
                        style={{ backgroundColor: '#40312e', color: 'white' }}
                      >
                        Log In
                      </button>
                    </Link>
                    <Link
                      href='/register'
                      className='nav-item nav-link col-lg-12'
                    >
                      <button
                        className='btn col-md-12 col-lg-4 mt-4'
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

    default:
      return (
        <>
          <section>
            <ProfileHeader />
          </section>
          <h5 className='d-md-flex flex-column align-items-center justify-content-around '>
            Your Subscriptions:
          </h5>
          <div className='col-lg-4 p-0 cards'>
            {subs[0] ? (
              subs.map((sub, index) => {
                return <Cards key={index} sub={sub} />
              })
            ) : (
              <>
                <p className='mt-5'>
                  You currently do not have any subscription.
                </p>
                <button
                  className='btn col-md-12 col-lg-4 mt-4'
                  style={{ backgroundColor: '#40312e', color: 'white' }}
                >
                  Subscribe
                </button>
              </>
            )}
          </div>
        </>
      )
  }
}

export default Landing
