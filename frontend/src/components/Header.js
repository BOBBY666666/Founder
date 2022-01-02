import React, { useContext } from "react";
import { UserContext } from "../App";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './css/Header.css'

function Header () {
  const { userData, setUserData } = useContext(UserContext);

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg="light">
        <Container fluid>
          <Navbar.Brand> <img src="/img/logoH.png"/> </Navbar.Brand>
          <div className="left">
            <Navbar.Text><p className="founder">FOUNDER</p> </Navbar.Text>
            <p className="cstu" >CSTU Document management system</p>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {userData.user ? (
              <Nav className="ml-auto">
                <LinkContainer to="#">
                  <Nav.Link>{userData.user.name}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link onClick={logOut}><i class="bi bi-box-arrow-right"></i></Nav.Link>
                </LinkContainer>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
          </Container>
      </Navbar>
      <br /><br /><br /><br /><br />
    </>
  );
};

export default Header;
