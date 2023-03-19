import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const contactus = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <section>
        <h2 className='h1-responsive font-weight-bold text-center my-4'>
          Contact us
        </h2>

        <p className='text-center w-responsive mx-auto mb-5'>
          Questions? Contact our team directly.
        </p>

        <form className='row' onSubmit={sendEmail} ref={form}>
          <div className='col-md-12 mb-md-0'>
            <div id='contact-form' name='contact-form'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='md-form mb-0'>
                    <input
                      type='text'
                      id='name'
                      name='user_name'
                      className='form-control'
                    />
                    <label htmlFor='name' className=''>
                      Your name
                    </label>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='md-form mb-0'>
                    <input
                      type='text'
                      id='email'
                      name='user_email'
                      className='form-control'
                    />
                    <label htmlFor='email' className=''>
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-12'>
                  <div className='md-form mb-0'>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      className='form-control'
                    />
                    <label htmlFor='subject' className=''>
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-12'>
                  <div className='md-form'>
                    <textarea
                      type='text'
                      id='message'
                      name='message'
                      rows='2'
                      className='form-control md-textarea'
                    ></textarea>
                    <label htmlFor='message'>Your message</label>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-center text-md-left'>
              <input
                className='btn col-md-4'
                type='submit'
                style={{ backgroundColor: '#40312e', color: 'white' }}
              />
            </div>
            <div className='status'></div>
          </div>
        </form>
      </section>
    </>
  )
}

export default contactus
