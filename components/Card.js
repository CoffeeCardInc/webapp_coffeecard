import { useState } from 'react'
import Confirm from './Confirm_Popup'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Cards = ({ membership }) => {
  const {
    type,
    active,
    total_redemptions,
    creation_on,
    remaining_redemptions,
  } = membership
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  /* Date range syntax everytime the subscription created or renewed the date range willl show the day of subscription and the day of expiry*/
  const dateObj = new Date(creation_on)

  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')

  const formattedDate = `${year}-${month}-${day}`

  const nextWeek = new Date(year, dateObj.getMonth(), dateObj.getDate() + 7)

  const nextWeekYear = nextWeek.getFullYear()
  const nextWeekMonth = String(nextWeek.getMonth() + 1).padStart(2, '0')
  const nextWeekDay = String(nextWeek.getDate()).padStart(2, '0')

  const formattedNextWeek = `${nextWeekYear}-${nextWeekMonth}-${nextWeekDay}`

  const dateRange = `${formattedDate} - ${formattedNextWeek}`
  /* Date range syntax end*/

  switch (active === 1) {
    case true:
      return (
        <>
          <style jsx>{`
            .bg-imgCard {
              // background-image: url(${''});
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              box-shadow: var(--box-shadow-1);
            }

            .date {
              font-size: 13px;
              color: #fff;
              margin: 0;
            }
            h6 {
              color: #fff;
            }
          `}</style>
          <div className='cardMe container-fluid '>
            <div className='row justify-content-center'>
              <div className='col-md-6 col-lg-12 p-0 mx-0 px-0'>
                <div
                  className='card user-card bg-imgCard'
                  style={{ backgroundColor: ` #6a513b`, color: '#6a513b' }}
                >
                  <div className='card-header row justify-content-between p-0 m-0 '>
                    <h6 className='pl-1 my-1'> Pass</h6>
                    <h6 className='pr-1 my-1'> {remaining_redemptions}</h6>
                  </div>
                  <div className='card-block' style={{ height: '200px' }}>
                    <Confirm membership={membership} />
                    <div className='row justify-content-between m-0 px-2'>
                      <p className='m-0 py-3 date'> {dateRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    default:
      return (
        <>
          <style jsx>{`
            .bg-imgCard {
              // background-image: url(${''});
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              box-shadow: var(--box-shadow-1);
            }

            .date {
              font-size: 13px;
              color: #fff;
              margin: 0;
            }
            h6 {
              color: #fff;
            }
          `}</style>
          <div className='cardMe container-fluid '>
            <div className='row justify-content-center'>
              <div className='col-md-6 col-lg-12 p-0 mx-0 px-0'>
                <div
                  className='card user-card bg-imgCard'
                  style={{ backgroundColor: `gray`, color: '#6a513b' }}
                >
                  <div className='card-header row justify-content-between p-0 m-0 '>
                    <h6 className='pl-1 my-1'>{type} Pass</h6>
                    <h6 className='pr-1 my-1'> Inactive</h6>
                  </div>

                  <div
                    className='card-block'
                    style={{ height: '200px' }}
                    onClick={toggle}
                  >
                    <Modal isOpen={modal} toggle={toggle} centered>
                      <ModalHeader toggle={toggle} className=' text-center'>
                        Reactivate Subscription
                      </ModalHeader>
                      <ModalBody>
                        This subscription is no longer activate. To reactivate
                        your subscription, please select here.
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
                          onClick={toggle}
                          className='col-sm-6 col-lg-11 '
                          style={{
                            backgroundColor: '#6a513b',
                            color: 'white',
                          }}
                        >
                          Reactivate
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
  }
}

export default Cards
