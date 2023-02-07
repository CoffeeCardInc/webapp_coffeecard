/* /components/Layout.js */
import { Container } from 'reactstrap'
import Navibar from './Navbar'
import Meta from './Meta'
import Footer from './Footer'
import { UserProvider } from './context'

const Layout = (props) => {
  return (
    <UserProvider>
      <div style={{ height: '100vh' }}>
        <Meta />
        <style jsx>
          {`
            .bg {
              background: #fffdf1;
            }
          `}
        </style>
        <Navibar />
        <div className='bg' style={{ paddingTop: '60px' }}>
          <Container>{props.children}</Container>
        </div>
        <Footer></Footer>
      </div>
    </UserProvider>
  )
}

export default Layout
