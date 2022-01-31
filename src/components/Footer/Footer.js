import React from "react"
import { Container, Navbar, NavbarBrand, Row } from 'reactstrap'
import "./Footer.css"

const Footer = () => {
  return (
  <Row className="footer">
      <Navbar
      className="footer1"
        color="dark"
        dark
        expand="lg"
        sticky="bottom"
      >
        <NavbarBrand href="/">
          Nathan Montelli
        </NavbarBrand>
      </Navbar>
    </Row>
  )
}

export default Footer
