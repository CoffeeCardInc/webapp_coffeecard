import React from 'react'
import { useState } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const profile = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <>
      <style jsx>{`
        hr {
          display: block;
          height: 1px;
          border: 0;
          border-top: 1px solid #ccc;
          margin: 1em 0;
          padding: 0;
        }
        .copyright {
          margin-top: 15px;
          text-align: center;
          font-size: 13px;
          color: #aaa;

          margin-bottom: 0;
          text-decoration: underline;
        }
        .point {
          font-size: 18px;
          color: #aaa;
        }
      `}</style>
      <div className='container border rounded bg-white'>
        <div className='row '>
          <div className='col-md-3 col-lg-12'>
            <div className='d-flex flex-column  p-3 py-5'>
              <img
                className='rounded-circle mb-2 mx-auto'
                width='150px'
                src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=612x612&w=0&h=MOvSM2M1l_beQ4UzfSU2pfv4sRjm0zkpeBtIV-P71JE='
              />
              <div className='logo-div' onClick={toggle}>
                <i className='fa-solid fa-gear logo'></i>
              </div>
              <span className='font-weight-bold mx-auto mb-3'>Edogaru</span>
              <hr />
              <div className='col-12 d-flex justify-content-between p-0'>
                <div className='d-flex flex-column col-6'>
                  <span className='font-weight-bold text-center'>
                    Loyalty Points
                  </span>
                  <span className='text-center point'>o</span>
                </div>
                <div className='d-flex flex-column col-6  '>
                  <span className='font-weight-bold text-center'>
                    Subscriptions
                  </span>
                  <span className='text-center point'>o</span>
                </div>
              </div>

              <hr />
              <div className='mb-3'>
                <i class='fa-regular fa-envelope'></i>
                <span className='text-black-50 ml-4'>edogaru@mail.com.my</span>
              </div>
              <div>
                <i class='fa-solid fa-phone'></i>
                <span className='text-black-50 ml-4'>123-456-7890</span>
              </div>
            </div>
          </div>

          <div
            className='card-block'
            // style={{ height: '200px', marginTop: '150px' }}
          >
            <Modal
              isOpen={modal}
              toggle={toggle}
              centered
              style={{ marginTop: '40px' }}
            >
              <ModalBody>
                <div className='col-md-6  col-lg-12'>
                  <div>
                    <ModalHeader toggle={toggle} className=' text-center'>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h4 className='text-right m-0'>Profile Settings</h4>
                      </div>
                    </ModalHeader>
                    <div className='row mt-2'>
                      <div className='col-md-6 col-lg-12'>
                        <label className='labels'>Name</label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='first name'
                          // value=''
                        />
                      </div>
                      <div className='col-md-6 col-lg-12'>
                        <label className='labels'>Surname</label>
                        <input
                          type='text'
                          className='form-control'
                          // value=''
                          placeholder='surname'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <label className='labels'>Mobile </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='update phone number'
                          // value=''
                        />
                      </div>
                      <div className='col-md-12'>
                        <label className='labels'>Email</label>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='update email'
                          // value=''
                        />
                      </div>

                      <div className='col-md-12'>
                        <label className='labels'>Password</label>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='update password'
                          // value=''
                        />
                      </div>
                      <p className='copyright mx-auto'>Delete Account</p>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={toggle}
                  className='col-sm-6 col-lg-6 '
                  style={{
                    backgroundColor: '#efefef',
                    color: ' #000000',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={toggle}
                  className='col-sm-6 col-lg-6 '
                  style={{
                    backgroundColor: '#6a513b',
                    color: 'white',
                  }}
                >
                  Save
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        <button
          className='btn col-sm-3 col-lg-6 mx-auto'
          style={{ backgroundColor: '#40312e', color: 'white' }}
        >
          Logout
        </button>
        <p className='copyright pb-3'> Manage Subscriptions</p>
      </div>
    </>
  )
}

export default profile
