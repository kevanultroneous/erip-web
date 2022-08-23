import Link from "next/link";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/Popups/LoginPopup.module.css";
export default function LoginPopup(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row className={styles.LoginPopupRow}>
          <Col xl={10} lg={10} xs={10} md={10}>
            <Image
              src="/assets/images/login-image.png"
              alt={"login-image"}
              loading="lazy"
              fluid
            />
          </Col>
          <Col xl={12} lg={12} xs={12} md={12}>
            <div className={styles.InputWrraper}>
              <label className={styles.InputDefaultLabel}>+91</label>
              <input
                maxlength="6"
                className={styles.InputNumber}
                type={"number"}
                placeholder="Enter your mobile number (We’ll send OTP on this number)"
              />
            </div>
            <div className={styles.InputCheckBox}>
              <input type="checkbox" className={styles.CheckBoxwrraper} />I
              agree to the <Link href="/">terms and conditions</Link>
            </div>
          </Col>
          <Col xl={12} lg={12} xs={12} md={12}>
            <PrimaryButton
              title="Continue"
              buttonStyle={{
                width: "100%",
                backgroundColor: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
