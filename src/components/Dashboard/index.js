import React from 'react'
import { Card, ProgressBar, Container, Row, Col } from 'react-bootstrap';
let now = 10
const DashboardPage = () => (
  <>
  <Container>
  <Row>
    <Col md="auto">
    <Card style={{ width: '30rem' }}>
      <Card.Header>Cola</Card.Header>
      <Card.Body>
        <Card.Title>Numero en cola: 2</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    <Col md="auto">
    <Card style={{ width: '30rem' }}>
      <Card.Header>Dinero reunido</Card.Header>
      <Card.Body>
        <Card.Title>Dinero reunido: {now}/3000000</Card.Title>
        <ProgressBar now={now} label={`${now}%`} />
      </Card.Body>
    </Card>
    </Col>
  </Row>
  </Container>
</>
)

export default DashboardPage
