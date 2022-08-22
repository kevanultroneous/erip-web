import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import styles from "@/styles/components/ContactUs/ContactAddress.module.css";

function ContactAddress() {
  return (
    <section className={styles.contactAddressContainer}>
      <Row className={styles.contactAddressRow}>
        <Col xl={6} className={styles.contactAddressBox}>
          <div className={styles.contactAdrressText}>
            <h4>Head Office</h4>
            <p>
              ERIP, 1709, 1st Main Rd, Austin Town, Neelasandra, Bengaluru,
              Karnataka 560047 Tel - 080-47184455
            </p>
          </div>
        </Col>
        <Col xl={6} className={styles.contactAddressCol}>
          <div className={styles.contactMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.847054085873!2d77.6152016!3d12.9582971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4067d9247ec36adf!2sERIP!5e0!3m2!1sen!2sin!4v1660738143328!5m2!1sen!2sin"
              // width="600"
              // height="450"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className={styles.contactAddressMap}
            ></iframe>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ContactAddress;
