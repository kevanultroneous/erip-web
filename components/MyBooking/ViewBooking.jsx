import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/ProcessStatus.module.css";
import { BiArrowBack } from "react-icons/bi";
import Container from "../common/Container";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PrimaryButton from "../common/PrimaryButton";
export default function ViewBooking() {
  return (
    <Row className={styles.ViewBookingRow}>
      <Col xs={2} md={2} lg={2} xl={2}>
        <BiArrowBack className={styles.BackArrow} />
      </Col>
      <Col xs={10} md={10} lg={10} xl={10}>
        <p className={styles.MainTitle}>LG-Air Conditioner</p>
      </Col>
      <Col xs={12} md={12} lg={12} xl={12}>
        <div className={styles.ProgressWrraper}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={`${styles.arrowsteps} ${styles.clearfix}`}>
                <div className={`${styles.step} ${styles.current}`}>
                  <span>Assigning Professional</span>
                </div>
                <div className={styles.step}>
                  <span>Partner Assigned</span>
                </div>
                <div className={styles.step}>
                  <span>Men At Work</span>
                </div>
                <div className={styles.step}>
                  <span>Payment </span>
                </div>
                <div className={`${styles.step} ${styles.Laststep}`}>
                  Review & Rating
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.InfoWrraper}>
          <AiOutlineInfoCircle className={styles.InfoIcon} />{" "}
          <p className={styles.InfoText}>Partner assignment in progress</p>
        </div>
      </Col>
      <Col xs={12} md={12} lg={12} xl={12}>
        <Row>
          <Col xs={6} md={6} lg={6} xl={6}>
            <Row className={styles.BookingBox}>
              <Col xs={6} md={6} lg={6} xl={6}>
                <label className={styles.BoxTitle}>Booking Details</label>
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <label className={styles.BoxOrder}>Order # - 0007</label>
              </Col>
              <Col
                xs={6}
                md={6}
                lg={6}
                xl={6}
                className={styles.ProductWrraper}
              >
                <Image
                  src="/assets/icons/box-product.png"
                  alt="box-icons"
                  className={styles.BoxImg}
                />
                <label className={styles.BoxProduct}>
                  Air Conditioner
                  <br />
                  No cooling/Less cooling
                </label>
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <Image src="/assets/icons/box-bil.png" alt="box-icons" />
                <label className={styles.BoxAmount}>
                  Amount to be paid: ₹200
                </label>
              </Col>
              <Col xs={12} md={12} lg={12} xl={12}>
                <Image src="/assets/icons/box-loc.png" alt="box-icons" />
                <label className={styles.BoxAddress}>
                  Lorem ipsum cotor bajolt valom
                </label>
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <Image src="/assets/icons/box-time.png" alt="box-icons" />
                <label className={styles.BoxDateTime}>
                  20th April, 9-11 AM
                </label>
              </Col>
              <Col xs={12} md={12} lg={12} xl={12}>
                <Row>
                  <Col xs={6} md={6} lg={6} xl={6}>
                    <PrimaryButton
                      title="Reschedule"
                      buttonStyle={{ width: "100%" }}
                    />
                  </Col>
                  <Col xs={6} md={6} lg={6} xl={6}>
                    <PrimaryButton
                      title="Cancel"
                      buttonStyle={{
                        width: "100%",
                        border: "2px solid #dc3545",
                      }}
                      variant="outline-danger"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <PrimaryButton title="Call Us For Support" />
            </Row>
          </Col>
          <Col xs={6} md={6} lg={6} xl={6}></Col>
        </Row>
      </Col>
    </Row>
  );
}
