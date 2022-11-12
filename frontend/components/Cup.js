import React from 'react'

const Cup = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-md-4 col-lg-4'>
            <div className='card user-card'>
              <div className='card-header text-center'>
                <h5>
                  Froth <br /> Cold Brew Pass
                </h5>
              </div>
              <div className='card-block'>
                <div className='user-image'>
                  <img
                    src=''
                    className='img-radius '
                    alt='User-Profile-Image'
                  />
                </div>
                <hr />
                <p className='text-muted m-t-15'>MM/DD/YY TT:TT</p>
                <div className='list-unstyled activity-leval'></div>
                <p className='m-t-15 text-muted'> Timer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-md-4 col-lg-4'>
            <div className='card user-card'>
              <div className='card-header text-center'>
                <h5>Tip Your Barista</h5>
              </div>
              <div className='card-block'>
                <div className='row counter-block justify-content-space-between'>
                  <div className='col-3 bg-c-blue'>$1.00</div>
                  <div className='col-3 bg-c-blue'>$2.00</div>
                  <div className='col-3 bg-c-blue'>$3.00</div>
                  <div className='col-3 bg-c-blue'>$4.00</div>
                </div>
                <div className='row counter-block justify-content-center '>
                  <div className='col-4 bg-c-blue'>Custom Tips</div>
                  <div className='col-4 bg-c-blue'>No Tip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cup
