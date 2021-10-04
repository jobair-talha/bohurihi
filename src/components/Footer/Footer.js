import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const products = ["MUI core", " MUI X", "Templates", "Design Kits"];
  const resources = [
    "MUI",
    "React Bootstrap",
    "Metarial Icon",
    "Components",
    "Theming",
  ];
  const company = ["About", "Vision", "Careers", "Support", "Contact us"];
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4}>
            <h3>Learn about Bohubrihi</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              veniam.
            </p>
            <Form>
              <Form.Control
                type="text"
                className="text-feild"
                placeholder="Search"
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={3}>
            <h2>Products</h2>
            <ul>
              {products.map((pd) => (
                <li>{pd}</li>
              ))}
            </ul>
          </Col>
          <Col lg={3}>
            <h2>Resources</h2>
            <ul>
              {resources.map((rsc) => (
                <li>{rsc}</li>
              ))}
            </ul>
          </Col>
          <Col lg={2}>
            <h2>Resources</h2>
            <ul>
              {company.map((com) => (
                <li>{com}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
