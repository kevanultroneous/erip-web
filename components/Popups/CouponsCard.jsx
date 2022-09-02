import styles from "@/styles/components/Popups/CouponsCard.module.css";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
export default function CouponsCard({ code, detail, applyaction }) {
  return (
    <Row>
      <Col xs={10} md={9} lg={9} xl={9}>
        <label className={styles.CardHeading}>{code}</label>
      </Col>
      <Col xs={2} md={3} lg={3} xl={3} className={styles.TextAlignRight}>
        <label className={styles.ApplyLink} onClick={applyaction}>
          APPLY
        </label>
      </Col>
      <Col xs={12} md={12} lg={12} xl={12}>
        <p className={styles.OfferDetail}>{detail}</p>
        <hr />
      </Col>
    </Row>
  );
}
