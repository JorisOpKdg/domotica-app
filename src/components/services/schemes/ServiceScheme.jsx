import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { SchemeContext } from "./../../../contexts/SchemeContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceScheme = ({ roomId, scheme }) => {
  const history = useHistory();
  const { removeScheme } = useContext(SchemeContext);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const deleteHandler = async () => {
    removeScheme(scheme.id);
    history.push(`/room-detail/${roomId}`);
  };

  return (
    <>
      <Modal
        show={showConfirmDialog}
        onHide={() => setShowConfirmDialog(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Slim schema verwijderen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Je staat op het punt om je slim schema te verwijderen. Ben je zeker?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmDialog(false)}
          >
            Annuleer
          </Button>
          <Button variant="primary" onClick={deleteHandler}>
            Verwijderen
          </Button>
        </Modal.Footer>
      </Modal>
      <li className="list-group-item py-4">
        <Row>
          <Col xs={4}>
            <ul className="list-unstyled pl-3">
              <li key="startService">{`Start: ${scheme.start}`}</li>
              <li key="endService">{`Eind: ${scheme.end}`}</li>
            </ul>
          </Col>
          <Col xs={4}>
            <h2>{scheme.amount}</h2>
          </Col>
          <Col xs={4}>
            <Link
              className="btn btn-outline-dark mr-3 mb-2"
              to={`/edit-service-scheme/${scheme.id}`}
            >
              Aanpassen
            </Link>
            <Button
              variant="outline-danger"
              onClick={() => setShowConfirmDialog(true)}
              className=" mr-3"
            >
              Verwijderen
            </Button>
          </Col>
        </Row>
      </li>
    </>
  );
};

export default ServiceScheme;
