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
}) {
  return (
    <div className={styles.bookingCardContainer}>
      <Row className={styles.bookingCardHead}>
        <Col xl={4} className={styles.bookingOrder}>
          <p>Order ID: {orderNumber}</p>
        </Col>
        <Col xl={6}>
          <div className={styles.bookingCardStatus}>
            <p>{partnerStatusAssigned}</p>
          </div>
        </Col>
      </Row>
      <Row className={styles.bookingCardBody}>
        <Col xl={3}>
          <div className={styles.bookingCardProfile}>
            <Image fluid src={partnerImage} alt={partnerName} />
            <p>{partnerName}</p>
          </div>
        </Col>
        <Col xl={8}>
          <h6>{bookingDateAndTime}</h6>
          <h6>{issueDevice}</h6>
          <h6>{issueType}</h6>
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
        <Col xl={6}>
          <PrimaryButton title="Call Support" customClass={styles.actionBtn} />
        </Col>
        <Col xl={6}>
          <PrimaryButton title="View Details" customClass={styles.actionBtn} />
        </Col>
      </Row>
    </div>
  );
}

export default BookingCard;
