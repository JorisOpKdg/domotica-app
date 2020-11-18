import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="registerFormSurname">
          <Form.Label>Voornaam</Form.Label>
          <Form.Control type="text" placeholder="Voornaam" />
        </Form.Group>

        <Form.Group controlId="registerFormName">
          <Form.Label>Achternaam</Form.Label>
          <Form.Control type="text" placeholder="Naam" />
        </Form.Group>

        <Form.Group controlId="RegisterFormEmail">
          <Form.Label>Email addres</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="registerFormPassword">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control type="password" placeholder="Wachtwoord" />
        </Form.Group>

        <Form.Group controlId="registerFormPasswordConfirmation">
          <Form.Label>Bevestiging van het wachtwoord</Form.Label>
          <Form.Control type="password" placeholder="Bevestig je wachtwoord" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Verzend
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
