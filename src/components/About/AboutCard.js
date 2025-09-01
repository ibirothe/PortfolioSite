import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pascal Rothe </span>
            from <span className="purple"> Leipzig, Germany.</span>
            <br />
            Here comes some text about me.
            <br />
            More text and stuff. Cool things to say.
            <br />
            <br />
            Here comes a list of things:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Thing 1
            </li>
            <li className="about-activity">
              <ImPointRight /> Thing 2
            </li>
            <li className="about-activity">
              <ImPointRight /> Thing 3
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
