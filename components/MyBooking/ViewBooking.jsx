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
export default function ViewBooking() {
  const [f1, setF1] = useState(1);
  const [f2, setF2] = useState(1);
  const [f3, setF3] = useState(1);
  const [f4, setF4] = useState(1);
  const [f5, setF5] = useState(null);

  return (
    <Row className={styles.ViewBookingRow}>
      <Col xs={2} md={2} lg={2} xl={2}>
        <BiArrowBack className={styles.BackArrow} />
      </Col>
      <Col xs={10} md={10} lg={10} xl={10}>
        <p className={styles.MainTitle}>LG-Air Conditioner</p>
      </Col>

      <PartnerStatusProgress f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} />

      {f1 == 0 ? (
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
            <Col xs={12} md={6} lg={6} xl={6}>
              <NeedHelp />
            </Col>
            <Quotation rejectaccept={true} showpaybutton={false} hide />
            <PartnerDetails off={true} otphide={false} otp="2121" />
          </Row>
        </Col>
      ) : (f1 == 1 && f2 == 0) ||
        (f1 == 1 && f2 == 1 && (f3 == 0 || f3 == 2)) ? (
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
            <Col xs={12} md={6} lg={6} xl={6}>
              <NeedHelp />
            </Col>
            <Col xs={12} md={6} lg={6} xl={6}>
              <Quotation rejectaccept={true} showpaybutton={false} hide />
            </Col>
          </Row>
        </Col>
      ) : f1 == 1 && f2 == 1 && f3 == 1 && f4 == 0 ? (
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <BookingDetails
              hidereschedulebuttons={true}
              deliveryAndJobcard={true}
              hideoutcallsupport={true}
              showinnercallsupport={true}
              raiseticketshow={false}
            />
            <NeedHelp />
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <Quotation
              rejectaccept={f4 == 0 ? false : true}
              showpaybutton={f4 == 0 && true}
            />
            <PartnerDetails off={false} otphide={false} otp="2121" />
          </Col>
        </Row>
      ) : f1 == 1 && f2 == 1 && f3 == 1 && f4 == 1 ? (
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <BookingDetails
              hidereschedulebuttons={true}
              deliveryAndJobcard={false}
              hideoutcallsupport={true}
              showinnercallsupport={true}
              raiseticketshow={true}
            />
            <NeedHelp />
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <PartnerDetails off={false} otphide={true} otp="2121" />
            <FeedbackQue />
          </Col>
        </Row>
      ) : null}
    </Row>
  );
}
