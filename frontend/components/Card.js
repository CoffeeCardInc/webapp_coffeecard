import Link from 'next/link'

const Cards = () => {
  // const imageSrc = require('../public/ccupnobg.png')
  const cups = [1, 2, 3, 4]
  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-md-4 col-lg-4'>
            <div className='card user-card'>
              <div className='card-header row justify-content-between'>
                <h5>Your Subscription</h5>
                <button className='btn'>Redeem</button>
              </div>
              <div className='card-block'>
                <div className='user-image'>
                  {/* <img
                    src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=612x612&w=0&h=MOvSM2M1l_beQ4UzfSU2pfv4sRjm0zkpeBtIV-P71JE='
                    className='img-radius'
                    alt='User-Profile-Image'
                  /> */}
                </div>
                <h6 className='f-w-600 m-t-25 m-b-10'>Alessa Robert</h6>

                <hr />
                <p className='text-muted m-t-15'>Coffee Available: 5</p>
                <div className='activity-leval'>
                  {cups.map((cup, index) => {
                    return (
                      <Link href='/' key={index}>
                        <img
                          src='../public/ccupnobg.png'
                          className='img-radius active'
                          alt='cups'
                          style={{ width: '50px', height: '50px' }}
                        />
                      </Link>
                    )
                  })}
                </div>
                <div className='row bg-c-blue counter-block m-t-10 p-20 justify-content-center'>
                  <div className='col-4'></div>
                </div>
                <hr />
                <p className='m-t-15 text-muted'> Days Remaining: 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
