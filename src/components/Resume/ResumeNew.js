import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Certificate images
import cert1 from "../../Assets/Certificates/cert_1.jpg";
import cert2 from "../../Assets/Certificates/cert_2.jpg";
import cert3 from "../../Assets/Certificates/cert_3.jpg";

// PDF.js Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Raw GitHub-Link zum PDF
const resumeLink =
  "https://raw.githubusercontent.com/ibirothe/PortfolioSite/master/src/Assets/CV_Pascal_Rothe.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShow = (cert) => {
    setActiveCert(cert);
    setShowModal(true);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* CV Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* CV Preview */}
        <Row className="resume justify-content-center">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Certificates Section */}
        <Row className="mt-5 justify-content-center">
          <h1 className="purple">Certificates</h1>

          {[cert1, cert2, cert3].map((cert, idx) => (
            <Col key={idx} md={3} className="tech-icons">
              <img
                src={cert}
                alt={`Certificate ${idx + 1}`}
                className="img-fluid rounded shadow"
                style={{ cursor: "pointer" }}
                onClick={() => handleShow(cert)}
              />
            </Col>
          ))}
        </Row>

        {/* Modal for certificate preview */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Body className="text-center">
            {activeCert && (
              <img src={activeCert} alt="Certificate Full" className="img-fluid" />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default ResumeNew;
