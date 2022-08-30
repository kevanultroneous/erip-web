import Link from "next/link";
import { Alert, Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/Popups/LoginPopup.module.css";
import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
export default function LoginPopup({ show, onHide }) {
  /* Note :  3 validation state 
      1.ValidationNumberHideError
      2.Otpsending
      3.ValidationOtpHideError
      first run number validation 
      second run after number validation is done  , otp sending
      third one is otp validation */

  const [ContactNumber, setContactNumber] = useState("");
  const [Otp, setOtp] = useState("");
  const [ValidationNumberHideError, setValidationNumberHideError] =
    useState(true);
  const [ValidationOtpHideError, setValidationOtpHideError] = useState(true);
  const [OtpSending, setOtpSending] = useState(false);
  const [ErrorMsgHide, setErrorMsgHide] = useState(true);
  const [CheckboxStatus, setCheckBoxStatus] = useState(false);
  const [mobileView, setMobileView] = useState(true);
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);

  useEffect(() => {
    if (CheckboxStatus) {
      setErrorMsgHide(true);
    }
  }, [CheckboxStatus]);

  useEffect(() => {
    if (!show) {
      setErrorMsgHide(true);
      setValidationNumberHideError(true);
      setValidationOtpHideError(true);
      setOtpSending(false);
      setCheckBoxStatus(false);
      setContactNumber("");
      setOtp("");
    }
  }, [show]);

  const NumberInputHandler = (e) => {
    setContactNumber(e.target.value);
    if (ContactNumber.length >= 10) {
      setErrorMsgHide(false);
      setValidationNumberHideError(false);
    } else {
      setErrorMsgHide(true);
      setValidationNumberHideError(true);
    }
  };

  const OtpInputHandler = (e) => {
    setOtp(e.target.value);
    if (Otp.length >= 6) {
      setErrorMsgHide(false);
      setValidationOtpHideError(false);
    } else {
      setErrorMsgHide(true);
      setValidationOtpHideError(true);
      setOtpSending(true);
    }
  };

  const ContinueButtonHandler = () => {
    if (ContactNumber.length < 10) {
      setErrorMsgHide(false);
      setValidationNumberHideError(false);
    } else if (!CheckboxStatus) {
      setErrorMsgHide(false);
    } else {
      setOtpSending(true);
    }
  };
  const LoginButtonHandler = () => {
    if (Otp.length < 6) {
      setErrorMsgHide(false);
      setValidationOtpHideError(false);
    } else {
      setOtpSending(false);
      setOtp("");
      setContactNumber("");
      setCheckBoxStatus(false);
    }
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="LoginPopup"
    >
      <Modal.Header
        closeButton={OtpSending ? false : true}
        className={styles.ModalHeaderLine}
      ></Modal.Header>

      <Modal.Body className={styles.ModalBody}>
        {/* Alert message depends on conditions */}

        <Alert variant={"danger"} hidden={ErrorMsgHide}>
          {OtpSending && !ValidationOtpHideError && "Enter Valid OTP !"}
          {!ValidationNumberHideError && "Enter valid Mobile Number !"}
          {ValidationNumberHideError &&
            !CheckboxStatus &&
            "Please check terms and conditions !"}
        </Alert>

        {/*  */}
        <Row className={styles.LoginPopupRow}>
          {OtpSending ? (
            <div className={styles.MobileHeadingWrraper}>
              <div>
                <h4 className={styles.MobileHeading}>Enter OTP</h4>
                <p className={styles.MobilesubHeading}>
                  We’ve sent an OTP to {ContactNumber}
                </p>
              </div>
              <div className={styles.CloseIconWrraper}>
                <CgCloseO className={styles.CloseIcon} onClick={onHide} />
              </div>
            </div>
          ) : (
            <div className={styles.MobileHeadingWrraper}>
              <div>
                <h4 className={styles.MobileHeading}>
                  Please verify your mobile
                </h4>
                <p className={styles.MobilesubHeading}>
                  We’ll send OTP on your number
                </p>
              </div>
              <div className={styles.CloseIconWrraper}>
                <CgCloseO className={styles.CloseIcon} onClick={onHide} />
              </div>
            </div>
          )}

          {/* center image */}
          <Col xl={12} lg={12} xs={12} md={12} className={styles.CenterImage}>
            <Image
              src="/assets/images/login-image.png"
              alt={"login-image"}
              loading="lazy"
              fluid
              className={styles.PopupMobileImage}
            />
          </Col>
          {/* Number Input */}
          <Col xl={12} lg={12} xs={12} md={12}>
            {!OtpSending && (
              <div className={styles.InputWrraper}>
                <label className={styles.InputDefaultLabel}>+91</label>
                <input
                  maxlength={10}
                  className={styles.InputNumber}
                  type={"tel"}
                  value={ContactNumber}
                  onChange={NumberInputHandler}
                  placeholder="Enter your mobile number"
                />
              </div>
            )}
            {/* Otp Input */}
            {OtpSending && (
              <div className={styles.InputWrraper}>
                <input
                  maxlength={6}
                  className={styles.InputNumber}
                  type={"tel"}
                  value={Otp}
                  onChange={OtpInputHandler}
                  placeholder="Enter the OTP here"
                />
              </div>
            )}
            {/* checkbox agreement */}
            {!OtpSending && (
              <div className={styles.InputCheckBox}>
                <Form.Check
                  onChange={(e) => {
                    setCheckBoxStatus(e.target.checked);
                  }}
                  type={"checkbox"}
                  className={styles.CheckBoxwrraper}
                />
                I agree to the &nbsp;
                <Link href="/"> terms and conditions</Link>
              </div>
            )}
          </Col>
          {/* login or continue button depends on conditions  */}
          <Col xl={12} lg={12} xs={12} md={12}>
            <PrimaryButton
              clickHandler={() => {
                OtpSending ? LoginButtonHandler() : ContinueButtonHandler();
              }}
              title={OtpSending ? "Login" : "Continue"}
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
