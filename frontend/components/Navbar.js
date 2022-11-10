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
    <Navbar expand='sm' light style={{ backgroundColor: 'inherit' }}>
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
      <Collapse isOpen={isOpen} navbar>
        <Nav className='container-fluid justify-content-end' navbar>
          <NavItem>
            <NavLink href='/' style={{ color: 'white' }}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            {user ? (
              <h5 className='m-auto'>{user.username}</h5>
            ) : (
              <NavLink
                href='/register'
                className='inactive'
                style={{ color: 'white' }}
              >
                Sign up
              </NavLink>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <NavLink href='/cart' style={{ color: 'white' }}>
                Cart
              </NavLink>
            ) : (
              <NavLink href='/login' style={{ color: 'white' }}>
                Sign In
              </NavLink>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <NavLink
                href='/'
                style={{ color: 'white' }}
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
