import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from "../Auth";

import * as ROUTE from '../../constants/routes'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

const NoLogged = () => (
  <Navbar variant="light" expand="lg">
      <Navbar.Brand ><Link to={ROUTE.HOME}>Home</Link></Navbar.Brand>
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

  const Logged = () => (
    <Navbar variant="light" expand="lg">
        <Navbar.Brand ><Link to={ROUTE.HOME}>Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <Button variant="outline-info"><Link to={ROUTE.DASHBOARD} >Dashboard</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )

const Navigation = () => {
  const { isAuthenticated } = useAppContext();
  return(
    isAuthenticated ? <Logged/> : <NoLogged/>
  )
}


export default Navigation



