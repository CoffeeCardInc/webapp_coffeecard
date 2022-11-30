import React from 'react'

const ProfileHeader = () => {
  return (
    <div>
      <style jsx>{`
        .bg-img {
          background-image: url('https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=');
        }

        .copyright {
          font-size: 13px;
          color: #aaa;
          margin: 0;
        }

        .bg-img2 {
          background-image: url('https://coffeecard.nyc/images/froth_logo.jpg');
          background-size: cover;
          background-position: center;
        }
        .profile-card {
          padding: 10px 0 0 0;
        }
        .profile-card .avatar {
          overflow: hidden;
          border: 3px solid #fff;
          border-radius: 50%;
        }
      `}</style>
      <div className='row profile-card justify-content-center align-items-center pb-5'>
        <div
          className='avatar bg-white bg-img'
          style={{ width: '104px', height: '104px' }}
        ></div>
        <div className='px-3'>
          <h5>Steve S.</h5>
          <h6>Brooklyn</h6>
          <p className='copyright'>0 points</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
