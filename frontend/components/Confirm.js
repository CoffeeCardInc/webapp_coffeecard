// Popup if you want to redeem a cup
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Link from 'next/link'

const Confirm = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <>
      <div
        className='row justify-content-center mx-auto'
        style={{ paddingTop: '80px', paddingBottom: '40px' }}
      >
        <Button
          onClick={toggle}
          className='btn col-10'
          style={{ backgroundColor: '#fff', color: '#40312e' }}
        >
          Redeem
        </Button>
        <Modal isOpen={modal} toggle={toggle} centered>
          <ModalHeader toggle={toggle} className=' text-center'>
            Redeem Your Cup
          </ModalHeader>
          <ModalBody>
            Are your sure you want to redeem this cup now? Once your order is
            activated it will be available for use for the next 10 minutes.
            <form class='form'>
              <h5 class>Select an option</h5>
              <div class='inputGroup'>
                <input id='radio1' name='radio' type='radio' />
                <label for='radio1'>Latte</label>
              </div>
              <div class='inputGroup'>
                <input id='radio2' name='radio' type='radio' />
                <label for='radio2'>Cappuchino</label>
              </div>
              <div class='inputGroup'>
                <input id='radio3' name='radio' type='radio' />
                <label for='radio3'>Espresso</label>
              </div>
              <div class='inputGroup'>
                <input id='radio4' name='radio' type='radio' />
                <label for='radio4'>Mocha</label>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Link href='/' className='col-sm-6 p-1 m-0 col-lg-6'>
              <Button
                onClick={toggle}
                className='col-sm-6 col-lg-11 '
                style={{ backgroundColor: '#6a513b', color: 'white' }}
              >
                Cancel
              </Button>
            </Link>
            <Link href='/cup' className='col-sm-6 p-1 m-0 col-lg-6 '>
              <Button
                onClick={toggle}
                className='col-sm-6 col-lg-11 '
                style={{ backgroundColor: '#6a513b', color: 'white' }}
              >
                Confirm
              </Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    </>
  )
}

export default Confirm
