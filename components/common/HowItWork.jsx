import { Col, Image, Row } from "react-bootstrap";
import Container from "./Container";
import styles from "@/styles/components/common/HowItWork.module.css";
import { useState } from "react";
export default function HowItWork() {
  const [selected_tab, setSelected_Tab] = useState(0);

  return (
    <Container>
      <div className={styles.WorkMainTitleWrraper}>
        <h4 className={styles.WorkMainTitle}>How It Works</h4>
      </div>
      <Row>
        <Col xl={12}>
          <div className={styles.HowItWorkWrraper}>
            <div
              className={`${styles.Tab1} ${
                selected_tab === 0 && styles.TabColor
              }`}
              onClick={() => setSelected_Tab(0)}
            >
              <h3 className={styles.TabHeading}>Doorstep Service</h3>
              {selected_tab === 0 && <span className={styles.TabLine}></span>}
            </div>
            <div
              className={`${styles.Tab2} ${
                selected_tab === 1 && styles.TabColor
              }`}
              onClick={() => setSelected_Tab(1)}
            >
              <h3 className={styles.TabHeading}>Pickup & Delivery</h3>
              {selected_tab === 1 && <span className={styles.TabLine}></span>}
            </div>
          </div>
        </Col>
        <Col xl={12}>
          {selected_tab === 0 ? (
            <Row className={styles.TabContents}>
              <Col xl={6} lg={6}>
                <div className={styles.ProgresSection}>
                  <div className={styles.ProcessGroup}>
                    <div className={styles.Number}>
                      <span>1</span>
                    </div>
                    <div className={styles.LineContainer}>
                      <span className={styles.ContentLine}></span>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.ProcessHeading}>Lorem Ipsum</h3>
                    <p className={styles.ProcessParagraph}>
                      Lörem ipsum semis stenov fasam. Osolude nysede.
                      Heteroplastisk repore. Svenskad poplaktig plara.
                    </p>
                  </div>
                </div>
                <div className={styles.ProgresSection}>
                  <div className={styles.ProcessGroup}>
                    <div className={styles.Number}>
                      <span>2</span>
                    </div>
                    <div className={styles.LineContainer}>
                      <span className={styles.ContentLine}></span>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.ProcessHeading}>Lorem Ipsum</h3>
                    <p className={styles.ProcessParagraph}>
                      Lörem ipsum semis stenov fasam. Osolude nysede.
                      Heteroplastisk repore. Svenskad poplaktig plara.
                    </p>
                  </div>
                </div>
                <div className={styles.ProgresSection}>
                  <div className={styles.ProcessGroup}>
                    <div className={styles.Number}>
                      <span>3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.ProcessHeading}>Lorem Ipsum</h3>
                    <p className={styles.ProcessParagraph}>
                      Lörem ipsum semis stenov fasam. Osolude nysede.
                      Heteroplastisk repore. Svenskad poplaktig plara.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} className={styles.NotShowOnMobile}>
                <Image
                  src="/assets/images/tab-img.png"
                  alt="active-tabs"
                  loading="lazy"
                  fluid
                />
              </Col>
            </Row>
          ) : (
            <Row className={styles.TabContents}>
              <Col xl={6} lg={6} className={styles.NotShowOnMobile}>
                <Image
                  src="/assets/images/tab-img.png"
                  alt="active-tabs"
                  loading="lazy"
                  fluid
                />
              </Col>
              <Col xl={6} lg={6}>
                <div className={styles.ProgresSection}>
                  <div className={styles.ProcessGroup}>
                    <div className={styles.Number}>
                      <span>1</span>
                    </div>
                    <div className={styles.LineContainer}>
                      <span className={styles.ContentLine}></span>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.ProcessHeading}>Lorem Ipsum</h3>
                    <p className={styles.ProcessParagraph}>
                      Lörem ipsum semis stenov fasam. Osolude nysede.
                      Heteroplastisk repore. Svenskad poplaktig plara.
                    </p>
                  </div>
                </div>
                <div className={styles.ProgresSection}>
                  <div className={styles.ProcessGroup}>
                    <div className={styles.Number}>
                      <span>2</span>
                    </div>
                    <div className={styles.LineContainer}>
                      <span className={styles.ContentLine}></span>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.ProcessHeading}>Lorem Ipsum</h3>
                    <p className={styles.ProcessParagraph}>
                      Lörem ipsum semis stenov fasam. Osolude nysede.
                      Heteroplastisk repore. Svenskad poplaktig plara.
                    </p>
                  </div>
                </div>
                <div className={styles.ProgresSection}>
                  <div className={styles.ProcessGroup}>
                    <div className={styles.Number}>
                      <span>3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.ProcessHeading}>Lorem Ipsum</h3>
                    <p className={styles.ProcessParagraph}>
                      Lörem ipsum semis stenov fasam. Osolude nysede.
                      Heteroplastisk repore. Svenskad poplaktig plara.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}
