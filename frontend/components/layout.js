/* /components/Layout.js */
import { Container } from 'reactstrap'
import Navibar from './Navbar'
import Meta from './Meta'
const Layout = (props) => {
  return (
    <>
      <Meta />
      <style jsx>
        {`
          .bg {
            background: #fffdf1;
          }
          body {
            height: 100vh;
          }
        `}
      </style>
      <Navibar />
      <div className='bg'>
        <Container>{props.children}</Container>
      </div>
    </>
  )
}

export default Layout
