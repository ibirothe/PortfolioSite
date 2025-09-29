import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kings_guard from "../../Assets/Projects/kings_guard.png";
import park from "../../Assets/Projects/park.png";
import jay from "../../Assets/Projects/jay2door.png";
import lorem from "../../Assets/Projects/react_web.png";

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
              imgPath={lorem}
              isBlog={false}
              title="React Webpage Template"
              description="React single-page app demonstrating dynamic routing, component-based state management and prop-driven image reveal animations. Integrates @cloudinary/react for optimized image delivery, react-waypoint for scroll-triggered effects React single-page app mit dynamic routing, component-based state management und prop-driven image reveal animations."
              ghLink="https://github.com/ibirothe/react_website_template"
              demoLink="https://webloremipsum.vercel.app"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jay}
              isBlog={false}
              title="Jay2Door"
              description="Multi-User Todo App mit FastAPI Backend, React/Chakra-ui Frontend und MongoDB. Nutzerauthentifizierung mit JWT und passlib Passwort-Hashing."
              ghLink="https://github.com/ibirothe/JayTwoDoor"        
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
