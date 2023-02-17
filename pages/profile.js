import React from 'react'
import { useState } from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// check if someone is signed in
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'

export default function profile() {
  const { data: session, status } = useSession()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [modalSecondary, setModalSecondary] = useState(false)
  const toggleSecondary = () => setModalSecondary(!modalSecondary)
  const [name, setName] = useState('')

  const updateProfile = (e) => {
    e.preventDefault()
    fetch(`/api/coffeecard/users/infoupdate`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
      .then((req) => req.json())
      .then((data) => console.log(data))
  }
  const handleDeleteAccount = async () => {
    await fetch(`/api/coffeecard/users/infoupdate`, {
      method: 'DELETE',
    })
  }

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>
  }

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
                style={{ width: '104px', height: '104px' }}
                src={session?.user?.image}
              />

              <UncontrolledDropdown group color='light'>
                <DropdownToggle tag='span' className='logo-div'>
                  <i className='fa-solid fa-gear '></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={toggle} className='btn-active'>
                    Edit profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    onClick={toggleSecondary}
                    className='btn-active'
                  >
                    Edit profile photo
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <span className='font-weight-bold mx-auto mb-3'>
                {session?.user?.name}
              </span>
              <hr />
              <div className='col-12 d-flex justify-content-between p-0'>
                <div className='d-flex flex-column col-6'>
                  <span className='font-weight-bold text-center'>
                    Loyalty points
                  </span>
                  <span className='text-center point'>0</span>
                </div>
                <div className='d-flex flex-column col-6  '>
                  <span className='font-weight-bold text-center'>
                    Subscription
                  </span>
                  <span className='text-center point'>0</span>
                </div>
              </div>

              <hr />
              <div className='mb-3'>
                <i className='fa-regular fa-envelope'></i>
                <span className='text-black-50 ml-4'>
                  {session?.user?.email}
                </span>
              </div>
              <div>
                <i className='fa-solid fa-phone'></i>
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
                  <form>
                    <ModalHeader toggle={toggle} className=' text-center'>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h4 className='text-right m-0'>Profile settings</h4>
                      </div>
                    </ModalHeader>
                    <div className='row mt-2'>
                      <div className='col-md-6 col-lg-12'>
                        <label className='labels'>Name</label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='name'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <label className='labels'>Mobile </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='phone number'
                          // value=''
                          // onChange={}
                        />
                      </div>
                      <div className='col-md-12'>
                        <label className='labels'>Email</label>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='email'
                          // value=''
                          // onChange={}
                        />
                      </div>

                      <div className='col-md-12'>
                        <label className='labels'>Password</label>
                        <input
                          type='password'
                          className='form-control'
                          placeholder='password'
                          // value=''
                          // onChange={}
                        />
                      </div>
                      <p
                        className='copyright mx-auto'
                        onClick={handleDeleteAccount}
                      >
                        Delete account
                      </p>
                    </div>
                  </form>
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
                  onClick={updateProfile}
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
          <div
            className='card-block'
            // style={{ height: '200px', marginTop: '150px' }}
          >
            <Modal
              isOpen={modalSecondary}
              toggle={toggleSecondary}
              centered
              style={{ marginTop: '40px' }}
            >
              <ModalBody>
                <div className='col-md-6  col-lg-12'>
                  <div>
                    <ModalHeader
                      toggle={toggleSecondary}
                      className=' text-center'
                    >
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h4 className='text-right m-0'>Upload Photo</h4>
                      </div>
                    </ModalHeader>
                    <div className='row mt-2'>
                      <label className='custom-file-upload'>
                        <input type='file' />
                      </label>
                    </div>
                    <p>file size less then 5Mb</p>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
        <button
          className='btn col-sm-3 col-lg-6 mx-auto'
          style={{ backgroundColor: '#40312e', color: 'white' }}
        >
          Log out
        </button>
        <p className='copyright pb-3'> Manage subscriptions</p>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: {
        ...(await getServerSession(ctx.req, ctx.res, authOptions)),
      },
    },
  }
}
