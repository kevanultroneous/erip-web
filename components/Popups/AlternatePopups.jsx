import { Alert, Col, Image, Modal, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/AlternatePopup.module.css";
import PrimaryButton from "../common/PrimaryButton";
import { useState } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";
import { callUpdateNumber } from "redux/actions/profileActions/profileActions";
export default function AlternatePopups({ show, onHide }) {
  const [contact, setContact] = useState("");
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

  // add mobile  function for validation and calling their callupdatenumber
  const addMobile = () => {
    if (validator.isMobilePhone(contact, "en-IN")) {
      setErr(false);
      dispatch(callUpdateNumber(localStorage.getItem("token"), contact));
      onHide();
      setContact("");
    } else {
      setErr(true);
    }
  };

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
          <Col xs={9} md={11} lg={11} xl={11}>
            <p className={styles.AlternateNumText}>Add Alternate Number</p>
          </Col>
          <Col xs={3} md={1} lg={1} xl={1} className={styles.ImageClose}>
            <div onClick={onHide}>
              <Image src="/assets/icons/close.png" alt="close-img" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            {err && (
              <Alert variant={"danger"} className="mt-3">
                Please Enter valid Mobile Number!
              </Alert>
            )}

            <div className={styles.InputWrraper}>
              <label className={styles.DefaultText}>+91</label>
              <input
                type={"number"}
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                className={styles.InputNum}
              />
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <PrimaryButton
              title="Add number"
              clickHandler={() => addMobile()}
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
