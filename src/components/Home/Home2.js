import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Mein Weg erscheint auf den ersten Blick unkonventionell - und genau das macht ihn zu meiner Stärke. Nach fast zwei Jahrzehnten selbstständiger Arbeit als Tätowierer, in der ich Kunden akquiriert, beraten und kreative, individuelle Lösungen entwickelt habe, strebe ich nun den Schritt in die Software-Entwicklung an, welche mich seit Kindheitstagen begleitet.
              <br />
              <br />Meine primären Sprachen sind
              <i>
                <b className="purple"> Python und GdScript. </b>
              </i>
              <br />
              <br />
              Meine Interessenfelder sind das Entwickeln, Testen und Verbessern &nbsp;
              <i>
                <b className="purple">Software</b> und
                das Lernen neuer {" "}
                <b className="purple">
                  Skills
                </b>
                &nbsp; auf dem Weg.
              </i>
              <br />
              <br />
              Neben diversen Tools auf Basis von <i><b className="purple">Python Frameworks</b></i>
              &nbsp; wie
              <i>
                <b className="purple"> Flask, PyQt, Pycord und Tkinter</b>
              </i>
              &nbsp; habe ich ein &nbsp;
              <i>
                <b className="purple">
                  {" "}
                  Godot Engine
                </b>
              </i>
              &nbsp; Spiel auf Steam veröffentlicht.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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
                  href="https://www.instagram.com/ibirothe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
