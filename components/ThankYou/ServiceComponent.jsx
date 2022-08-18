import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/ThankYou/ServiceComponent.module.css";

function ServiceComponent({
  serviceImage,
  serviceName,
  serviceDesc,
  servicePrice,
}) {
  return (
    <div className={styles.ServiceComponentMainContainer}>
      <Row className={styles.serviceComponentRow}>
        <Col xl={3} xs={4}>
          <div>
            <Image src={serviceImage} fluid alt={serviceName} />
          </div>
        </Col>
        <Col xl={9} xs={8}>
          <Row className={styles.serviceDesc}>
            <Col xl={9} xs={8}>
              <h5>{serviceName}</h5>
              <p>{serviceDesc}</p>
            </Col>
            <Col xl={3} xs={4} className={styles.servicePrice}>
              <h5>₹ {servicePrice}</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ServiceComponent;
