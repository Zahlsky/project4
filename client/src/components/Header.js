import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import blankProfile from '../images-for-project4/blank-profile-picture.webp'

const Header = () => {
  return (
    <Navbar id='navbar-container'>
      <Container className='navbar-main'>
        <Navbar.Brand as={Link} to='/' className='brand landing-title-sm'>BAO22</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/home'>Albums</Nav.Link>
            <NavDropdown title={<Avatar src={blankProfile}/>} className='nav-dropdown'>
              <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/register'>Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/userprofile'>Profile Page</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header