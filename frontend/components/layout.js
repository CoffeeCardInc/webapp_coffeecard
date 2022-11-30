/* /components/Layout.js */
import { Container } from 'reactstrap'
import Navibar from './Navbar'
import Meta from './Meta'
import Footer from './Footer'
const Layout = (props) => {
  return (
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
  )
}

export default Layout
