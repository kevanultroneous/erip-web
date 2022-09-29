import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/ThankYou/ThankYouHero.module.css";
import PrimaryButton from "../common/PrimaryButton";
import Container from "../common/Container";

function ThankYouHero({ clkhandler }) {
  return (
    <section className={styles.thankyouContainer}>
      <Container>
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
          <Col xl={7} className={styles.thankYouHeroTextCol}>
            <div className={styles.thankYouHeroText}>
              <h3>Thank You!</h3>
              <p>Your booking has been placed successfully</p>
            </div>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className="d-flex justify-content-center mt-5"
          >
            <PrimaryButton
              title="View Order Status"
              variant="primary"
              buttonStyle={{
                background: "#0E62CB",
                width: "50%",
              }}
              href="/my-bookings"
              clickHandler={clkhandler}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThankYouHero;
