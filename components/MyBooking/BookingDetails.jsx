import styles from "@/styles/components/MyBooking/BookingDetails.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import PrimaryButton from "../common/PrimaryButton";
export default function BookingDetails({
  hideoutcallsupport,
  deliveryAndJobcard,
  showinnercallsupport,
  hidereschedulebuttons,
}) {
  return (
    <Col xs={12} md={6} lg={6} xl={6}>
      <Row className={styles.BookingBox}>
        <Col xs={12} md={6} lg={6} xl={6}>
          <label className={styles.BoxTitle}>Booking Details</label>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <label className={styles.BoxOrder}>Order # - 0007</label>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className={styles.ProductWrraper}>
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
        <Col xs={12} md={6} lg={6} xl={6} className={styles.BoxAmountWrraper}>
          <Image
            src="/assets/icons/box-bil.png"
            alt="box-icons"
            className={styles.BoxImg}
          />
          <label className={styles.BoxAmount}>Amount to be paid: ₹200</label>
        </Col>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Image
            src="/assets/icons/box-loc.png"
            alt="box-icons"
            className={styles.BoxImg}
          />
          <label className={styles.BoxAddress}>
            Lorem ipsum cotor bajolt valom
          </label>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <Image
            src="/assets/icons/box-time.png"
            alt="box-icons"
            className={styles.BoxImg}
          />
          <label className={styles.BoxDateTime}>20th April, 9-11 AM</label>
        </Col>
        {hidereschedulebuttons && (
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
        )}
        {showinnercallsupport && (
          <Col xs={12} md={12} lg={12} xl={12}>
            <PrimaryButton
              title="Call Support"
              buttonStyle={{ width: "100%" }}
            />
          </Col>
        )}
      </Row>
      {!hideoutcallsupport && (
        <Row className={styles.CallUsForSupport}>
          <Col xs={12} md={12} lg={12} xl={12}>
            <PrimaryButton
              title="Call Us For Support"
              buttonStyle={{ width: "100%" }}
            />
          </Col>
        </Row>
      )}
      {deliveryAndJobcard && (
        <>
          <Row className={styles.MiniCard}>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className={styles.ItemTitle}>Estimated to deliver on</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className={styles.ItemAns}>24th April</p>
            </Col>
          </Row>
          <Row className={styles.MiniCard}>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className={styles.ItemTitleJob}>View Job Card</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <BsChevronRight className={styles.ItemArrow} />
            </Col>
          </Row>
        </>
      )}
    </Col>
  );
}
