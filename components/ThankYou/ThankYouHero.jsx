import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/ThankYou/ThankYouHero.module.css";
import PrimaryButton from "../common/PrimaryButton";

function ThankYouHero() {
  return (
    <section className={styles.thankyouContainer}>
      <Row className={styles.thankyouHeroRow}>
        <Col xl={4} xs={6}>
          <div>
            <Image
              fluid
              src="/assets/images/thankyou-hero-image.png"
              alt="Thank you hero image"
            />
          </div>
        </Col>
        <Col xl={5} className={styles.thankYouHeroTextCol}>
          <div className={styles.thankYouHeroText}>
            <h3>Thank You!</h3>
            <p>Your booking has been placed successfully</p>
            <PrimaryButton
              title="View Order Status"
              variant="primary"
              customClass={styles.orderStatusBtn}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ThankYouHero;
