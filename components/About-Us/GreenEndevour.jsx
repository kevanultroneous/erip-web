import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/About-Us/GreenEndevour.module.css";
import { useEffect, useState } from "react";

function GreenEndevour() {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);
  return (
    <section>
      {mobileView && (
        <div className={styles.aboutGreenHeadingMobile}>
          <h2>Our Green Endeavor</h2>
        </div>
      )}
      <Row className={styles.aboutGreenSection}>
        <Col xl={6}>
          <div className={styles.aboutGreenHeading}>
            <h2>Our Green Endeavor</h2>
          </div>
          <div className={styles.aboutGreenParagraph}>
            <p>
              The motivation behind starting ERIP was to reduce the harmful
              e-waste footprint on the planet. E-waste is produced in heaps in
              the IT sector, and ERIP is on a mission to diminish this footprint
              drastically. The idea behind ERIP is to spread e-waste awareness
              among the tech-savvy generation and introduce them to a company
              where device repair is made simple with a few clicks. Our motto
              lies in the address the concern of E-Waste by using 3R’s- Reuse.
              Repair. Recycle.
            </p>
          </div>
        </Col>
        <Col xl={5} md={10} xs={10} className={styles.aboutGreenimageRow}>
          <div className={styles.aboutGreenimage}>
            <Image
              fluid
              src="/assets/images/about-green-image.png"
              alt="about green image"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default GreenEndevour;
