import React from 'react'
import Head from 'next/head'

const profile = () => {
  return (
    <div className='container rounded bg-white mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-3 border-right'>
          <div className='d-flex flex-column align-items-center text-center p-3 py-5'>
            <img
              className='rounded-circle mt-5'
              width='150px'
              src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=612x612&w=0&h=MOvSM2M1l_beQ4UzfSU2pfv4sRjm0zkpeBtIV-P71JE='
            />
            <span className='font-weight-bold'>Edogaru</span>
            <span className='text-black-50'>edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div className='col-md-5 border-right'>
          <div className='p-3 py-5'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h4 className='text-right'>Profile Settings</h4>
            </div>
            <div className='row mt-2'>
              <div className='col-md-6'>
                <label className='labels'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='first name'
                  // value=''
                />
              </div>
              <div className='col-md-6'>
                <label className='labels'>Surname</label>
                <input
                  type='text'
                  className='form-control'
                  // value=''
                  placeholder='surname'
                />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-md-12'>
                <label className='labels'>Mobile </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter phone number'
                  // value=''
                />
              </div>
              <div className='col-md-12'>
                <label className='labels'>Address Line 1</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter address line 1'
                  // value=''
                />
              </div>
              <div className='col-md-12'>
                <label className='labels'>Address Line 2</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter address line 2'
                  // value=''
                />
              </div>
              <div className='col-md-12'>
                <label className='labels'>Zip</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter address line 2'
                  // value=''
                />
              </div>
              <div className='col-md-12'>
                <label className='labels'>State</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter address line 2'
                  // value=''
                />
              </div>

              <div className='col-md-12'>
                <label className='labels'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter email'
                  // value=''
                />
              </div>
            </div>

            <div className='mt-5 text-center'>
              <button
                className='btn profile-button'
                type='button'
                style={{ backgroundColor: '#40312e', color: '#fff' }}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='p-3 py-5'>
            <br />
            <div className='col-md-12'>
              <label className='labels'>Additional Details</label>
              <input
                type='text'
                className='form-control'
                placeholder='additional details'
                // value=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile
