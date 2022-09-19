import { Col, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import NavigationHandler from "./NavigationHandler";
import styles from "@/styles/components/Popups/CancelOrder.module.css";
export default function CancelOrder({ show, onHide }) {
  const checkboxdata = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Other",
  ];
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CancelOrder"
    >
      <Modal.Body>
        <Row className={styles.MainRow}>
          <NavigationHandler
            navtitle={"Cancel"}
            unique
            backhandler={onHide}
            close
            oncloseaction={onHide}
            closebackstyle={styles.MobileHide}
            blueclosestyle={styles.BlueClose}
            titlestyle={styles.TitleInMob}
          />
          <Col xs={12} md={12} lg={12} xl={12}>
            <p className={styles.TitleOfPopup}>
              Please give a reason for cancelling
            </p>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            {checkboxdata.map((value, index) => (
              <div className={styles.CheckBox}>
                <input type={"checkbox"} key={index} />
                <label className={styles.CheckBoxLabel}>{value}</label>
              </div>
            ))}
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <textarea
              rows={4}
              placeholder="Enter reason here"
              className={styles.TextArea}
            ></textarea>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
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
      </Modal.Body>
    </Modal>
  );
}
