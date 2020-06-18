import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from "../Auth";

import * as ROUTE from '../../constants/routes'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { MDBIcon } from "mdbreact"

const NoLogged = () => (
  <Navbar variant="light" expand="lg">
    <Navbar.Brand ><Link to={ROUTE.HOME}><MDBIcon icon="home" /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Form inline>
        <Button variant="outline-info"><Link to={ROUTE.SIGN_IN}>Ingresar</Link></Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

const Navigation = () => {
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  const Logout = () => {
    userHasAuthenticated(false)
    localStorage.removeItem('tokenId')
  }
  return (
    isAuthenticated ?
      <Navbar variant="light" expand="lg">
        <Navbar.Brand ><Link to={ROUTE.HOME}><MDBIcon icon="home" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <Button onClick={Logout} variant="outline-info"><Link to={ROUTE.HOME} >Logout</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      : <NoLogged />
  )
}


export default Navigation



