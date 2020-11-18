import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="loginFormEmail">
          <Form.Label>Email addres</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Verzend
        </Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
