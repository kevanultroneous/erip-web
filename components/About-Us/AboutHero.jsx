import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/About-Us/AboutHero.module.css";

function AboutHero() {
  return (
    <section>
      <Row className={styles.aboutHeroSection}>
        <Col xl={6}>
          <div className={styles.aboutHeroHeading}>
            <h1>About Us</h1>
          </div>
          <div className={styles.aboutHeroParagraph}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
              maecenas mauris pellentesque vulputate sit. Vitae tempor duis
              massa luctus nam at mauris accumsan integer. Vulputate nec
              suspendisse porttitor molestie gravida. Aenean morbi pretium ipsum
              non blandit feugiat morb.
            </p>
            <h3>Our vision and mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
              maecenas mauris pellentesque vulputate sit. Vitae tempor duis
              massa luctus nam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
              maecenas mauris pellentesque vulputate sit. Vitae tempor duis
              massa luctus nam.
            </p>
          </div>
        </Col>
        <Col xl={6}>
          <div className={styles.aboutheroimage}>
            <Image
              fluid
              src="/assets/images/about-hero-image.png"
              alt="about hero image"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AboutHero;
