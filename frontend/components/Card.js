import Link from 'next/link'
import Image from 'next/image'
import myImage from '../public/cup.png'
import Confirm from './Confirm'

const Cards = ({ sub }) => {
  const { type, store, imageSrc, bgColor } = sub
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

        .date {
          font-size: 13px;
          color: #fff;
          margin: 0;
        }
        h6 {
          color: #fff;
        }
      `}</style>
      <div className='container-fluid mt-3'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-4 p-0 mx-0 px-0'>
            <div
              className='card user-card bg-imgCard'
              style={{ backgroundColor: `${bgColor}`, color: '#6a513b' }}
            >
              <div className='card-header row justify-content-between p-0 m-0 '>
                <h6 className='pl-1 my-1'>{type} Pass</h6>
                <h6 className='pr-1 my-1'> 5 cups</h6>
              </div>
              <div className='card-block' style={{ height: '200px' }}>
                {/* <hr className='m-1' /> */}
                <Confirm />
                <div className='row justify-content-between m-0 px-2'>
                  <p className='m-0 pt-4 date'> MM/DD/YY - MM/DD/YY</p>
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
