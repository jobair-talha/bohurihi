import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={AboutImg} alt={AboutImg} />
        </Col>
        <Col>
          <h2>About ME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatum eaque quo hic laborum quidem iure commodi ea accusamus
            delectus enim porro ab molestias perspiciatis sequi et, explicabo
            illo laboriosam dolorum architecto vel odit repudiandae aliquam
            nulla. Saepe animi debitis doloribus laborum, laudantium veritatis
            iste cumque alias, earum, id incidunt reprehenderit vero aut in
            nesciunt voluptatum quam aliquid unde tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatum eaque quo hic laborum quidem iure commodi ea accusamus
            delectus enim porro ab molestias perspiciatis sequi et, explicabo
            illo laboriosam dolorum architecto vel odit repudiandae aliquam
            nulla. Saepe animi debitis doloribus laborum, laudantium veritatis
            iste cumque alias, earum, id incidunt reprehenderit vero aut in
            nesciunt voluptatum quam aliquid unde tenetur.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
