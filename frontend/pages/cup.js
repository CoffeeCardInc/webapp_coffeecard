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
          .tip-choice {
            border-color: var(--color-secondary);
            color: var(--color-secondary);
            border-radius: 35%;
          }
          .tip-choice:after {
            background-color: var(--color-secondary);
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
                {/* <div className='card-block'>
                  <div className='row counter-block justify-content-space-between'>
                    <div className='col-3 '>$1.00</div>
                    <div className='col-3 '>$2.00</div>
                    <div className='col-3 '>$3.00</div>
                    <div className='col-3'>$4.00</div>
                  </div>
                  <div className='row counter-block justify-content-center '>
                    <div className='col-4 '>Custom Tip</div>
                    <div className='col-4'>No Tip</div>
                  </div>
                </div> */}
                <htmlForm action='selectTip'>
                  <input
                    type='radio'
                    className='btn-check'
                    name='options-outlined'
                    id='success-outlined'
                    autocomplete='off'
                    checked
                  />
                  <label
                    className='btn btn-outline-success tip-choice'
                    htmlFor='success-outlined'
                    // style={{
                    //   color: 'red',

                    //   borderColor: 'red',
                    // }}
                  >
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
                    className='btn btn-outline-success'
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
                    className='btn btn-outline-success'
                    htmlFor='success-outlined'
                  >
                    $3.00
                  </label>

                  <input
                    type='radio'
                    className='btn-check'
                    name='options-outlined'
                    id='danger-outlined'
                    autocomplete='off'
                  />
                  <label
                    className='btn btn-outline-success'
                    htmlFor='danger-outlined'
                  >
                    $4.00
                  </label>
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
