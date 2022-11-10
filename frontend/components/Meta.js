import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
        integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
        crossOrigin='anonymous'
      />
      <script src='https://js.stripe.com/v3' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'CoffeeCard',
  keywords: 'CoffeeCard',
  description: 'Coffee',
}

export default Meta
