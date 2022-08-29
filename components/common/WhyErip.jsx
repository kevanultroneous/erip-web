import { Col, Image, Row } from "react-bootstrap";

import styles from "@/styles/components/common/WhyErip.module.css";
import Container from "./Container";
import { WhyEripData } from "utils/data";
export default function WhyErip() {
  return (
    <Container
      innerstyle={{
        backgroundColor: "#EAF4FF",
        padding: "2.5rem 2.5rem 4rem 2.5rem",
      }}
      userdefinedclass={styles.MobileContainer}
    >
      <Row>
        <h4 className={styles.MainTitleErip}>Why ERIP</h4>
        {WhyEripData.map((value, index) => (
          <Col
            xl={2}
            lg={2}
            xs={4}
            key={index}
            className={styles.DeviceWrraper}
          >
            <Image
              src={value.img}
              alt={value.title}
              loading="lazy"
              fluid
              className={styles.MobileImage}
            />
            <p className={styles.ImageTitle}>{value.title}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
