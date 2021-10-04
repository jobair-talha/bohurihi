import React from "react";
import { Card, Col } from "react-bootstrap";

const Course = (props) => {
  console.log(props);
  const { name, img, details, price } = props.course;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: {price}$</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
