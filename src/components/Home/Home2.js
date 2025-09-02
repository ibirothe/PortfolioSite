import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Mein Name ist Pascal Rothe und IT ist seit über 20 Jahren meine Leidenschaft. Software zu entwickeln bedeutet für mich Probleme in ihre Bestandteile zu zerbrechen, um sie in der richtigen Komposition als Lösung wieder zusammenzufügen. Mein beruflicher Alltag zeichnet sich durch digitale Kommunikation, selbstorganisiertes Arbeiten und die präzise Vermittlung komplexer Inhalte aus.
              <br />
              <br />
              <b className="purple">Erfüllung</b> liegt für mich in persönlichem <b className="purple">Erfahrungsgewinn</b>, dem Erlernen neuer Fähigkeiten und das <b className="purple">Entwickeln</b> eleganter, durchdachter Lösungen.
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Kontakt</h1>
            <p>
              Feel free to <span className="purple">connect </span>.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ibirothe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pascal-rothe-b9a9b3381/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ibirothe@gmail.com?subject=Hello"
                  style={{ color: "white" }}
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
