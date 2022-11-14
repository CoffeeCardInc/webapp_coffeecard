import Link from 'next/link'

const Cards = ({ type, store, imageSrc }) => {
  const cups = [1, 2, 3, 4, 5]
  // const imageSrc = 'https://coffeecard.nyc/images/froth_logo.jpg'
  return (
    <>
      <style jsx>{`
        .bg-imgCard {
          background-image: url(${imageSrc});
          background-size: cover;
          background-position: center;
          box-shadow: var(--box-shadow-1);
        }
      `}</style>
      <div className='container-fluid mt-3'>
        <div className='row justify-content-center'>
          <div className='col-md-4 col-lg-4 p-0 mx-0 px-0'>
            <div
              className='card user-card bg-imgCard'
              style={{ backgroundColor: '#fff' }}
            >
              <div className='card-header row justify-content-between p-0 m-0 '>
                <h5>{type} Pass</h5>
                <button
                  className='btn '
                  style={{ backgroundColor: '#6a513b', color: 'white' }}
                >
                  Redeem
                </button>
              </div>
              <div className='card-block' style={{ height: '200px' }}>
                {/* <h6>{store}</h6> */}

                {/* <p className='text-muted m-t-15'>Coffee Available: 5</p> */}
                <div>
                  <p className='m-0'> Days Remaining: 5</p>
                  <p> Days Remaining: 5</p>
                  <hr />
                </div>
                <div className='row justify-content-around m-0 pt-5'>
                  {cups.map((cup, index) => {
                    return (
                      <Link href='/' key={index}>
                        <img
                          src='https://o.remove.bg/downloads/31c6a214-d1b9-4914-ac72-5a340cef6197/take-away-coffee-cup-icon-in-doodle-style-sign-coffee-to-go-disposable-plastic-cup-fast-food-classic-paper-cup-isolated-on-white-background-logo-for-coffee-shop-vector-removebg-preview.png'
                          alt='cups'
                          style={{
                            width: '50px',
                            height: '50px',
                            border: '0.5px solid gray',
                            borderRadius: '8px',
                          }}
                        />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
