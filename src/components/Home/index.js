import React from 'react';
import "./home.css";
import { Row, Col, Card, CardDeck } from "react-bootstrap";
import { MDBIcon } from "mdbreact"
const HomePage = () => (
  <container fluid>
    <Row className="justify-content-md-center inicio">
      <Col md="6">
        <h1 className="tittle">Users lending te prestamos para que puedas alcanzar la moto que tanto quieres</h1>
      </Col>
      <Col md="4" className="moto"></Col>
    </Row>
    <Row className="justify-content-md-center size">
      <Col md="6" className="center">
        <h1 className="h1">Acceder a prestamos</h1>
        <p className="p">
          el usuario tendra la posibilidad de acceder a un prestamo simplemente ingresando el
          email y contraseña de rappi que tiene
        </p>
      </Col>
      <Col md="4" className="icons"><MDBIcon icon="universal-access" /></Col>
    </Row>
    <Row className="justify-content-md-center size">
      <Col md="6" className="center">
        <h1 className="h1">Revisar estado de los prestamos</h1>
        <p className="p">
          el usuario tendra un menu en el cual podra ver el estado en el que se encuentra su prestamo
        </p>
      </Col>
      <Col md="4" className="icons"><MDBIcon icon="check-circle" /></Col>

    </Row>
    <Row className="justify-content-md-center footer">
      <Col md="10">
        <CardDeck>
          <Card>
            <Card.Body>
              <div className="fotoD"></div>
              <Card.Title className="center">Danny Martinez</Card.Title>
              <Card.Text className="center">
                Tome este proyecto debido a que me parecio un gran reto
                personal para crecer como desarrollador a demas de fortalecer mis habilidades como front-end developer
              </Card.Text>
            </Card.Body>
            <Card.Footer className="center">
              <a href="https://github.com/danny099" className="links"><MDBIcon fab icon="github" /></a>
              <a href="https://twitter.com/dalmariv01" className="links"><MDBIcon fab icon="twitter" /></a>
              <a href="https://www.linkedin.com/in/danny-alejandro-martinez-rivera-72b470192/" className="links"><MDBIcon fab icon="linkedin-in" /></a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <div className="fotoP"></div>
              <Card.Title className="center">Jhonatan Arenas</Card.Title>
              <Card.Text className="center">
                Me emocionó la idea de afrontar un reto tan grande y más el hecho de que es un problema real que posiblemente ayudé a muchas personas a conseguir trabajo
              </Card.Text>
            </Card.Body>
            <Card.Footer className="center">
              <a href="https://github.com/cybernuki" className="links"><MDBIcon fab icon="github" /></a>
              <a href="https://twitter.com/ookanuki" className="links"><MDBIcon fab icon="twitter" /></a>
              <a href="https://www.linkedin.com/mwlite/in/jhonatan-arenas-24473718b" className="links"><MDBIcon fab icon="linkedin-in" /></a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <div className="fotoH"></div>
              <Card.Title className="center">Felipe Cubillos</Card.Title>
              <Card.Text className="center">
                Me gusto el proyecto porque el problema que se presentó me ayudará a crecer como desarrollador
              </Card.Text>
            </Card.Body>
            <Card.Footer className="center">
              <a href="https://github.com/FeliPrado31" className="links"><MDBIcon fab icon="github" /></a>
              <a href="https://twitter.com/Feliprado2" className="links"><MDBIcon fab icon="twitter" /></a>
              <a href="https://www.linkedin.com/in/juan-felipe-cubillos-prado-312870180/" className="links"><MDBIcon fab icon="linkedin-in" /></a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <div className="fotoJP"></div>
              <Card.Title className="center">Juan Portilla</Card.Title>
              <Card.Text className="center">
                Vi en este proyecto la oportunidad de destacarme con una de las grandes empresas nacionales como lo es Rappi y de crecer en cuanto a mis conocimientos en DevOps y desarrollo de Apps para sustentar mis estudios realizados en Holberton School Cali
              </Card.Text>
            </Card.Body>
            <Card.Footer className="center">
              <a href="https://github.com/Jdpa357" className="links"><MDBIcon fab icon="github" /></a>
              <a href="https://twitter.com/JDavid357" className="links"><MDBIcon fab icon="twitter" /></a>
              <a href="https://www.linkedin.com/in/juan-david-portilla-alzate-536215177/" className="links"><MDBIcon fab icon="linkedin-in" /></a>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  </container>

);

export default HomePage;
