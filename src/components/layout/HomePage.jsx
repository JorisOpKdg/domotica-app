import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FloorContext } from "../../contexts/FloorContext";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  const { floors } = useContext(FloorContext);

  if (!floors)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Container className="py-5 my-5">
      <Row>
        {floors.map((floor) => (
          <Col key={`homepageCard${floor.id}`} md={6} lg={3}>
            <Card className="mb-3 shadow-sm">
              <Card.Img variant="top" src={floor.image} alt="Card cap" />
              <Card.Body>
                <Link
                  className="btn btn-lg btn-block btn-outline-dark mt-3"
                  to={`/rooms-list/${floor.id}`}
                >
                  {floor.name}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
