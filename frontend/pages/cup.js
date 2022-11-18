import React from 'react'
import Link from 'next/link'
import myImg from '../public/coffeebean.png'
import Image from 'next/image'
import ProfileHeader from '../components/ProfileHeader'

const cup = () => {
  return (
    <>
      <section>
        <style jsx>{`
          .bg-img {
            background-image: url('https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=');
          }
          .bg-img2 {
            background-image: url('https://coffeecard.nyc/images/froth_logo.jpg');
            background-size: cover;
            background-position: center;
          }

          .redeem-card {
            border: 3px solid #aaa;
            border-radius: 8px;
          }
        `}</style>

        <ProfileHeader />
        <div
          className='redeem-card d-flex flex-column align-items-center mt-2'
          style={{ height: '300px' }}
        >
          <div
            className='bg-img2'
            style={{ height: '50px', width: '150px' }}
          ></div>
          <h4>Espresso Pass</h4>
          <Image
            src={myImg}
            className='spinner'
            style={{ height: '150px', width: '150px' }}
          />
          <h6>MM/DD/YY TT:TT</h6>
          <h6>Timer 10 min cooldown</h6>
        </div>
        <div className='mt-5 '>
          <h4 className='text-center mb-4 '>Tip your barista</h4>
          <div className='card-block'>
            <div className='row counter-block justify-content-around'>
              <div className='col-2'>$1.00</div>
              <div className='col-2'>$2.00</div>
              <div className='col-2'>$3.00</div>
              <div className='col-2'>$4.00</div>
            </div>
            <div className='row counter-block justify-content-center '>
              <div className='col-4 text-center'>Custom Tips</div>
              <div className='col-4 text-center'>No Tip</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default cup
