import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import footerStyles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={footerStyles.footerbasic}>
      <footer>
        <Link href='/'>
          <p className={footerStyles.footermenu}>Become a Partner</p>
        </Link>
        <div className={footerStyles.social}>
          <a href='#'>
            <FaLinkedin />
          </a>
          <a href='#'>
            <FaFacebookSquare />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
        <div className={footerStyles.copyright}>
          <Link href='#'>
            <p>Terms of Services</p>
          </Link>
          <p>CoffeeCard © 2022</p>
        </div>
        {/* <p className={footerStyles.copyright}>CoffeeCard © 2022</p> */}
      </footer>
    </div>
  )
}

export default Footer
