import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/common/BookingCardComponent.module.css";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

const BookingCardComponent = () => {

  // static test data
  const arr = [
    {
      id: "1234",
      status: "Assigned professional",
      date: "20th April",
      time: "9-11 am",
      device: "Air conditioner",
      condition: "Less cooling",
      supportStatus: "Call support",
      help: "We are assigning a professional to you",
    },
    {
      id: "1234",
      status: "Assigned professional",
      date: "20th April",
      time: "9-11 am",
      device: "Air conditioner",
      condition: "Less cooling",
      supportStatus: "Call support",
      help: "We are assigning a professional to you",
    },
    {
      id: "1234",
      status: "Assigned professional",
      date: "20th April",
      time: "9-11 am",
      device: "Air conditioner",
      condition: "Less cooling",
      supportStatus: "Call support",
      help: "We are assigning a professional to you",
    },
  ];

  return (
    <Row className={styles.BookingCardMain}>

      {/* call test data  */}
      {arr.map((el, ind) => (
        <Col
          xs={12}
          sm={6}
          md={6}
          lg={4}
          key={ind}
          className={styles.BookingCard}
        >
          <div className={styles.BookingCardParent}>
            <Row className={styles.BookingCardHead}>
              <Col xs={5} sm={5} className={styles.BookingButtonParent}>
                <p> Order id: #1234 </p>
              </Col>
              <Col xs={7} sm={7} className={styles.BookingButtonParent}>
                <button className={styles.BookingButton}>
                  Assigned professional
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={5} sm={4} className={styles.BookingDetails}>
                <div>
                  <Image
                    fluid
                    src={"assets/images/Booking.svg"}
                    alt={arr[0].id}
                  />
                </div>
              </Col>
              <Col xs={7} sm={8} className={styles.BookingDetails}>
                <p>
                  {arr[0].date} {arr[0].time}
                </p>
                <p>{arr[0].device}</p>
                <p>{arr[0].condition}</p>
              </Col>
            </Row>
            <p className={styles.BookingHelp}>{arr[0].help}</p>
            <Row>
              <Col className={styles.ButtonContainer} xs={6}>
                <PrimaryButton
                  buttonStyle={{ width: "100%" }}
                  title="View Details"
                />
              </Col>
              <Col className={styles.ButtonContainer} xs={6}>
                <PrimaryButton
                  buttonStyle={{ width: "100%" }}
                  title={arr[0].supportStatus}
                />
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BookingCardComponent;
