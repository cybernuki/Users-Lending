import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const SignUpPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Ingresar</p>
            <div className="grey-text">
              <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                <MDBInput label="Contraseña" icon="lock" group type="text" validate error="wrong" success="right" />
            </div>
            <div className="text-center">
              <MDBBtn color="info">
                Ingresar
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUpPage;
