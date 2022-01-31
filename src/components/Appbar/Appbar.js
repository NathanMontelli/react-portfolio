import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu, Container} from 'reactstrap'
import './Appbar.css'

const Appbar = () => {
  return (
    <Container>
      <Navbar
        color="dark"
        dark
        expand="sm"
        fixed="top"
      >
        <NavbarBrand className='navbarName' href="/">
          Nathan Montelli
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar >
          <Nav
            className="m-auto"
            navbar
          >
            <NavItem>
              <NavLink href="">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                Contact
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink color='dark' dark href="https://github.com/NathanMontelli">
                    GitHub
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://www.linkedin.com/in/nathanmontelli/">
                    Linkedin
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  )
}

export default Appbar