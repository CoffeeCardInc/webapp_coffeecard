import React from 'react'
import { useSession } from 'next-auth/react'


const ProfileHeader = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = '/login'
    }
  }); //Object {status: "loading"
  const { data: session } = useSession(); //Object {status: "authenticated", user: {…}, expires: "2021-09-01T00:00:00.000Z"}
  console.log(session)

  if (status === 'loading') {
    return "Loading or not authenticated..."
  }

  return ( // only renders if authenticated
    <div>
      <style jsx>{`
        .bg-img {
          background-image: url(session.user.image);
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
          <h5>{session.user.id}</h5>
          <h6>Brooklyn</h6>
          <p className='copyright'>0 points</p>
        </div>
      </div>
    </div>
  )
}


export default ProfileHeader
