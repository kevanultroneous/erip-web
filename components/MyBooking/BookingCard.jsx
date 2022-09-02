import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/BookingCard.module.css";

function BookingCard() {
  return (
    <div className={styles.bookingCardContainer}>
      <Row className={styles.bookingCardHead}>
        <Col xl={6} className={styles.bookingOrder}>
          <p>Order ID: #5555</p>
        </Col>
        <Col xl={6}>
          <div className={styles.bookingCardStatus}>
            <p>Assigning Professional</p>
          </div>
        </Col>
      </Row>
      <Row className={styles.bookingCardBody}>
        <Col xl={4}>
          <div>
            <Image
              fluid
              src="/assets/images/booking-card-image.png"
              alt="booking service"
            />
          </div>
        </Col>
        <Col xl={6}>
          <h6> 20th April, 9-11 AM</h6>
          <h6> Air Conditioner</h6>
          <h6> Less Cooling/No Cooling</h6>
        </Col>
      </Row>
      <div className={styles.customMessage}>
        <p>We are assigning a professional to you</p>
      </div>
      <Row className={styles.actionButtons}></Row>
    </div>
  );
}

export default BookingCard;
