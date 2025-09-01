import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Name: <span className="purple">Pascal Rothe </span>
            <br />
            Wohnort: <span className="purple"> Leipzig, Germany.</span>
            <br />
            Alter: <span className="purple"> 35</span>
            <br />
            <br />
            Kernkompetenzen:
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight /> Struktur und <span className="purple">Organisation</span>
            </li>
            <li className="about-activity">
              <ImArrowRight /> <span className="purple">Kommunikation</span> und Teamfähigkeit
            </li>
            <li className="about-activity">
              <ImArrowRight /> Analysestärke und <span className="purple">Problemlösung</span>
            </li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            Sprachen:
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight /> Deutsch <span className="purple">Muttersprachler</span>
            </li>
            <li className="about-activity">
              <ImArrowRight /> <span className="purple">English</span> Flüssig in Wort und Schrift
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Slogan quote or something!"{" "}
          </p>
          <footer className="blockquote-footer">Slogan Footer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
