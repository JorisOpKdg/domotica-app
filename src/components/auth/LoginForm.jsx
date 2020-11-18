import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { registerRoute, resetPasswordRoute } from "./../../routes";

const LoginForm = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const newAccount = { ...account };
    newAccount[e.currentTarget.name] = e.currentTarget.value;
    setAccount({ newAccount });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="loginFormEmail">
          <Form.Label>Email addres</Form.Label>
          <Form.Control
            value={account.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            autoFocus
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="loginFormPassword">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control
            value={account.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Wachtwoord"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Verzend
        </Button>
      </Form>
      <ul className="mt-5">
        <li>
          <Link to={resetPasswordRoute}>Wachtwoord vergeten?</Link>
        </li>
        <li>
          <Link to={registerRoute}>Registreren</Link>
        </li>
      </ul>
    </Container>
  );
};

export default LoginForm;
