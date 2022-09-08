import { Col, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/Support.module.css";
import { ImPhone } from "react-icons/im";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";

export default function Support() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Full name <span className={styles.Mendatory}>*</span>
            </p>
            <input type="text" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={6} md={3} lg={3} xl={3}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Contact number <span className={styles.Mendatory}>*</span>
            </p>
            <input type="number" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={6} md={3} lg={3} xl={3}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Email address <span className={styles.Mendatory}>*</span>
            </p>
            <input type="email" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={12} md={12} lg={12} xl={12}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>Address</p>
            <textarea rows={3} className={styles.AddressInput}></textarea>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>Category/ Brand/ Model</p>
            <input type="text" className={styles.UserInput} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>Partner Details</p>
            <Row className={styles.PartnerDetailsInp}>
              <Col xs={6} md={6} lg={6} xl={6}>
                <p>Name - Number</p>
              </Col>
              <Col xs={6} md={6} lg={6} xl={6} className={styles.IconWrraper}>
                <ImPhone color="#0E62CB" size={20} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6}>
          <div className={styles.InputgroupSpace}>
            <p className={styles.InputLabels}>
              Details <span className={styles.Mendatory}>*</span>
            </p>
            <textarea rows={4} className={styles.AddressInput}></textarea>
          </div>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6} className={styles.SubmitWrraper}>
          <PrimaryButton
            title="Submit"
            buttonStyle={{
              width: "100%",
              background: "#0E62CB",
              color: "#fff",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
