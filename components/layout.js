/* /components/Layout.js */
import { Container } from 'reactstrap'
import Navibar from './Navbar'
import Meta from './Meta'
import Footer from './Footer'
import { UserProvider } from './context'

const Layout = (props) => {
  return (
    <UserProvider>
      <style jsx>
        {`
          .bg {
            background: #ffffff;
          }
        `}
      </style>
      <div /*style={{ height: '100vh' }}*/ className='d-sm-block d-md-none bg'>
        <Meta />
        <Navibar />
        <div style={{ paddingTop: '60px' }}>
          <Container>{props.children}</Container>
        </div>
        <Footer></Footer>
      </div>
      <div className='d-none d-md-block'>
        <video loop autoPlay muted src='/videoBg.mp4' className='video'></video>
        <div className='content'>
          <h1>Welcome to CoffeeCard</h1>
          <p>At the moment we are only available on mobile device. </p>
          <p>Please check us out...</p>
        </div>
      </div>
    </UserProvider>
  )
}

export default Layout
