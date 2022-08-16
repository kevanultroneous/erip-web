import { Col, Image, Row } from "react-bootstrap";
import Container from "./Container";
import styles from "@/styles/components/common/HowItWork.module.css";
export default function HowItWork() {
  return (
    <Container>
      <div className={styles.WorkMainTitleWrraper}>
        <h4 className={styles.WorkMainTitle}>How It Works</h4>
      </div>
      <Row>
        <Col xl={12}>
          <div className={styles.HowItWorkWrraper}>
            <div className={styles.Tab1}>
              <h3>Doorstep Service</h3>
              <span className={styles.TabLine}></span>
            </div>
            <div className={styles.Tab2}>
              <h3>Pickup & Delivery</h3>
            </div>
          </div>
        </Col>
        <Col xl={12}>
          <Row className={styles.TabContents}>
            <Col xl={6}>
              <div className={styles.ProgresSection}>
                <div className={styles.Number}>
                  <span>1</span>
                </div>
                <div className={styles.LineContainer}>
                  <span className={styles.ContentLine}></span>
                </div>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lörem ipsum semis stenov fasam. Osolude nysede.
                    Heteroplastisk repore. Svenskad poplaktig plara.
                  </p>
                </div>
              </div>
              <div className={styles.ProgresSection}>
                <div className={styles.Number}>
                  <span>2</span>
                </div>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lörem ipsum semis stenov fasam. Osolude nysede.
                    Heteroplastisk repore. Svenskad poplaktig plara.
                  </p>
                </div>
              </div>
              <div className={styles.ProgresSection}>
                <div className={styles.Number}>
                  <span>3</span>
                </div>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>
                    Lörem ipsum semis stenov fasam. Osolude nysede.
                    Heteroplastisk repore. Svenskad poplaktig plara.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <Image
                src="/assets/images/tab-img.png"
                alt="active-tabs"
                loading="lazy"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
