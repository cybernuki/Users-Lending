import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const SignUpPage = () => (
  <div>
    <p className="h5 text-center mb-4">Ingresar</p>
    <SignUpForm />
  </div>
);


const INITIAL_STATE = {
  email: '',
  password: ''
};
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    console.log(email, password)
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      email,
      password,
    } = this.state;


    const isInvalid =
      email === '' ||
      password === '';

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.onSubmit}>
              <div className="grey-text">

              </div>
              <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong" success="right"
                name="email"
                value={email}
                onChange={this.onChange}
                placeholder="Email Address"
              />
              <MDBInput label="Contraseña" icon="lock" group type="password" validate error="wrong" success="right"
                name="password"
                value={password}
                onChange={this.onChange}

                placeholder="Password"
              />
              <button color="info" disabled={isInvalid} type="submit">
                Sign Up
        </button>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const SignUpForm = withRouter(SignUpFormBase);

export default SignUpPage;

export { SignUpForm };