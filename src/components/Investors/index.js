import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./investors.css";

const InvestorsPage = () => {
  return (
    <div className="Login">
      <form>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
          />
        </FormGroup>
        <FormGroup controlId="ivest" bsSize="large">
          <FormLabel>Cantidad a invertir</FormLabel>
          <FormControl
            type="text"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Invertir
        </Button>
      </form>
    </div>
  );
};

export default InvestorsPage;
