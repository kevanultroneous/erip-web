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
export default function ViewBooking() {
  const checkProcess = [
    {
      f1: 0,
    },
    {
      f2: null,
    },
    {
      f3: null,
    },
    {
      f4: null,
    },
    {
      f5: null,
    },
  ];
  const [status, setStatus] = useState(checkProcess);
  return (
    <Row className={styles.ViewBookingRow}>
      <Col xs={2} md={2} lg={2} xl={2}>
        <BiArrowBack className={styles.BackArrow} />
      </Col>
      <Col xs={10} md={10} lg={10} xl={10}>
        <p className={styles.MainTitle}>LG-Air Conditioner</p>
      </Col>

      <PartnerStatusProgress
        f1={status[0].f1}
        f2={status[1].f2}
        f3={status[2].f3}
        f4={status[3].f4}
        f5={status[4].f5}
      />

      <Col xs={12} md={12} lg={12} xl={12}>
        <Row>
          <BookingDetails
            hidereschedulebuttons={false}
            deliveryAndJobcard={true}
            hideoutcallsupport={false}
            showinnercallsupport={false}
          />
          <Quotation rejectaccept={true} showpaybutton={false} hide />
          <NeedHelp />
          <PartnerDetails off={true} otphide={false} otp="2121" />
        </Row>
      </Col>
    </Row>
  );
}
