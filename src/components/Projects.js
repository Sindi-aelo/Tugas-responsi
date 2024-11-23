import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pasienn.jpg";
import projImg2 from "../assets/img/patient.jpg";
import projImg3 from "../assets/img/medical.png";
import projImg4 from "../assets/img/fig.png";
import projImg5 from "../assets/img/pasien2.jpg";
import projImg6 from "../assets/img/patient2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import './Projects.css';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false); // State untuk visibilitas
  const [showModal, setShowModal] = useState(false); // State untuk modal
  const [selectedProject, setSelectedProject] = useState(null); // Menyimpan proyek yang dipilih
  const sectionRef = useRef(null); // Ref untuk elemen yang akan dipantau

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Mengatur ambang visibilitas (10%)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Efek hanya dijalankan sekali

  const projects = [
    { title: "Project 1", description: "Description for Project 1", imgUrl: projImg1 },
    { title: "Project 2", description: "Description for Project 2", imgUrl: projImg2 },
    { title: "Project 3", description: "Description for Project 3", imgUrl: projImg3 },
    { title: "Project 4", description: "Description for Project 4", imgUrl: projImg4 },
    { title: "Project 5", description: "Description for Project 5", imgUrl: projImg5 },
    { title: "Project 6", description: "Description for Project 6", imgUrl: projImg6 },
  ];

  // Fungsi untuk membuka modal dan memilih proyek
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="project" id="projects" ref={sectionRef}>
      <Container>
        <Row>
          <Col size={12}>
            <div className={isVisible ? "animate-fadeIn" : "hidden"}>
              <h2>Projects</h2>
              <p>Beberapa project yang telah dibuat :</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first" id="projects-tabs-tab-first">Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" id="projects-tabs-tab-second">Sertifikat</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" id="projects-tabs-tab-third">Design</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className={isVisible ? "animate-slideInUp" : "hidden"}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            imgUrl={project.imgUrl}
                            onClick={handleProjectClick} // Pass handleProjectClick as onClick
                          />
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Not yet.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Not yet.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />

      {/* Modal untuk menampilkan gambar besar dan deskripsi */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <img src={selectedProject.imgUrl} alt="Project" className="img-fluid" />
              <p className="mt-3">{selectedProject.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
