import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/aboutUs.css'; // Import the custom styles

const AboutUs = () => {
  return (
    <Container>
      {/* About Us Section */}
      <Row className="about-us-section">
        <Col>
          <h2 className="text-center">About Us</h2>
          <p>
            Welcome to Ahmad Real Estate, where we are dedicated to helping you find the perfect property for your needs.
            Our mission is to provide exceptional service and make the process of buying, selling, or renting real estate a seamless experience.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Our Team</h2>
          <Row className="justify-content-center">
            {/* Team members/cards go here */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://placekitten.com/200/200" />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Real Estate Agent</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://placekitten.com/201/201" />
                <Card.Body>
                  <Card.Title>Jane Doe</Card.Title>
                  <Card.Text>Property Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Contact Us Section */}
      <Row className="contact-us-section">
        <Col>
          <h2 className="text-center">Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to contact us.</p>
          <Button variant="primary" className="mt-3 contact-button">Email Us</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
