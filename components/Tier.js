/*Individual Tier component that takes the shop / pass data and populates the component*/
import React from 'react'
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useSession } from 'next-auth/react'
const Tier = ({ tier }) => {
  const { data: session, status } = useSession()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [collapse, setCollapse] = useState(false)
  const {
    pass_description,
    perk_item_1,
    perk_item_2,
    perk_item_3,
    perk_item_4,
    pass_id,
  } = tier
  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  const updateMemberships = async () => {
    let dateObj = Date.now()

    const res = await fetch(
      `http://localhost:3000/api/coffeecard/memberships`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: session.user.id,
          active: 1,
          total_redemptions: 5,
          remaining_redemptions: 5,
          pass_id: pass_id,
          duration: 0,
        }),
      }
    )
  }

  return (
    <>
      <hr />
      <div className='row justify-content-around'>
        <span></span>
        <p className='my-auto' onClick={handleCollapse}>
          {pass_description}
        </p>
        <button
          className='btn'
          style={{ backgroundColor: '#40312e', color: 'white' }}
          onClick={toggle}
        >
          {' '}
          Subscribe
        </button>
        <Modal isOpen={modal} toggle={toggle} centered>
          <ModalHeader toggle={toggle} className=' text-center'>
            Confirm Subscription
          </ModalHeader>
          <ModalBody>
            This Tier contains Coffee, Latte, Espresso, Cappuchino.
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={toggle}
              className='col-sm-6 col-lg-11 '
              style={{
                backgroundColor: '#6a513b',
                color: 'white',
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={(toggle, updateMemberships)}
              className='col-sm-6 col-lg-11 '
              style={{
                backgroundColor: '#6a513b',
                color: 'white',
              }}
            >
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      {collapse ? (
        <div>
          <p className='fw-bold text-muted mb-0'>{perk_item_1}</p>
          <p className='fw-bold text-muted mb-0 my-auto'>{perk_item_2}</p>
          <p className='fw-bold text-muted mb-0 my-auto'>{perk_item_3}</p>
          <p className='fw-bold text-muted mb-0 my-auto'>{perk_item_4}</p>
        </div>
      ) : (
        ''
      )}

      <hr />
    </>
  )
}

export default Tier
