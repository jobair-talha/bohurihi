import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Card className="details">
        <h4>Phone: 01724-721383</h4>
        <h5>Email: mdshekhtalha@gmail.com</h5>
        <p>Bhatgram, Shadullahpur, Gaibandha.</p>
      </Card>
    </Container>
  );
};

export default Contact;
