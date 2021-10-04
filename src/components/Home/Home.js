import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Course/Course";

const Home = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        {courses.map((course) => (
          <Course course={course}></Course>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
