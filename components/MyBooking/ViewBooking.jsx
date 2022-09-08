import { Accordion, Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/ProcessStatus.module.css";
import { BiArrowBack } from "react-icons/bi";
import Container from "../common/Container";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PrimaryButton from "../common/PrimaryButton";
import PartnerStatusProgress from "./PartnerStatusProgress";
import BookingDetails from "./BookingDetails";
import NeedHelp from "./NeedHelp";
import PartnerDetails from "./PartnerDetails";
import Quotation from "./Quotation";
import { useState } from "react";
import FeedbackQue from "./FeedbackQue";
import Ratingbar from "./Ratingbar";
import { useEffect } from "react";
import MobileProgress from "./MobileProgress";
export default function ViewBooking({ backhandler }) {
  const [f1, setF1] = useState(0);
  const [f2, setF2] = useState(null);
  const [f3, setF3] = useState(null);
  const [f4, setF4] = useState(null);
  const [f5, setF5] = useState(null);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);

  return (
    <div>
      <Row className={styles.ViewBookingRow}>
        <Col xs={2} md={2} lg={2} xl={2}>
          <BiArrowBack className={styles.BackArrow} onClick={backhandler} />
        </Col>
        <Col xs={10} md={10} lg={10} xl={10}>
          <p className={styles.MainTitle}>LG-Air Conditioner</p>
        </Col>
      </Row>
      <Row>
        <PartnerStatusProgress f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} />
      </Row>

      {f1 == 0 && f2 == null && f3 == null && f4 == null && f5 == null ? (
        <Col xs={12} md={12} lg={12} xl={12}>
          <Row>
            <Col xs={12} md={6} lg={6} xl={6}>
              <BookingDetails
                hidereschedulebuttons={false}
                deliveryAndJobcard={false}
                hideoutcallsupport={false}
                showinnercallsupport={false}
                raiseticketshow={false}
              />
            </Col>
            {mobileView ? (
              <Col xs={12} md={6} lg={6} xl={6}>
                <MobileProgress f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} />
              </Col>
            ) : null}
            <Col xs={12} md={6} lg={6} xl={6}>
              <NeedHelp />
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
          {" "}
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
              deliveryAndJobcard={true}
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
