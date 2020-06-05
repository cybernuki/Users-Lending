import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTE from '../../constants/routes'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

const Navigation = () => (
  <Navbar variant="light" expand="lg">
    <Navbar.Brand ><Link to={ROUTE.HOME}>Home</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Form inline>
        <Button variant="outline-info"><Link to={ROUTE.SIGN_IN} >Ingresar</Link></Button>
        <Button variant="info"><Link to={ROUTE.SIGN_UP} className="link">Registrar</Link></Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation



