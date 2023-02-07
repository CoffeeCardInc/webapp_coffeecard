/*Individual Tier component that takes the shop / pass data and populates the component*/
import React from 'react'
import { useState } from 'react'

const Tier = ({ tier }) => {
  const [collapse, setCollapse] = useState(false)
  const { pass_description } = tier
  const handleCollapse = () => {
    setCollapse(!collapse)
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
        >
          {' '}
          Subscribe
        </button>
      </div>
      {collapse ? (
        <div>
          <p className='fw-bold text-muted mb-0'>Latte</p>
          <p className='fw-bold text-muted mb-0 my-auto'>Cappuchino</p>
          <p className='fw-bold text-muted mb-0 my-auto'>Espresso</p>
          <p className='fw-bold text-muted mb-0 my-auto'>Moccha</p>
        </div>
      ) : (
        ''
      )}

      <hr />
    </>
  )
}

export default Tier
