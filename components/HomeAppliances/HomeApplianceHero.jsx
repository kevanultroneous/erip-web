import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

import styles from "@/styles/components/homeAppliances/homeApplianceHero.module.css";

function HomeApplianceHero() {
  const [mobileView, setMobileView] = useState(false);

  // Home appliance  Dynamic UI for diff. device
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);

  if (mobileView) {
    return (
      <Row className={styles.homeApplianceHeroRow}>
        <Col xl={3}>
          <Image
            fluid
            src="/assets/images/Hero illustration.png"
            alt="Home Appliances"
          />
        </Col>
        <Col xl={9} className={styles.homeApplianceHeroCopy}>
          <h2>Doorstep Repair Services for your Washing Machine</h2>
          <h5>Complete door to door service by top quality engineers</h5>
          <h5>100% Genuine & Authentic Parts, 3 Months Service Warranty</h5>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row className={styles.homeApplianceHeroRow}>
        <Col className={styles.homeApplianceHeroCopy}>
          <h2>Doorstep Repair Services for your Washing Machine</h2>
          <h5>Complete door to door service by top quality engineers</h5>
        </Col>
      </Row>
    );
  }
}

export default HomeApplianceHero;
