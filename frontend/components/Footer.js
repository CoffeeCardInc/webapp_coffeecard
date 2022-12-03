import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import footerStyles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={footerStyles.footerbasic}>
      <footer>
        <Link href='/'>
          <p className={footerStyles.footermenu}>Download the App</p>
        </Link>
        <div className={footerStyles.social}>
          <a href='https://www.linkedin.com/company/coffee-card/about/'>
            <FaLinkedin />
          </a>
          <a href='https://www.facebook.com/CoffeeCardCo/'>
            <FaFacebookSquare />
          </a>
          <a href='https://www.instagram.com/coffee.card/?hl=en'>
            <FaInstagram />
          </a>
          <a href='https://twitter.com/coffee_card'>
            <FaTwitterSquare />
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
