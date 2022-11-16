import Link from 'next/link'
import Image from 'next/image'
import myImage from '../public/cup.png'

const Cards = ({ type, store, imageSrc }) => {
  const cups = [1, 2, 3, 4, 5]
  const imgPublic = require('../public/cup.png')

  return (
    <>
      <style jsx>{`
        .bg-imgCard {
          background-image: url(${imageSrc});
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: var(--box-shadow-1);
        }
      `}</style>
      <div className='container-fluid mt-3'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-4 p-0 mx-0 px-0'>
            <div
              className='card user-card bg-imgCard'
              style={{ backgroundColor: '#fff', color: '#6a513b' }}
            >
              <div className='card-header row justify-content-between p-0 m-0 '>
                <h5 className='pl-1'>{type} Pass</h5>
                <button
                  className='btn '
                  style={{ backgroundColor: '#6a513b', color: 'white' }}
                >
                  Redeem
                </button>
              </div>
              <div className='card-block' style={{ height: '200px' }}>
                <div className='row justify-content-between m-0 px-1'>
                  <p className='m-0'>{store}</p>
                  <p className='m-0'> MM/DD/YY - MM/DD/YY</p>
                </div>
                <hr className='m-1' />
                {/* <h6>{store}</h6> */}

                {/* <p className='text-muted m-t-15'>Coffee Available: 5</p> */}
                <div
                  className='row justify-content-around m-0'
                  style={{ paddingTop: '110px' }}
                >
                  {cups.map((cup, index) => {
                    return (
                      <Link href='/' key={index}>
                        <Image
                          src={myImage}
                          alt='cups'
                          style={{
                            width: '50px',
                            height: '50px',
                            border: '0.5px solid gray',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
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
