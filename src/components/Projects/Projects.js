import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kings_guard from "../../Assets/Projects/kings_guard.png";
import tales from "../../Assets/Projects/tales.png";
import rover from "../../Assets/Projects/rover.png";
import gol from "../../Assets/Projects/game_of_life.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Einige meiner <strong className="purple">Projekte </strong>
        </h1>
        <p style={{ color: "white" }}>
          Hier sind exemplarisch einige meiner Projekte mit Code Snippets aufgeführt.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kings_guard}
              isBlog={false}
              title="King´s Guard"
              description="Rundenbasiertes Strategie-Spiel entwickelt mit Godot Engine und auf Steam mit mehr als 1.000 Wishlists veröfentlicht. Inklusive SteamworksAPI Errungenschaften, Bestenlisten und Cloud Speicherung. Kuratiert von Games Germany, Tiny Teams, ANZ Indieshowcase, Debut Festival und Steam Board Games Festival."
              ghLink="https://gist.github.com/ibirothe/82b46f567069768b615b2a81f7af56a9"
              demoLink="https://store.steampowered.com/app/3720900/Kings_Guard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tales}
              isBlog={false}
              title="Tales Discord Bot"
              description="Mehrspieler-Bot-Anwendung, die via Pycord API Wrapper Discord-Nutzer mit einer Spielwelt auf Basis von Esper ECS und Ink Scripting Language. Meine Projekt-Kontribution umfasst die konzeptuelle Arbeit an einem umfassenden Design Document, Erstellen von Components und Entities, sowie deren Processors und ein modulares, grammatisches Playerlog, das GameState in englische Sprache transkribiert."
              ghLink="https://gist.github.com/ibirothe/c42e7d66a7a1b878ef696510340fceb3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rover}
              isBlog={false}
              title="Rover & Out"
              description="Thematische Game Jam Entry mit limitierter Entwicklungszeit. Prototyp für ein web-based Puzzle-Spiel mit Platz 3 im Overall-Ranking."
              ghLink="https://gist.github.com/ibirothe/f233bb681e32e88e58a796ecb83882aa"
              demoLink="https://ibirothe.itch.io/roverandout"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gol}
              isBlog={false}
              title="Conway´s GOL"
              description="Test"
              ghLink="https://gist.github.com/ibirothe/512a7f472f39d87cae6ec6bc021af421"
              demoLink="https://ibirothe.itch.io/roverandout"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
