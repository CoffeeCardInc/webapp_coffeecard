import React from 'react'
import Link from 'next/link'
import Cards from './Card'

const Landing = () => {
  const loggedIn = true
  const cups = [1, 2, 3, 4, 5]

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

    default:
      return (
        <>
          <section>
            <style jsx>{`
              .bg-img {
                background-image: url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
              }
              .profile-card .card-up {
                height: 120px;
                border-top-left-radius: 0.25rem;
                border-top-right-radius: 0.25rem;
                border-bottom-left-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
              }
              .profile-card .avatar {
                width: 110px;
                margin-top: -110px;
                overflow: hidden;
                border: 3px solid #fff;
                border-radius: 50%;
              }
              .copyright {
                text-align: center;
                font-size: 13px;
                color: #aaa;
              }
            `}</style>
            <div className='row d-flex justify-content-center mt-5 1'>
              <div className='col-md-10 col-xl-8 text-center mt-5'>
                {/* <h3 className='my-5'>profiles</h3> */}
                {/* <p className='mb-4 pb-2 mb-md-5 pb-md-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p> */}
              </div>
            </div>

            <div className='row text-center d-flex align-items-center justify-content-center'>
              <div className=' col-md-6 mb-5 mb-md-0 d-flex align-items-center'>
                <div className='card profile-card col-sm-12 p-0 '>
                  <div
                    className='card-up '
                    style={{ backgroundColor: '#40312e' }}
                  ></div>
                  <div
                    className='avatar mx-auto bg-white bg-img '
                    style={{ width: '104px', height: '104px' }}
                  ></div>
                  <div className='card-body p-2'>
                    <h4>Steve S.</h4>

                    <p className='dark-grey-text mb-0 copyright'>
                      Active member
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h3>Your Subscriptions:</h3>
          <Cards />
        </>
      )
  }
}

export default Landing
