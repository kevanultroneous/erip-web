import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "@/styles/components/ContactUs/ContactHero.module.css";
import { BsChatDots } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io";
import MainButtonCommon from "../common/MainButtonCommon";

function ContactHero() {
  return (
    <section>
      <Row
        <Col xl={6}>
          <div className={styles.contactHeroImage}>
            <Image
              fluid
              src="/assets/images/contact-hero-image.png"
              alt="Contact Hero"
            />
          </div>
        </Col>
        <Col xl={6}>
          <div>
            <div className={styles.formTop}>
              <p>
                Our crew of superheroes are standing by for service and support!
              </p>
              <Row></Row>
            </div>
            <Form>
              <Form.Control type="text" placeholder="Your Name" />

              <Col xl={6}>
                <Form.Control type="number" placeholder="Your Contact" />
              </Col>
              <Col xl={6}>
                <Form.Control type="email" placeholder="Your Email" />
              </Col>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ContactHero;
