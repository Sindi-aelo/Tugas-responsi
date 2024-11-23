import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/porto.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a 
                href="https://github.com/Sindi-aelo" 
                className="me-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://twitter.com/aell1396991" 
                className="me-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a 
                href="https://instagram.com/frn.00l" 
                className="me-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://linkedin.com/in/sindi-setiawati-166b62328" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
