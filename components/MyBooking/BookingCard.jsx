import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/BookingCard.module.css";
import PrimaryButton from "../common/PrimaryButton";

function BookingCard({
  orderNumber,
  partnerStatusAssigned,
  partnerImage,
  partnerName,
  bookingDateAndTime,
  issueDevice,
  issueType,
  partnerAssigningStatus,
  OTP,
  viewdetails,
  callsupport,
  partnerrating,
}) {
  return (
    <div className={styles.bookingCardContainer}>
      <Row className={styles.bookingCardHead}>
        <Col xl={4} xs={6} className={styles.bookingOrder}>
          <p>Order ID: {orderNumber}</p>
        </Col>
        <Col xl={6} xs={6}>
          <div className={styles.bookingCardStatus}>
            <p>{partnerStatusAssigned}</p>
          </div>
        </Col>
      </Row>
      <Row className={styles.bookingCardBody}>
        <Col xl={4} xs={4}>
          <div className={styles.bookingCardProfile}>
            <Image src={partnerImage} alt={partnerName} height={100} />
            <div className="d-flex">
              <p>{partnerName}&nbsp;&nbsp;&nbsp;</p>
              <div className="d-flex align-items-center">
                <span>{partnerrating}</span>
                {partnerrating == " " ? (
                  <label
                    style={{
                      background: "#030B1C",
                      height: "10px",
                      padding: "0.3rem",
                      marginLeft: "1rem",
                    }}
                  ></label>
                ) : null}
              </div>
            </div>
          </div>
        </Col>
        <Col xl={8} xs={8}>
          <h6 className={styles.SmallDetails}>{bookingDateAndTime}</h6>
          <h6 className={styles.SmallDetails}>{issueDevice}</h6>
          <h6 className={styles.SmallDetails}>{issueType}</h6>
        </Col>
      </Row>
      <div className={styles.customMessage}>
        <p>
          {partnerAssigningStatus == 0
            ? "We are assigning a professional to you"
            : partnerAssigningStatus == 1
            ? `Share this OTP to start service ${OTP}`
            : partnerAssigningStatus == 2
            ? "Men at Work"
            : "Please rate the partner"}
        </p>
      </div>
      <Row className={styles.actionButtons}>
        <Col xl={6} xs={6}>
          <PrimaryButton
            title={
              partnerStatusAssigned == "assigning professional"
                ? "Call Support"
                : partnerStatusAssigned == "partner assigned"
                ? "Call Professional"
                : partnerStatusAssigned == "men at work"
                ? "Call Professional"
                : partnerStatusAssigned == "job completed"
                ? "support"
                : "Call"
            }
            customClass={styles.actionBtn}
            clickHandler={callsupport}
            href={callsupport}
          />
        </Col>
        <Col xl={6} xs={6}>
          <PrimaryButton
            title="View Details"
            customClass={styles.actionBtn}
            clickHandler={viewdetails}
          />
        </Col>
      </Row>
    </div>
  );
}

export default BookingCard;
