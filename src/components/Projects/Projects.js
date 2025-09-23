import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kings_guard from "../../Assets/Projects/kings_guard.png";
import park from "../../Assets/Projects/park.png";
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
              description="Rundenbasiertes Strategie-Spiel, entwickelt mit der Godot Engine und auf Steam mit über 1.000 Wishlists veröffentlicht. Integriert Steamworks-API-Funktionen wie Errungenschaften, Bestenlisten und Cloud-Speicherung. Kuratiert von Games Germany, Tiny Teams, ANZ Indie Showcase, Debut Festival und Steam Board Games Festival."
              demoLink="https://store.steampowered.com/app/3720900/Kings_Guard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gol}
              isBlog={false}
              title="Conway´s GOL"
              description="Eine beispielhafte Python-Implementierung von Conways Game of Life mit einer Tkinter-GUI. Dieses Repository dient in erster Linie als Demonstration von Git-, GitHub-Workflows und sauberer Projektstruktur und nicht als vollwertige Desktop-Anwendung."
              ghLink="https://github.com/ibirothe/Conway-s-Game-of-life---Tkinter"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={park}
              isBlog={false}
              title="Parking Ticket CLI"
              description="Python-CLI-App zur Parkplatz-Verwaltung mittels einer SQLite-Datenbank. Fokus des Repos liegt auf der Laufzeitoptimierung von Operationen durch Wahl performanter Datenstrukturen."
              ghLink="https://github.com/ibirothe/Parking-Ticket-System"        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
