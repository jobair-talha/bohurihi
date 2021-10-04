import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-part">
      <div className="overlay">
        <Container>
          <h1>Learn with Self Confidence</h1>
          <h3>Be a Good Developer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            in reprehenderit ut omnis similique eum ipsa perferendis qui
            incidunt iusto eligendi, ipsum quas consequuntur fugit labore
            assumenda porro quo quasi!
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
