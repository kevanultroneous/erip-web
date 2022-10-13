import Link from "next/link";
import { Alert, Col, Form, Image, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/Popups/LoginPopup.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  callCheckRegistrationAPI,
  callLoginapi,
  callRegistrationUser,
  callSendLoginOTPApi,
  callUserclear,
} from "redux/actions/userActions/userActions";

export default function LoginPopup({ show, onHide }) {
  // states for inputs
  const [ContactNumber, setContactNumber] = useState("");
  const [Otp, setOtp] = useState("");
  const [RegOtp, setRegOtp] = useState("");
  const [ValidationNumberHideError, setValidationNumberHideError] =
    useState(true);
  const [ValidationOtpHideError, setValidationOtpHideError] = useState(true);
  const [OtpSending, setOtpSending] = useState(false);
  const [ErrorMsgHide, setErrorMsgHide] = useState(true);
  const [CheckboxStatus, setCheckBoxStatus] = useState(false);
  const [mobileView, setMobileView] = useState(true);
  const [regOtpModal, setRegOtpModal] = useState(false);

  const userselector = useSelector((state) => state.userdata);

  const dispatch = useDispatch();

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
  useEffect(() => {}, [userselector]);
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

  const RegOtpHandler = (e) => {
    setRegOtp(e.target.value);
    if (RegOtp.length >= 6) {
      // alert("Not valid OTP");
    }
  };

  const RegOtpVerify = () => {
    if (RegOtp.length < 6) {
      // alert("Enter valid otp");
    } else {
      dispatch(callRegistrationUser(ContactNumber, RegOtp));
    }
  };

  useEffect(() => {
    if (!(userselector.data == 0) && userselector.blank == false) {
      if (userselector.data) {
        // mobile already registerd
        if (userselector.data.mobile_registered) {
          dispatch(callSendLoginOTPApi(ContactNumber));
          setOtpSending(true);
        }
        // user authentication process handling with personal process code
        if (userselector.process == 0.1) {
          if (userselector.data.mobile_registered == false) {
          }
          // reg check success
        } else if (userselector.process == 0.2) {
          alert(userselector.data.message);
          //reg check fail
        } else if (userselector.process == 1.1) {
          setRegOtpModal(true);
        } else if (userselector.process == 1.2) {
          if (userselector.data.message == "Mobile OTP already sent") {
            setRegOtpModal(true);
          } else {
          }
          // reg otp send fail
        } else if (userselector.process == 2.1) {
          alert(userselector.data.message);
          //reg success
          dispatch(callSendLoginOTPApi());
        } else if (userselector.process == 2.2) {
          alert(userselector.data.message);
          // reg fail
        }

        if (userselector.process == 3.1) {
          alert(userselector.data.message);
        } else if (userselector.process == 3.2) {
          alert(userselector.data.message);
        }

        if (userselector.process == 4.1) {
          alert(userselector.data.message);
        } else if (userselector.process == 4.2) {
          if (userselector.data == "Mobile OTP expired") {
            dispatch(callSendLoginOTPApi(ContactNumber));
          } else {
            alert(userselector.data);
          }
        }
      }
    }
  }, [userselector]);

  const ContinueButtonHandler = () => {
    if (ContactNumber.length < 10) {
      setErrorMsgHide(false);
      setValidationNumberHideError(false);
    } else if (!CheckboxStatus) {
      setErrorMsgHide(false);
    } else {
      dispatch(callUserclear(0));
      dispatch(callCheckRegistrationAPI(ContactNumber));
    }
  };

  const LoginButtonHandler = () => {
    if (Otp.length < 6) {
      setErrorMsgHide(false);
      setValidationOtpHideError(false);
    } else {
      dispatch(callLoginapi(ContactNumber, Otp));
    }
  };

  return (
    <div>
      <Modal
        show={regOtpModal}
        onHide={() => setRegOtpModal(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className={styles.RegModalBody}>
          <h4 className={styles.RegModalText}>Registration OTP</h4>
          <div className={styles.InputWrraper}>
            <input
              // maxlength={"6"}
              className={styles.InputNumber}
              type={"number"}
              value={RegOtp}
              onChange={RegOtpHandler}
              placeholder="Enter the OTP here"
            />
          </div>

          <PrimaryButton
            buttonSize="sm"
            clickHandler={() => RegOtpVerify()}
            title={"Verify"}
          />
        </Modal.Body>
      </Modal>
      {/*  */}
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
                  <Image
                    onClick={onHide}
                    src="/assets/icons/cross-close.svg"
                    alt="cross-close"
                    loading="lazy"
                  />
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
                  <Image
                    onClick={onHide}
                    src="/assets/icons/cross-close.svg"
                    alt="cross-close"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* center image */}
            <Col xl={12} lg={12} xs={12} md={12} className={styles.CenterImage}>
              <div className={styles.PopupLoginImageWrraper}>
                <Image
                  src="/assets/images/login-image.png"
                  alt={"login-image"}
                  loading="lazy"
                  className={`${styles.PopupMobileImage} ${styles.PopupLoginImage}`}
                />
              </div>
            </Col>
            {/* Number Input */}
            <Col xl={12} lg={12} xs={12} md={12}>
              {!OtpSending && (
                <div className={styles.InputWrraper}>
                  <label className={styles.InputDefaultLabel}>+91</label>
                  <input
                    // maxlength={"10"}
                    className={styles.InputNumber}
                    type="number"
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
                    // maxlength={"6"}
                    className={styles.InputNumber}
                    type={"number"}
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
    </div>
  );
}
