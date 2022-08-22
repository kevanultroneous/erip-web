import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PrimaryButton from "../common/PrimaryButton";
import { BsChatDots, BsQuestionCircle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import { IoCallOutline } from "react-icons/io";
import { MdCall } from "react-icons/md";
import styles from "@/styles/components/ContactUs/ContactHero.module.css";
import ContactFAQ from "./ContactFAQ";

function ContactHero() {
  const [mobileView, setMobileView] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);

  const toggleFaq = () => {
    setShowFaq(!showFaq);
  };

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
              {mobileView && <h5>Tell us how we can help</h5>}
              <p>
                Our crew of superheroes are standing by for service and support!
              </p>
            </div>
            <Row className={styles.formTopBtns}>
              <Col xl={6} xs={6} className={styles.formBtnGroup}>
                <PrimaryButton
                  title="Chat"
                  showIcons={true}
                  icon={<BsChatDots />}
                  buttonStyle={{ width: "96%" }}
                />
              </Col>
              <Col xl={6} xs={6} className={styles.formBtnGroup}>
                <PrimaryButton
                  title="Email"
                  showIcons={true}
                  icon={<AiOutlineMail />}
                  buttonStyle={{ width: "96%" }}
                />
              </Col>
            </Row>
            {mobileView && (
              <Row className={styles.formTopBtns}>
                <Col xl={6} xs={6} className={styles.formBtnGroup}>
                  <PrimaryButton
                    title="FAQs"
                    showIcons={true}
                    clickHandler={toggleFaq}
                    icon={<BsQuestionCircle />}
                    buttonStyle={{ width: "96%" }}
                    variant={showFaq ? "primary" : "outline-primary"}
                  />
                </Col>
                <Col xl={6} xs={6} className={styles.formBtnGroup}>
                  <PrimaryButton
                    title="Call"
                    showIcons={true}
                    icon={<MdCall />}
                    buttonStyle={{ width: "96%" }}
                  />
                </Col>
              </Row>
            )}
            {showFaq && mobileView ? <ContactFAQ /> : null}
            <Form>
              <Row>
                <Col xl={12} className={styles.formInputBox}>
                  <Form.Control type="text" placeholder="Your Name" />
                </Col>
                <Row className={styles.contactInputBox}>
                  <Col xl={6} className={styles.formInputBox}>
                    <Form.Control type="tel" placeholder="Your Contact" />
                  </Col>
                  <Col xl={6} className={styles.formInputBox}>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Col>
                </Row>
                <Col xl={12} className={styles.formInputBox}>
                  <Form.Control
                    as="textarea"
                    placeholder="Your Query"
                    className={styles.formTextArea}
                  />
                </Col>
                <Col xl={12}>
                  <PrimaryButton
                    title="Request a Call Back"
                    buttonStyle={{ width: "100%" }}
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
