import { Accordion, Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/ProcessStatus.module.css";
import { BiArrowBack } from "react-icons/bi";
import Container from "../common/Container";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PrimaryButton from "../common/PrimaryButton";
import PartnerStatusProgress from "./PartnerStatusProgress";
import BookingDetails, { DeliveryJobCard } from "./BookingDetails";
import NeedHelp from "./NeedHelp";
import PartnerDetails from "./PartnerDetails";
import Quotation from "./Quotation";
import { useState } from "react";
import FeedbackQue from "./FeedbackQue";
import Ratingbar from "./Ratingbar";
import { useEffect } from "react";
import MobileProgress from "./MobileProgress";
import { getOrdersDetails } from "api/ordersAPI";
import CancelOrder from "../Popups/CancelOrder";
import Reschedule from "../Popups/Reschedule";
import FeedbackQuestions from "../Popups/FeedbackQuestions";
import RatingAndReview from "../Popups/RatingAndReview";
import Thankyou from "../Popups/ThankYou";
export default function ViewBooking({ backhandler, order }) {
  const [f1, setF1] = useState(0);
  const [f2, setF2] = useState(null);
  const [f3, setF3] = useState(null);
  const [f4, setF4] = useState(null);
  const [f5, setF5] = useState(null);

  const [mobileView, setMobileView] = useState(false);
  const [details, setDetails] = useState([]);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [reschedule, setReschedule] = useState(false);
  const [feedQue, setFeedQuestions] = useState(false);
  const [ratingr, setRatingr] = useState(false);
  const [thankYouShow, setThankYouShow] = useState(false);

  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
    getAllDetail();
  }, []);

  const getAllDetail = () => {
    getOrdersDetails(localStorage.getItem("token"), order)
      .then((r) => setDetails(r.data.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Row className={styles.ViewBookingRow}>
        <Col xs={2} md={2} lg={2} xl={2}>
          <BiArrowBack className={styles.BackArrow} onClick={backhandler} />
        </Col>
        <Col xs={10} md={10} lg={10} xl={10}>
          <p className={styles.MainTitle}>
            {details.length > 0
              ? details[0].order_brand + "-" + details[0].order_category
              : null}
          </p>
        </Col>
      </Row>

      <Row>
        <PartnerStatusProgress
          data={details.length > 0 ? details[0].order_user_timeline_detail : []}
          process={false}
          processname={
            details.length > 0 ? details[0].order_user_timeline[0].out_text : ""
          }
        />
      </Row>

      <CancelOrder
        show={cancelOrder}
        onHide={() => setCancelOrder(false)}
        order={order}
        backhandler={backhandler}
      />
      <Reschedule
        show={reschedule}
        onHide={() => {
          getAllDetail();
          setReschedule(false);
        }}
        order={order}
      />

      {/* in the last reviw */}
      <FeedbackQuestions
        show={feedQue}
        onHide={() => setFeedQuestions(false)}
      />
      <RatingAndReview
        show={ratingr}
        onHide={() => setRatingr(false)}
        order={order}
      />
      <Thankyou show={thankYouShow} onHide={() => setThankYouShow(false)} />

      {f1 == 0 && f2 == null && f3 == null && f4 == null && f5 == null ? (
        <Col xs={12} md={12} lg={12} xl={12}>
          <Row>
            <Col xs={12} md={6} lg={6} xl={6}>
              <BookingDetails
                cancelorderclick={() => setCancelOrder(true)}
                rescheduleclick={() => setReschedule(true)}
                orderkey={order}
                orderid={details.length > 0 ? details[0].order_id : null}
                device={details.length > 0 ? details[0].order_category : null}
                issue={
                  details.length > 0
                    ? details[0].order_issues != null
                      ? details[0].order_issues.length > 0
                        ? details[0].order_issues.map((v) => (
                            <>
                              {v.issue_name}
                              <br />
                            </>
                          ))
                        : null
                      : null
                    : null
                }
                datetime={
                  details.length > 0
                    ? details[0].order_appointments[
                        details[0].order_appointments.length > 0
                          ? details[0].order_appointments.length - 1
                          : 0
                      ].appointment_date +
                      "," +
                      details[0].order_appointments[
                        details[0].order_appointments.length > 0
                          ? details[0].order_appointments.length - 1
                          : 0
                      ].appointment_timeslot
                    : null
                }
                hidereschedulebuttons={false}
                deliveryAndJobcard={true}
                hideoutcallsupport={false}
                showinnercallsupport={false}
                raiseticketshow={true}
                callsupport={
                  details.length > 0
                    ? "tel:+91" +
                      Object.values(details[0].order_options_1[0])[1]
                    : null
                }
              />
            </Col>
            {mobileView ? (
              <Col xs={12} md={6} lg={6} xl={6}>
                <MobileProgress f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} />
              </Col>
            ) : null}
            <Col xs={12} md={6} lg={6} xl={6}>
              <NeedHelp
                data={details.length > 0 ? details[0].order_user_need_help : []}
              />
            </Col>

            <Quotation rejectaccept={true} showpaybutton={false} hide />
            <PartnerDetails off={true} otphide={false} otp="2121" />
          </Row>
          {mobileView ? (
            <Col xs={12} className="d-flex justify-content-center  pt-3 pb-5">
              <PrimaryButton title="Call Us For Support" />
            </Col>
          ) : null}
        </Col>
      ) : null}

      {(f1 == 1 && f2 == 0 && f3 == null && f4 == null && f5 == null) ||
      (f1 == 1 &&
        f2 == 1 &&
        (f3 == 0 || f3 == 2) &&
        f4 == null &&
        f5 == null) ? (
        <Col xs={12} md={12} lg={12} xl={12}>
          <Row>
            <Col xs={12} md={6} lg={6} xl={6}>
              <BookingDetails
                hidereschedulebuttons={false}
                deliveryAndJobcard={false}
                hideoutcallsupport={true}
                showinnercallsupport={false}
                raiseticketshow={false}
              />
            </Col>
            <Col xs={12} md={6} lg={6} xl={6}>
              <PartnerDetails off={false} otphide={false} otp="2121" />
            </Col>
            {mobileView ? (
              <Col xs={12} md={6} lg={6} xl={6}>
                <MobileProgress f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} />
              </Col>
            ) : null}
            <Col xs={12} md={6} lg={6} xl={6}>
              <NeedHelp />
            </Col>
            <Col xs={12} md={6} lg={6} xl={6}>
              <Quotation rejectaccept={true} showpaybutton={false} hide />
            </Col>
          </Row>
          {mobileView ? (
            <Col xs={12} className="d-flex justify-content-center pt-3 pb-5">
              <PrimaryButton title="Call Us For Support" />
            </Col>
          ) : null}
        </Col>
      ) : null}

      {(f1 == 1 && f2 == 1 && f3 == 1 && f4 == 0 && f5 == null) ||
      (f1 == 1 && f2 == 1 && f3 == 1 && f4 == null && f5 == null) ? (
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <BookingDetails
              hidereschedulebuttons={true}
              deliveryAndJobcard={false}
              hideoutcallsupport={true}
              showinnercallsupport={true}
              raiseticketshow={false}
            />
            {mobileView ? null : <NeedHelp />}
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            {mobileView ? (
              <div>
                <PartnerDetails
                  off={false}
                  otphide={true}
                  otp="2121"
                  callpartnerhide={true}
                />
                {mobileView && <DeliveryJobCard />}
                <Quotation
                  rejectaccept={f4 == 0 ? false : true}
                  showpaybutton={f4 == 0 && true}
                />
                {mobileView ? (
                  <Col xs={12} md={6} lg={6} xl={6}>
                    <MobileProgress f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} />
                  </Col>
                ) : null}
                <NeedHelp />
              </div>
            ) : (
              <div>
                <Quotation
                  rejectaccept={f4 == 0 ? false : true}
                  showpaybutton={f4 == 0 && true}
                />
                <PartnerDetails off={false} otphide={false} otp="2121" />
              </div>
            )}
          </Col>
          {mobileView ? (
            <Col xs={12} className="d-flex justify-content-center  pt-3 pb-5">
              <PrimaryButton title="Call Us For Support" />
            </Col>
          ) : null}
        </Row>
      ) : null}
      {f1 == 1 && f2 == 1 && f3 == 1 && f4 == 1 && f5 == null ? (
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <BookingDetails
              hidereschedulebuttons={true}
              deliveryAndJobcard={false}
              hideoutcallsupport={true}
              showinnercallsupport={true}
              raiseticketshow={true}
            />
            {mobileView ? null : <NeedHelp />}
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <PartnerDetails
              off={false}
              otphide={true}
              otp="2121"
              callpartnerhide={true}
            />
            <Ratingbar />
            <FeedbackQue />
            {mobileView ? <NeedHelp /> : null}
          </Col>
          {mobileView ? (
            <Col xs={12} className="d-flex justify-content-center  pt-3 pb-5">
              <PrimaryButton title="Call Us For Support" />
            </Col>
          ) : null}
        </Row>
      ) : null}
    </div>
  );
}
