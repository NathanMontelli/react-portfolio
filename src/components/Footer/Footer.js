import React from "react"
import { Container, Navbar, NavbarBrand, Row } from 'reactstrap'
import "./Footer.css"

const Footer = () => {
  return (
<Container>
  <Row>
    <div>
      <Navbar
      className="footer"
        color="dark"
        dark
        expand="md"
        fixed="bottom"
      >
        <NavbarBrand href="/">
          reactstrapss
        </NavbarBrand>
      </Navbar>
    </div>
    </Row>
</Container>
    
  )
}

export default Footer