import React from 'react'
import { Card, ProgressBar, Container, Row, Col, CardDeck } from 'react-bootstrap';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      amount: '',
      status: '',
    };
  }
 
  componentDidMount() {
    fetch('https://userslending-backend.glitch.me/api/v1/aspirants/aspirant1')
    .then((response) => {
      return response.json()
    })
    .then((aspirants) => {
      this.setState({ 
        amount: aspirants.fund.amount,
        status: aspirants.fund.status
       })
    })
  }

  render() {
    return (
      <>
      <Container>
      <Row className="justify-content-md-center">
          <Col md="10">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title >Estado</Card.Title>
                  <Card.Text >
                    {this.state.status}
                  </Card.Text>
                </Card.Body>
                <Card.Footer >              
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title >Dinero reunido</Card.Title>
                  <Card.Text >
                    Dinero reunido: {this.state.amount}/3500000
                    <ProgressBar now={(this.state.amount*100)/3500000} />
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </>
    );
  }
}

export default DashboardPage;
