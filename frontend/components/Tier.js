import React from 'react'
import { useState } from 'react'

const Tier = () => {
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <>
      <hr />
      <div className='row justify-content-around'>
        <p className='my-auto' onClick={handleCollapse}>
          Tier 1
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
