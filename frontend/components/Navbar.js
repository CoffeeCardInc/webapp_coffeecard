import React, { useContext } from 'react'
import { useState } from 'react'
import navStyle from '../styles/Navibar.module.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import AppContext from './context'

const Navibar = () => {
  // const { user } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const user = true

  return (
    <Navbar expand='sm' light style={{ backgroundColor: '#fffdf1' }}>
      <style jsx>
        {`
          h5 {
            color: white;
            padding-top: 11px;
          }
        `}
      </style>
      <NavbarBrand href='/'>
        {' '}
        <img
          src='https://coffeecard.nyc/images/logo.png'
          style={{ width: '30px' }}
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar fixed>
        <Nav className='container-fluid justify-content-end' navbar>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            {user ? (
              // <h5 className='m-auto'>{user.username}</h5>
              ''
            ) : (
              <NavLink href='/register' className='inactive'>
                Sign up
              </NavLink>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <NavLink href='/cart'>Cart</NavLink>
            ) : (
              <NavLink href='/login'>Sign In</NavLink>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <NavLink
                href='/'
                onClick={() => {
                  logout()
                  setUser(null)
                }}
              >
                Logout
              </NavLink>
            ) : null}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navibar
