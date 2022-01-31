import React from "react"
import { Container, Navbar, NavbarBrand, Row } from 'reactstrap'
import "./Footer.css"

const Footer = () => {
  return (
      <Navbar
      className="footer1"
        color="dark"
        dark
        expand="xs"
        sticky="bottom"
      >
        <NavbarBrand href="/">
          Nathan Montelli
        </NavbarBrand>
      </Navbar>
  )
}

export default Footer
