const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(
  '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'
)

const contactus = () => {
  const msg = {
    to: 'latandor@gmail.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })

  return (
    <>
      <section>
        <h2 className='h1-responsive font-weight-bold text-center my-4'>
          Contact us
        </h2>

        <p className='text-center w-responsive mx-auto mb-5'>
          Questions? Contact our team directly.
        </p>

        <div className='row'>
          <div className='col-md-12 mb-md-0'>
            <form
              id='contact-form'
              name='contact-form'
              // ref={form}
              // onSubmit={sendEmail}
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
