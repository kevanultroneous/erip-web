import { Col, Image, Row } from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import { leftMenuName } from "utils/bookingSideMenu";
import styles from "@/styles/components/MyBooking/AllBooking.module.css";
import BookingCard from "./BookingCard";

function AllBookings() {
  return (
    <section className={styles.allBookingContainer}>
      <Row className={styles.allBookingRow}>
        <Col xl={9}>
          <Row>
            <Col xl={6}>
              <BookingCard />
            </Col>
            <Col xl={6}>
              <BookingCard />
            </Col>
            <Col xl={6}>
              <BookingCard />
            </Col>
            <Col xl={6}>
              <BookingCard />
            </Col>
          </Row>
        </Col>
        <Col xl={3} className={styles.allBookingsLeftCont}>
          <LeftMenu
            profileImage={"/assets/images/bookings-page-profile.png"}
            profileName={"Alpha Omega"}
            profileNumber={"+91 9000 00000"}
            menus={leftMenuName}
          />
          {/* profileImage, profileName, profileNumber, menus */}
        </Col>
      </Row>
    </section>
  );
}

export default AllBookings;
