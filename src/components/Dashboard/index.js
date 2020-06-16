import React from 'react'
import { Card, ProgressBar, Container, Row, Col, CardDeck } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      amount: '',
      status: '',
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    return <Redirect to='/home' />
  }
 
  componentDidMount() {
    
    const token = localStorage.getItem('tokenId');
    if (!token) {
      this.setRedirect();
    }

    fetch(`https://userslending-backend.glitch.me/api/v1/aspirants/${token}`)
    .then((response) => {
      return response.json()
    })
    .then((aspirants) => {
      
      this.setState({ 
        amount: aspirants.fund.amount,
        status: aspirants.fund.status
       })
    }).catch(error => {
      
      this.setRedirect()
      this.renderRedirect();
      console.error(error)  
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
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
