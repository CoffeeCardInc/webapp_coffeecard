import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={footerStyles.footerbasic}>
      <footer>
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
        <p className={footerStyles.copyright}>CoffeeCard © 2022</p>
      </footer>
    </div>
  )
}

export default Footer
