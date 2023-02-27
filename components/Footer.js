/* FOOTER
- download iOS is link doesnt work yet 
- terms of service link doesnt work yet 
*/

import { FaLinkedin } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import footerStyles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={footerStyles.footerbasic}>
      <footer>
        <Link href='/' download>
          <p className={footerStyles.footermenu}>Download our iOS app</p>
        </Link>
        <div className={footerStyles.social}>
          <a href='https://www.linkedin.com/company/coffee-card/about/'>
            <FaLinkedin />
          </a>
          <a href='https://www.instagram.com/coffee.card/?hl=en'>
            <FaInstagram />
          </a>
          <a href='https://twitter.com/coffee_card'>
            <FaTwitterSquare />
          </a>
          <a href='#'>
            <FaTiktok />
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
