import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/MyBooking/PartnerDetails.module.css";
import { ImPhone } from "react-icons/im";
import { useState } from "react";
export default function PartnerDetails({
  otp = "1111",
  otphide,
  off,
  callpartnerhide,
}) {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);
  var otparray = [];

  for (let k = 0; k < otp.length; k++) {
    otparray.push(otp[k]);
  }

  return (
    <div
      className={styles.PartnetDetailCard}
      style={off ? { display: "none" } : null}
    >
      <label className={styles.MainHeading}>Partner Details</label>
      <Row>
        <Col xs={4} md={3} lg={3} xl={3}>
          <Image
            alt="small avtar"
            src="/assets/images/small-avtar.png"
            className={styles.smallAvtar}
          />
        </Col>
        <Col xs={8} md={9} lg={9} xl={9} className={styles.DetailWrraper}>
          <div className="d-flex align-items-center">
            <p className={styles.FullName}>Full Name</p>
            {mobileView ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  width: "9rem",
                }}
              >
                <ImPhone color="#0E62CB" size={20} />{" "}
              </div>
            ) : null}
          </div>
          <small className={styles.RatingWrraper}>
            3.5
            <Image src="/assets/images/min-rating.png" fluid alt="min rating" />
          </small>
        </Col>
        {!otphide && (
          <Col xs={12} md={12} lg={12} xl={12} className={styles.OtpWrraper}>
            <p className={styles.ShareOtpText}>Share OTP to start service</p>
            {otparray.map((v, i) => (
              <label key={i} className={styles.OtpNum}>
                {v}
              </label>
            ))}
          </Col>
        )}
        {callpartnerhide ? null : (
          <Col xs={12} md={12} lg={12} xl={12} className={styles.ButtonWrraper}>
            <PrimaryButton
              title="Call Partner"
              buttonStyle={{ width: "100%" }}
            />
          </Col>
        )}
      </Row>
    </div>
  );
}
