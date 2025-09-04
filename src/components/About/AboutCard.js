import React from "react";
import Card from "react-bootstrap/Card";
import { ImPlus } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Name: <span className="purple">Pascal Rothe </span>
            <br />
            Wohnort: <span className="purple"> Leipzig, Germany.</span>
            <br />
            Alter: <span className="purple"> 35</span>
            <br />
            Kernkompetenzen:
          </p>
          <ul>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> Struktur und <span className="purple">Organisation</span>
            </li>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> <span className="purple">Kommunikation</span> und Teamfähigkeit
            </li>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> Analysestärke und <span className="purple">Problemlösung</span>
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Programmiersprachen:
          </p>
          <ul>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> <span className="purple">Python</span> - Intermediate
            </li>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> <span className="purple">GdScript</span> - Advanced
            </li>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> <span className="purple">JavaScript</span> - Learner
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Erfahrungen:
          </p>
          <ul>
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
              <ImPlus /> <span className="purple">Version</span> Control & <span className="purple">Ticket</span> Systeme
            </li>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> <span className="purple">Presse-</span> und Influencer-Kontakt
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Sprachkenntnisse:
          </p>
          <ul>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> Deutsch <span className="purple">Muttersprachler</span>
            </li>
            <li className="about-activity" style={{ fontSize: "0.8em" }}>
              <ImPlus /> <span className="purple">English</span> Flüssig in Wort und Schrift
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
