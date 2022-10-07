import { Col, Image, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/Popups/OfferadPopup.module.css";
export default function OfferadPopup({ show, onHide, img }) {
  return (
    <Modal
      show={show}
      centered
      size="md"
      className="OfferPopup"
      onHide={onHide}
    >
      <Modal.Header closeButton className={styles.OfferHeader}></Modal.Header>
      <Modal.Body className={styles.OfferHeadModal}>
        <Row>
          {/* <Col xs={12} md={12} lg={12} xl={12} className={styles.CenteredImg}>
            <div className={styles.CouponsImg}>
              <Image src="/assets/images/couponss-1.png" alt="coupons" />
            </div>
          </Col> */}
          <Col xs={12} md={12} lg={12} xl={12}>
            <Image src={img} style={{ width: "100%", height: "auto" }} />
            {/* <div className={styles.MainDetails}>
              <b className={styles.MainDetailsTitle}>Get 25% Off</b>
              <p className={styles.MainDetailsDescription}>
                Get 25% off on your first order
              </p>
            </div>
            <div className={styles.ListWrraper}>
              <ul>
                <li className={styles.ListItem}>
                  Minimum order value must be ₹500
                </li>
                <li className={styles.ListItem}>
                  Not applicable on home appliances
                </li>
                <li className={styles.ListItem}>
                  Other Terms & Conditions may apply
                </li>
              </ul>
            </div> */}
            <PrimaryButton
              title="Close"
              buttonStyle={{
                width: "100%",
                background: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
