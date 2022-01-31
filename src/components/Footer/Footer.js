import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import './Footer.css'

const Footer = () => {
  return (
    <Navbar
      className='footer1'
      color='dark'
      dark
      expand='xs'
      sticky='bottom'
    >
      <NavbarBrand href='/'>
        Nathan Montelli
      </NavbarBrand>
    </Navbar>
  )
}

export default Footer
