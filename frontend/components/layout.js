/* /components/Layout.js */
import { Container } from 'reactstrap'
import Navibar from './Navbar'
import Meta from './Meta'
const Layout = (props) => {
  return (
    <>
      <Meta />
      <Navibar />
      <div>
        <Container>{props.children}</Container>
      </div>
    </>
  )
}

export default Layout
