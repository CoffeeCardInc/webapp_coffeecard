/* /components/Layout.js */
import { Container } from 'reactstrap'
import Navibar from './Navbar'
import Meta from './Meta'
import Footer from './Footer'
const Layout = (props) => {
  return (
    <>
      <Meta />
      <style jsx>
        {`
          .bg {
            background: #fffdf1;
          }
        `}
      </style>
      <Navibar />
      <div className='bg'>
        <Container>{props.children}</Container>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout
