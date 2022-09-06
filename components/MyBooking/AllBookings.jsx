import { Col, Image, Row } from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import { leftMenuName } from "utils/bookingSideMenu";
import styles from "@/styles/components/MyBooking/AllBooking.module.css";
import BookingCard from "./BookingCard";
import { bookingData } from "utils/bookingData";
import AlternatePopups from "../Popups/AlternatePopups";
import { useState } from "react";
import AddEmail from "../Popups/AddEMail";
import CancelOrder from "../Popups/CancelOrder";


function AllBookings() {
  const [alternatePopup, setAlternatePopup] = useState(false);
  const [addEmail, setaddEmail] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);
  return (
    <section className={styles.allBookingContainer}>
      <AlternatePopups
        show={alternatePopup}
        onHide={() => setAlternatePopup(false)}
      />
      <AddEmail show={addEmail} onHide={() => setaddEmail(false)} />
      {/* cancel order */}
      <CancelOrder show={cancelOrder} onHide={() => setCancelOrder(false)} />
      <Row className={styles.allBookingRow}>
        <Col xl={9}>
          <Row>

            {bookingData.map((bookings) => {
              return (
                <Col key={bookings.orderNumber} xl={6}>
                  <BookingCard
                    orderNumber={bookings.orderNumber}
                    partnerStatusAssigned={bookings.partnerStatusAssigned}
                    partnerImage={bookings.partnerImage}
                    partnerName={bookings.partnerName}
                    bookingDateAndTime={bookings.bookingDateAndTime}
                    issueDevice={bookings.issueDevice}
                    issueType={bookings.issueType}
                    partnerAssigningStatus={bookings.partnerAssigningOTP}
                    OTP={bookings.OTP}
                  />
                </Col>
              );
            })}

            <Col xl={6}>{/* <BookingCard /> */}</Col>
          </Row>
        </Col>
        <Col xl={3} className={styles.allBookingsLeftCont}>
          <LeftMenu
            profileImage={"/assets/images/bookings-page-profile.png"}
            profileName={"Alpha Omega"}
            profileNumber={"+91 9000 00000"}
            menus={leftMenuName}
            addemailaction={() => setaddEmail(true)}
            alternativenumberaction={() => setAlternatePopup(true)}
            logout={() => {}}
          />
          {/* profileImage, profileName, profileNumber, menus */}
        </Col>
      </Row>
    </section>
  );
}

export default AllBookings;
