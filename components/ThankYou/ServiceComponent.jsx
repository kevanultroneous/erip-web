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
      <Row>
        <Col xl={2}>
          <div>
            <Image src={serviceImage} fluid alt={serviceName} />
          </div>
        </Col>
        <Col xl={8}>
          <h5>{serviceName}</h5>
          <p>{serviceDesc}</p>
        </Col>
        <Col xl={2} className={styles.servicePrice}>
          <h5>₹ {servicePrice}</h5>
        </Col>
      </Row>
    </div>
  );
}

export default ServiceComponent;
