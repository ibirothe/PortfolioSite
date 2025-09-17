import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import { ImPlus } from "react-icons/im";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            xs={12} sm={6} md={4}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Fact <strong className="purple">Sheet</strong>
            </h1>
            <Container className="tech-icons" style={{ marginBottom: "15px" }}>
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "left", fontSize: "0.8em" }}>
                  Name: <span className="purple">Pascal Rothe </span>
                  <br />
                  Wohnort: <span className="purple"> Leipzig, Germany.</span>
                  <br />
                  Alter: <span className="purple"> 35</span>
                  <br />
                </p>
              </blockquote>
            </Container>
            <Container className="tech-icons">
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "left" }}>
                  Kernkompetenzen:
                    <li className="about-activity" style={{ fontSize: "0.8em" }}>
                      <ImPlus /> Struktur und <span className="purple">Organisation</span>
                    </li>
                    <li className="about-activity" style={{ fontSize: "0.8em" }}>
                      <ImPlus /> <span className="purple">Kommunikation</span> und Teamfähigkeit
                    </li>
                    <li className="about-activity" style={{ fontSize: "0.8em" }}>
                      <ImPlus /> Analysestärke und <span className="purple">Problemlösung</span>
                    </li>
                </p>
              </blockquote>
            </Container>
            <Container className="tech-icons">
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Programmiersprachen:
                    <li className="about-activity" style={{ fontSize: "0.8em" }}>
                      <ImPlus /> <span className="purple">Python</span> - Intermediate
                    </li>
                    <li className="about-activity" style={{ fontSize: "0.8em" }}>
                      <ImPlus /> <span className="purple">GdScript</span> - Advanced
                    </li>
                    <li className="about-activity" style={{ fontSize: "0.8em" }}>
                      <ImPlus /> <span className="purple">JavaScript</span> - Learner
                    </li>
                </p>
              </blockquote>
            </Container>
            <Container className="tech-icons">
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Erfahrungen:
                  <li className="about-activity" style={{ fontSize: "0.8em" }}>
                    <ImPlus /> <span className="purple">17 Jahre</span> Selbstständigkeit
                  </li>
                  <li className="about-activity" style={{ fontSize: "0.8em" }}>
                    <ImPlus /> <span className="purple">Kundenakquise-</span> und -beratung
                  </li>
                  <li className="about-activity" style={{ fontSize: "0.8em" }}>
                    <ImPlus /> <span className="purple">Game Releases</span> auf Steam und ItchIo
                  </li>
                  <li className="about-activity" style={{ fontSize: "0.8em" }}>
                    <ImPlus /> <span className="purple">Open Source</span> Contributions
                  </li>
                </p>
              </blockquote>
            </Container>
            <Container className="tech-icons">
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Sprachkenntnisse:
                  <li className="about-activity" style={{ fontSize: "0.8em" }}>
                    <ImPlus /> Deutsch <span className="purple">Muttersprachler</span>
                  </li>
                  <li className="about-activity" style={{ fontSize: "0.8em" }}>
                    <ImPlus /> <span className="purple">English</span> Flüssig in Wort und Schrift
                  </li>
                </p>
              </blockquote>
            </Container>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          <p style={{ color: "rgb(155 126 172)", whiteSpace: "pre-line" }}>
            Software development is technical
            {"\n"}activity conducted by human beings.
            </p>
            
          <footer className="blockquote-footer">Niklaus Wirth</footer>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
