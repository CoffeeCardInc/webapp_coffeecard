/* NAVBAR */

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
// import AppContext from './context'
import newLogo from '../public/Logo2.png'
import Image from 'next/image'
import Link from 'next/link'
// import { useUser, useUpdateUser } from '../components/context'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navibar() {
  const { data: session, status } = useSession()
  // const { user } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  // const loggedIn = useUser()
  // const toggleLogIn = useUpdateUser()

  const handleSignOut = async () => {
    signOut({ redirect: false, callbackUrl: '/' })
  }
  switch (status) {
    case 'authenticated':
      return (
        <Navbar expand='sm' light className={navStyle.zindex}>
          <style jsx>
            {`
              .navbar {
                justify-content: space-around;
              }
            `}
          </style>
          <Link href='/'>
            <Image
              src={newLogo}
              style={{ width: '25px', height: '30px' }}
              alt='CoffeeCardLogo'
            />
          </Link>
          <NavbarToggler onClick={toggle} className={navStyle.border} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='container-fluid justify-content-end' navbar>
              <NavItem>
                <Link href='/' className='nav-link' onClick={toggle}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/profile' className='nav-link' onClick={toggle}>
                  Account
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/about' className='nav-link' onClick={toggle}>
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/shops' className='nav-link' onClick={toggle}>
                  Shops
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/contactus' className='nav-link' onClick={toggle}>
                  Contact
                </Link>
              </NavItem>

              <NavItem>
                <NavLink
                  onClick={() => {
                    handleSignOut()
                    toggle()
                    // toggleLogIn
                    // setUser(null)
                  }}
                >
                  Log out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )

    default:
      return (
        <Navbar expand='sm' light className={navStyle.zindex}>
          <NavbarBrand href='/'>
            {' '}
            <Image
              src={newLogo}
              style={{ width: '25px', height: '30px' }}
              alt='CoffeeCardLogo'
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='container-fluid justify-content-end' navbar>
              <NavItem>
                <Link href='/' className='nav-link' onClick={toggle}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href='/register'
                  className='inactive nav-link'
                  onClick={toggle}
                >
                  Sign up
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/login' className='nav-link' onClick={toggle}>
                  Sign In
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/about' className='nav-link' onClick={toggle}>
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/contactus' className='nav-link' onClick={toggle}>
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )
  }
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: {
        ...(await unstable_getServerSession(ctx.req, ctx.res, authOptions)),
      },
    },
  }
}
