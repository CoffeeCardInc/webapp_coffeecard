import React from 'react'
import Shop from '../components/Shop'
import RestaurantList from '../components/Shop'

const shops = () => {
  // shopDetails = [
  //   {
  //     image: '',
  //   },
  // ]

  return (
    <>
      <style jsx>{`
        .form {
          position: relative;
        }

        .form span {
          position: absolute;
          right: 17px;
          top: 13px;
          padding: 2px;
          border-left: 1px solid #d1d5db;
        }

        .left-pan {
          padding-left: 7px;
        }

        .left-pan i {
          padding-left: 10px;
        }

        .form-input {
          height: 55px;
          // text-indent: 33px;
          border-radius: 10px;
        }

        .form-input:focus {
          box-shadow: none;
          border: none;
        }
      `}</style>
      <div className='row height d-flex justify-content-center align-items-center pt-5 mb-5'>
        <div className='col-md-6'>
          <div className='form'>
            {/* <i className='fa fa-search'></i> */}
            <input
              type='text'
              className='form-control form-input'
              placeholder='Search shops...'
            />
            <span className='left-pan'>
              <i className='fa fa-search'></i>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Shop />
        <Shop />
        <Shop />
      </div>
    </>
  )
}

export default shops
