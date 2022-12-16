import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import { useSelectedCoffee } from '../components/context'

const cup = () => {
  const imageSrc = 'https://coffeecard.nyc/images/froth_logo.jpg'
  const selectedCoffee = useSelectedCoffee()
  return (
    <>
      <section>
        <style jsx>{`
          .bg-imgCard {
            background-image: url(${imageSrc});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            box-shadow: var(--box-shadow-1);
          }

          .date {
            font-size: 13px;
            margin: 0;
            color: #fff;
          }
          h6 {
            color: #fff;
          }

          input[type='radio'] {
            display: none;
          }
          .btn {
            border: 2px solid var(--color-secondary);
            border-radius: 15px;
            background-color: var(--color-lightbrown);
            color: var(--color-secondary);
            padding: 7px 14px;
            font-size: 14px;
            cursor: pointer;
          }
          .success {
            border-color: var(--color-secondary);
            color: var(--color-secondary);
          }

          .success:hover {
            background-color: var(--color-secondary);
            color: white;
          }
        `}</style>
        <ProfileHeader />
        <div className='container-fluid mt-3'>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4 p-0 mx-0 px-0'>
              <div className='box' style={{ color: '#6a513b' }}>
                <div className='card-header row justify-content-between p-0 m-0 '>
                  <h6 className='pl-1 my-1'>Espresso Pass</h6>
                  <h6 className='pr-1 my-1'> 2 cups</h6>
                </div>
                <div className='card-block box' style={{ height: '200px' }}>
                  <h4
                    style={{
                      paddingTop: '80px',
                      paddingBottom: '40px',
                      textAlign: 'center',
                    }}
                  >
                    1 {selectedCoffee} Activated
                  </h4>
                  <div className='row justify-content-between m-0 px-2'>
                    {/* <p className='m-0 py-3 date'> MM/DD/YY - MM/DD/YY</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid mt-5 pb-5'>
          <div className='row justify-content-center'>
            <div className='col-md-4 col-lg-4'>
              <div>
                <div className=' text-center'>
                  <h5>Tip Your Barista</h5>
                </div>
                <htmlForm action='selectTip'>
                  <div className='row justify-content-around'>
                    <input
                      type='radio'
                      className='btn-check'
                      name='options-outlined'
                      id='success-outlined'
                      autocomplete='off'
                      checked
                    />
                    <label className='btn success' htmlFor='success-outlined'>
                      $1.00
                    </label>
                    <input
                      type='radio'
                      className='btn-check'
                      name='options-outlined'
                      id='success-outlined'
                      autocomplete='off'
                      checked
                    />
                    <label
                      className='btn success tip-choice'
                      htmlFor='success-outlined'
                    >
                      $2.00
                    </label>
                    <input
                      type='radio'
                      className='btn-check'
                      name='options-outlined'
                      id='success-outlined'
                      autocomplete='off'
                      checked
                    />
                    <label
                      className='btn success tip-choice'
                      htmlFor='success-outlined'
                    >
                      $3.00
                    </label>
                    <input
                      type='radio'
                      className='btn-check'
                      name='options-outlined'
                      id='success-outlined'
                      autocomplete='off'
                      checked
                    />
                    <label
                      className='btn success tip-choice'
                      htmlFor='success-outlined'
                    >
                      $4.00
                    </label>
                  </div>
                  <div>
                    <button>custom tip</button>
                    <p>tip amount</p>
                  </div>
                  <input type='submit' className='btn col-12' />
                </htmlForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default cup
