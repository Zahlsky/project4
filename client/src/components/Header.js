import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavDropdown } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { Avatar } from '@mui/material'
import blankProfile from '../images-for-project4/blank-profile-picture.webp'


const Header = () => {

  const { id } = useParams()

  return (
    <Navbar id='navbar-container'>
      <Container className='navbar-main'>
        <Navbar.Brand as={Link} to='/' className='logo-title'>Album Of The Year</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Albums</Nav.Link>
            <NavDropdown title={<Avatar src={blankProfile}/>} className='nav-dropdown'>
              <NavDropdown.Item as={Link} to='/login'><p className='login-nav'>Login</p></NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/register'><p className='login-nav'>Register</p></NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/userprofile'><p className='login-nav'>Profile</p></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header