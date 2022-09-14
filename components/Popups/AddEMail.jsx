import { Alert, Col, Image, Modal, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/AlternatePopup.module.css";
import PrimaryButton from "../common/PrimaryButton";
import { useState } from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { callUpdateEmail } from "redux/actions/profileActions/profileActions";

export default function AddEmail({ show, onHide }) {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const altemailselector = useSelector((selector) => selector.profile);
  const addEmail = () => {
    if (validator.isEmail(email)) {
      setErr(false);
      dispatch(callUpdateEmail(localStorage.getItem("token"), email));
      onHide();
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
          <Col xs={8} md={11} lg={11} xl={11}>
            <p className={styles.AlternateNumText}>Add Email</p>
          </Col>
          <Col xs={4} md={1} lg={1} xl={1} className={styles.ImageClose}>
            <div onClick={onHide}>
              <Image src="/assets/icons/close.png" alt="close-img" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            {err && (
              <Alert variant={"danger"} className="mt-3">
                Please Enter valid Email !
              </Alert>
            )}

            <div className={styles.InputWrraper}>
              <input
                type={"email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.InputNum}
                placeholder="Enter email here"
              />
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <PrimaryButton
              clickHandler={() => addEmail()}
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
