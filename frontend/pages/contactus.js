import { useRef } from 'react'
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
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className='row'>
          <div className='col-md-12 mb-md-0'>
            <form
              id='contact-form'
              name='contact-form'
              ref={form}
              onSubmit={sendEmail}
            >
              <div className='row'>
                <div className='col-md-6'>
                  <div className='md-form mb-0'>
                    <input
                      type='text'
                      id='name'
                      name='name'
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
                      name='email'
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
            </form>

            <div className='text-center text-md-left'>
              <a
                className='btn col-md-4'
                style={{ backgroundColor: '#40312e', color: 'white' }}
              >
                Send
              </a>
            </div>
            <div className='status'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default contactus
