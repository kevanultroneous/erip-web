import styles from "@/styles/components/MyBooking/BookingDetails.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import PrimaryButton from "../common/PrimaryButton";
import PaymentSummary from "../Popups/PaymentSummary";
import JobCardPopUp from "./JobCardPopUp";
export const DeliveryJobCard = ({ sliderdata, jcdetails, jcqc }) => {
  const [jobcard, setJobcard] = useState(false);
  return (
    <div>
      <JobCardPopUp
        show={jobcard}
        onHide={() => setJobcard(false)}
        sliderdata={sliderdata}
        jcdetails={jcdetails}
        jcqc={jcqc}
      />
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
          <BsChevronRight
            className={styles.ItemArrow}
            onClick={() => setJobcard(true)}
          />
        </Col>
      </Row>
    </div>
  );
};
export default function BookingDetails({
  hideoutcallsupport,
  deliveryAndJobcard,
  showinnercallsupport,
  hidereschedulebuttons,
  raiseticketshow,
  orderid,
  device,
  issue,
  datetime,
  orderkey,
  rescheduleclick,
  cancelorderclick,
  callsupport,
  sliderdata,
  jcdetails,
  jcqc,
  totalpaid,
}) {
  const [mobileView, setMobileView] = useState(false);
  const [summaryView, setSummaryView] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);
  return (
    <div>
      <Row className={styles.BookingBox}>
        <Col xs={12} md={6} lg={6} xl={6}>
          <label className={styles.BoxTitle}>Booking Details</label>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <label className={styles.BoxOrder}>Order # - {orderid}</label>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className={styles.ProductWrraper}>
          <Image
            src="/assets/icons/box-product.png"
            alt="box-icons"
            className={styles.BoxImg}
          />
          <label className={styles.BoxProduct}>
            {device}
            <br />
            {issue}
          </label>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className={styles.BoxAmountWrraper}>
          <Image
            src="/assets/icons/box-bil.png"
            alt="box-icons"
            className={styles.BoxImg}
          />
          <label className={styles.BoxAmount}>
            Amount to be paid: ₹{totalpaid}
          </label>
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
        <Col xs={12} md={6} lg={6} xl={12}>
          <Image
            src="/assets/icons/box-time.png"
            alt="box-icons"
            className={styles.BoxImg}
          />
          <label className={styles.BoxDateTime}>{datetime}</label>
        </Col>
        {!hidereschedulebuttons && (
          <Col xs={12} md={12} lg={12} xl={12}>
            <Row>
              <Col xs={6} md={6} lg={6} xl={6}>
                <PrimaryButton
                  clickHandler={rescheduleclick}
                  title="Reschedule"
                  buttonStyle={{ width: "100%" }}
                />
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <PrimaryButton
                  clickHandler={cancelorderclick}
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
              href={callsupport}
              title="Call Support"
              buttonStyle={{ width: "100%" }}
            />
          </Col>
        )}
      </Row>
      {!hideoutcallsupport &&
        (mobileView ? null : (
          <Row className={styles.CallUsForSupport}>
            <Col xs={12} md={12} lg={12} xl={12}>
              <PrimaryButton
                href={callsupport}
                title="Call Us For Support"
                buttonStyle={{ width: "100%", marginBottom: "4rem" }}
              />
            </Col>
          </Row>
        ))}
      {deliveryAndJobcard && (
        <DeliveryJobCard
          sliderdata={sliderdata}
          jcdetails={jcdetails}
          jcqc={jcqc}
        />
      )}
      {raiseticketshow ? (
        <Row className={styles.MiniCard}>
          <Col xs={12} md={12} lg={12} xl={12}>
            <div className={styles.CoverOfReceipt}>
              <Image
                src="/assets/icons/shield.svg"
                alt="shield"
                style={{ marginRight: "1rem" }}
              />
              <p style={{ margin: "0%" }}>
                <span
                  style={{
                    color: "#00B67F",
                    marginRight: "0.2rem",
                    fontWeight: "600",
                  }}
                >
                  90 days
                </span>{" "}
                of warranty period remaining
              </p>
            </div>
          </Col>
          <Col xs={8} md={8} lg={8} xl={8}>
            <p className={styles.ItemTitleJob}>View Receipt</p>
          </Col>
          <Col xs={4} md={4} lg={4} xl={4}>
            <PaymentSummary
              order={orderkey}
              show={summaryView}
              onHide={() => setSummaryView(false)}
              back={() => setSummaryView(false)}
              title={"Payment Summary"}
            />
            <BsChevronRight
              className={styles.ItemArrow}
              onClick={() => setSummaryView(true)}
            />
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className="mt-3">
            <PrimaryButton
              title="Raise ticket to get help"
              buttonStyle={{ width: "100%" }}
            />
          </Col>
        </Row>
      ) : null}
    </div>
  );
}
