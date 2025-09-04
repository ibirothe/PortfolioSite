import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiPhotoshop,
  DiJavascript1
} from "react-icons/di";
import {
  SiSteamworks,
  SiItchdotio,
  SiDiscord,
  SiVisualstudiocode,
  SiGodotengine,
  SiJira,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGodotengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSteamworks />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiItchdotio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
    </Row>
  );
}

export default Techstack;
