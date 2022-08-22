import { Col, Row } from "react-bootstrap";
import Container from "./Container";
import styles from "@/styles/components/common/ExclusiveService.module.css";
export default function ExclusiveService() {
  const ExclusiveServiceData = ["iPhone", "Macbook", "iPad", "Apple Watch"];
  return (
    <Container>
      <div className={styles.MainTitleWrraper}>
        <h4 className={styles.MainTitle}>Exclusive Apple services</h4>
      </div>
      <Row>
        {ExclusiveServiceData.map((value, index) => (
          <Col xl={3} lg={3} xs={3} key={index}>
            <div className={styles.ExclusiveWrraper}>
              <div className={styles.ExclusiveCard}></div>
              <p className={styles.ExclusiveCardTitle}>{value}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
