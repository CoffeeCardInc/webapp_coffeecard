// Popup if you want to redeem a cup
import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Link from 'next/link'
import confirmStyles from '../styles/Confirm.module.css'
import {
  useSelectedCoffee,
  useSetSelectedCoffee,
  useSetSelectedMembership,
} from './context'

const Confirm = ({ membership }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const selectedCoffee = useSelectedCoffee()
  const setSelectedCoffee = useSetSelectedCoffee()
  const setSelectedMembership = useSetSelectedMembership()
  const { membership_id, pass_id, remaining_redemptions } = membership

  const [coffeeOptions, setCoffeeOptions] = useState([])
  const { perk_item_1, perk_item_2, perk_item_3, perk_item_4 } = coffeeOptions

  const startTimer = async () => {
    await fetch(`api/coffeecard/memberships/${membership_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activated: true,
        duration: 600,
        remaining_redemptions: remaining_redemptions - 1,
      }),
    })
  }

  const fetchPassPerkItems = async () => {
    const res = await fetch(`api/coffeecard/pass/${pass_id}`)
    const req = await res.json()
    setCoffeeOptions(req)
  }

  useEffect(() => {
    fetchPassPerkItems()
  }, [])

  // console.log('pass info', coffeeOptions)

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
            <form className='form'>
              <h5>Select an option</h5>

              <div className={confirmStyles.inputGroup}>
                <input
                  id='radio1'
                  name='radio'
                  type='radio'
                  checked={selectedCoffee === perk_item_1}
                  value={perk_item_1}
                  onChange={(e) => {
                    setSelectedCoffee(e.target.value)
                  }}
                />
                <label htmlFor='radio1'>{perk_item_1}</label>
              </div>
              <div className={confirmStyles.inputGroup}>
                <input
                  id='radio2'
                  name='radio'
                  type='radio'
                  checked={selectedCoffee === perk_item_2}
                  value={perk_item_2}
                  onChange={(e) => {
                    setSelectedCoffee(e.target.value)
                  }}
                />
                <label htmlFor='radio2'>{perk_item_2}</label>
              </div>
              <div className={confirmStyles.inputGroup}>
                <input
                  id='radio3'
                  name='radio'
                  type='radio'
                  checked={selectedCoffee === perk_item_3}
                  value={perk_item_3}
                  onChange={(e) => {
                    setSelectedCoffee(e.target.value)
                  }}
                />
                <label htmlFor='radio3'>{perk_item_3}</label>
              </div>
              <div className={confirmStyles.inputGroup}>
                <input
                  id='radio3'
                  name='radio'
                  type='radio'
                  checked={selectedCoffee === perk_item_4}
                  value={perk_item_4}
                  onChange={(e) => {
                    setSelectedCoffee(e.target.value)
                  }}
                />
                <label htmlFor='radio3'>{perk_item_4}</label>
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
                onClick={() => {
                  startTimer()
                  setSelectedMembership(membership_id)
                  toggle()
                }}
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
