import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/Coupons.module.css";

export default function Coupons({ offer, clickHandler }) {
  return (
    <div className={styles.CouponsRow}>
      <Row>
        <Col xs={9} md={9} lg={9} xl={9}>
          <p className={styles.CouponsTitle}>
            TRYNEW <span className={styles.AppliedText}>applied</span>
          </p>
          <p className={styles.CouponsOffer}>{offer}</p>
        </Col>
        <Col xs={3} md={3} lg={3} xl={3} className={styles.BlueCross}>
          <Image
            src="/assets/icons/blue-cross.png"
            alt="blue-cross"
            loading="lazy"
            onClick={clickHandler}
          />
        </Col>
      </Row>
    </div>
  );
}
