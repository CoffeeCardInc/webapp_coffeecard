/*Individual Tier component that takes the shop / pass data and populates the component*/
import React from 'react'
import { useState } from 'react'

const Tier = ({ tier }) => {
  const [collapse, setCollapse] = useState(false)
  const {
    pass_description,
    perk_item_1,
    perk_item_2,
    perk_item_3,
    perk_item_4,
  } = tier
  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  console.log('pass', tier.perk_item_1)

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
        >
          {' '}
          Subscribe
        </button>
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
