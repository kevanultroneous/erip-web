import { Col, Image, Modal, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/AlternatePopup.module.css";
import PrimaryButton from "../common/PrimaryButton";
export default function AddEmail({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row className={styles.AlternateRow}>
          <Col xs={8} md={11} lg={11} xl={11}>
            <p className={styles.AlternateNumText}>Add Email</p>
          </Col>
          <Col xs={4} md={1} lg={1} xl={1} className={styles.ImageClose}>
            <div onClick={onHide}>
              <Image src="/assets/icons/close.png" alt="close-img" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <div className={styles.InputWrraper}>
              <input
                type={"email"}
                className={styles.InputNum}
                placeholder="Enter email here"
              />
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <PrimaryButton
              title="Add Email"
              buttonStyle={{
                backgroundColor: "#0E62CB",
                color: "#fff",
                width: "100%",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
