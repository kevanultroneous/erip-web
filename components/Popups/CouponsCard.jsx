import styles from "@/styles/components/Popups/CouponsCard.module.css";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
export default function CouponsCard() {
  return (
    <Row>
      <Col xs={10} md={9} lg={9} xl={9}>
        <label className={styles.CardHeading}>TRYNEW</label>
      </Col>
      <Col xs={2} md={3} lg={3} xl={3} className={styles.TextAlignRight}>
        <label className={styles.ApplyLink}>APPLY</label>
      </Col>
      <Col xs={12} md={12} lg={12} xl={12}>
        <p className={styles.OfferDetail}>
          Save 25% on your first order. Maximum discount ₹100.Maximum discount
          ₹100. Offer valid till 30th August.<Link href="/">Know More</Link>
        </p>
        <hr />
      </Col>
    </Row>
  );
}
