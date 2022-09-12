import { Col, Image, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/Popups/ThankYou.module.css";
export default function Thankyou({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="ThankYou"
    >
      <Modal.Body className={styles.ThankyouBody}>
        <Row className={styles.ThankyouMain}>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.CloseWrraper}>
            <Image
              src="/assets/icons/close.png"
              alt="thank-you"
              loading="lazy"
            />
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <Image
              src="/assets/images/thank-you.png"
              alt="thank-you"
              loading="lazy"
            />
          </Col>
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.ThankyouDetails}
          >
            <h6 className={styles.ThankyouText}>Thank You</h6>
            <p className={styles.ThankyouParagraph}>
              You valuable feedback has been received
            </p>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <PrimaryButton
              title="Back to My Bookings"
              buttonStyle={{
                width: "100%",
                background: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
