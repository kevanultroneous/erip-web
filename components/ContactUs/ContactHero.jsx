import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "@/styles/components/ContactUs/ContactHero.module.css";

function ContactHero() {
  return (
    <section className={styles.contactHeroContainer}>
      <div className={styles.contactHeading}>
        <h2>We’d love to hear from you</h2>
      </div>
      <Row className={styles.contactHeroRow}>
        <Col xl={6} md={6}>
          <div className={styles.contactHeroImage}>
            <Image
              fluid
              src="/assets/images/contact-hero-image.png"
              alt="Contact Hero"
            />
          </div>
        </Col>
        <Col xl={6} md={6}>
          <div className={styles.contactFormHead}>
            <div className={styles.formTop}>
              <p>
                Our crew of superheroes are standing by for service and support!
              </p>
            </div>
            <Form>
              <Row>
                <Col xl={12} className={styles.formInputBox}>
                  <Form.Control type="text" placeholder="Your Name" />
                </Col>
                <Col xl={6} className={styles.formInputBox}>
                  <Form.Control type="tel" placeholder="Your Contact" />
                </Col>
                <Col xl={6} className={styles.formInputBox}>
                  <Form.Control type="email" placeholder="Your Email" />
                </Col>
                <Col xl={12} className={styles.formInputBox}>
                  <Form.Control
                    as="textarea"
                    placeholder="Your Query"
                    className={styles.formTextArea}
                  />
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ContactHero;
