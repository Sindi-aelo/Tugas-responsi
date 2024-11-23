import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/ai.png";
import { MailchimpForm } from "./MailchimpForm";
import './Contact.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const onNewsletterValidated = (status, message) => {
    setNewsletterStatus(status);
    setNewsletterMessage(message);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    setTimeout(() => {
      setFormDetails(formInitialDetails);
      setButtonText("Send");

      setStatus({
        success: true,
        message: "Message sent successfully",
        type: "success",
      });
    }, 1000); // Simulasi pengiriman data selama 1 detik
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || newsletterEmail.indexOf("@") === -1) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid email address.");
    } else {
      setNewsletterStatus("success");
      setNewsletterMessage("Subscription successful!");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div className="zoomIn">
              <img src={contactImg} alt="Contact Us" />
            </div>
          </Col>
          <Col size={12} md={6}>
            <div className="fadeIn">
              <h2>Contact Us</h2>
              <form onSubmit={handleContactSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p className={status.type === "success" ? "success" : "danger"}>
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
              <div className="newsletter-bx">
                <h3>Subscribe to our Newsletter</h3>
                {newsletterStatus === "sending" && <Alert>Sending...</Alert>}
                {newsletterStatus === "error" && (
                  <Alert variant="danger">{newsletterMessage}</Alert>
                )}
                {newsletterStatus === "success" && (
                  <Alert variant="success">{newsletterMessage}</Alert>
                )}
                <form onSubmit={handleNewsletterSubmit}>
                  <div className="new-email-bx">
                    <input
                      value={newsletterEmail}
                      type="email"
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Email Address"
                    />
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
                <MailchimpForm onValidated={onNewsletterValidated} email={newsletterEmail} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
