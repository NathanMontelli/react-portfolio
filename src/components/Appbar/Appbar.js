import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu, Container } from 'reactstrap'
import './Appbar.css'

const Appbar = () => {
  return (
    <Container>
      <Navbar
        color='dark'
        dark
        expand='sm'
        fixed='top'
      >
        <NavbarBrand className='navbarName' href='/react-portfolio/'>
          Nathan Montelli
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck () { }} />
        <Collapse navbar>
          <Nav
            className='m-auto'
            navbar
          >
            <NavItem>
              <NavLink href='#aboutMe'>
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#portfolio'>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contactMe'>
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
              <DropdownMenu
                className='btn2'
                right
              >
                <DropdownItem>
                  <NavLink className='btn3' href='https://github.com/NathanMontelli'>
                    GitHub
                    {/* <img className='full' src="https://img.icons8.com/nolan/96/github.png" alt="gitHub" /> */}
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className='btn3' href='https://www.linkedin.com/in/nathanmontelli/'>
                    Linkedin
                    {/* <img className='full' src="https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png" alt='linkedin' /> */}
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href='https://docs.google.com/document/d/1OSeYMj4DoRSfnZ13uI1yB5Lh451gDkXf1JSDPdAEziM/edit?usp=sharing'>
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  )
}

export default Appbar
