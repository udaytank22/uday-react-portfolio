import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  // State to manage modal visibility and project details
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open modal and set project details
  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Function to close modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.title} />
                <div className="content">
                  <p className="fs-5">{data.title}</p>
                  <p>{data.description}</p>
                  <a
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      handleShow(data); // Open modal with project details
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Modal for project details */}
      {selectedProject && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              {selectedProject.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>
            {selectedProject.projectDetails && (
              <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                {selectedProject.projectDetails
                  .split("\n")
                  .map((line) => line.trim())
                  .filter((line) => line.length > 0)
                  .map((line, index) => {
                    const cleanLine = line.replace(/^\*\s*/, "");
                    const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
                    return (
                      <li key={index} style={{ marginBottom: "8px", lineHeight: "1.6" }}>
                        {parts.map((part, partIdx) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </li>
                    );
                  })}
              </ul>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </HelmetProvider>
  );
};
