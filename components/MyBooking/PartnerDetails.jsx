import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/MyBooking/PartnerDetails.module.css";
export default function PartnerDetails({ otp = "1111", otphide, off }) {
  var otparray = [];

  for (let k = 0; k < otp.length; k++) {
    otparray.push(otp[k]);
  }

  return (
    <Col xs={12} md={6} lg={6} xl={6} style={off ? { display: "none" } : null}>
      <div className={styles.PartnetDetailCard}>
        <label className={styles.MainHeading}>Partner Details</label>
        <Row>
          <Col xs={3} md={3} lg={3} xl={3}>
            <Image
              src="/assets/images/small-avtar.png"
              className={styles.smallAvtar}
            />
          </Col>
          <Col xs={9} md={9} lg={9} xl={9} className={styles.DetailWrraper}>
            <p className={styles.FullName}>Full Name</p>
            <small className={styles.RatingWrraper}>
              3.5
              <Image src="/assets/images/min-rating.png" fluid />
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
          <Col xs={12} md={12} lg={12} xl={12} className={styles.ButtonWrraper}>
            <PrimaryButton
              title="Call Partner"
              buttonStyle={{ width: "100%" }}
            />
          </Col>
        </Row>
      </div>
    </Col>
  );
}
