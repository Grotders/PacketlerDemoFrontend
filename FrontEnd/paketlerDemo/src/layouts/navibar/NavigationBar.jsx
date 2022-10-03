import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function NavigationBar() {
const [isAuthenticated, setIsAuthenticatated] = useState(() => {
    return !!JSON.parse(localStorage.getItem("isAuth"));
  });


  function handleSignOut(params) {
    setIsAuthenticatated(false);
    window.localStorage.setItem('isAuth', "false");
  }
  function handleSignIn(params) {
    setIsAuthenticatated(true);
    window.localStorage.setItem('isAuth', "true");
  }

  return (
    <Navbar bg="light" variant="light" className='navigation-bar'>
        <Container>
          <Navbar.Brand as={NavLink} to="/">OguzCELL</Navbar.Brand>
          <Nav.Link as={NavLink} to='/admin'>Admin</Nav.Link>
          <Nav className="ms-auto">
          {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
          </Nav>
        </Container>
      </Navbar>
  )
}
