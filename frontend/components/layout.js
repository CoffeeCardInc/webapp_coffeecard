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
