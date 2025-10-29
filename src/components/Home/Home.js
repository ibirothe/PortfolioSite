import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container>
        <Particle />
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
