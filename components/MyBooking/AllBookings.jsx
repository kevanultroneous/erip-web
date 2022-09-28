import { Col, Image, Row } from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import { leftMenuName } from "utils/bookingSideMenu";
import styles from "@/styles/components/MyBooking/AllBooking.module.css";
import BookingCard from "./BookingCard";
import { bookingData } from "utils/bookingData";
import AlternatePopups from "../Popups/AlternatePopups";
import { useEffect, useState } from "react";
import AddEmail from "../Popups/AddEMail";
import CancelOrder from "../Popups/CancelOrder";
import ViewBooking from "./ViewBooking";
import Support from "./Support";
import { useDispatch, useSelector } from "react-redux";
import { callFetchProfile } from "redux/actions/profileActions/profileActions";
import { getOrders } from "api/ordersAPI";

function AllBookings() {
  const [alternatePopup, setAlternatePopup] = useState(false);
  const [addEmail, setaddEmail] = useState(false);
  const [viewdetail, setViewDetail] = useState(false);
  const [viewSupport, setViewSupport] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [orderhash, setOrderHash] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(callFetchProfile(localStorage.getItem("token")));
    allOrders();
  }, []);

  const allOrders = () => {
    getOrders(localStorage.getItem("token"))
      .then((r) => {
        if (r.data.success) {
          setOrderData(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  };
  const profileselector = useSelector((selector) => selector.profile.profile);

  const profiledetail = profileselector
    ? profileselector.data
      ? {
          name: profileselector.data[0].user_fullname,
          number: profileselector.data[0].user_mobile,
          email: profileselector.data[0].user_email,
          altnum: profileselector.data[0].user_alt_data,
        }
      : null
    : null;
  return (
    <section className={styles.allBookingContainer}>
      <AlternatePopups
        show={alternatePopup}
        onHide={() => setAlternatePopup(false)}
      />
      <AddEmail show={addEmail} onHide={() => setaddEmail(false)} />
      {/* cancel order */}
      <Row className={styles.allBookingRow}>
        <Col xs={12} md={12} lg={9} xl={9}>
          {viewSupport && <Support backaction={() => setViewSupport(false)} />}
          {viewdetail ? (
            <ViewBooking
              backhandler={() => {
                setViewDetail(false);
                allOrders();
              }}
              order={orderhash}
            />
          ) : null}
          {!viewdetail && !viewSupport && (
            <Row className={styles.BookingContainer}>
              <Col xs={12} md={12} lg={12} xl={12}>
                <h4 className={styles.BookingHeading}>My Bookings</h4>
              </Col>
              {orderData
                ? orderData.length > 0
                  ? orderData.map((bookings) => {
                      return (
                        <Col key={bookings.order_id} xl={6} md={12}>
                          <BookingCard
                            // callsupport={() =>
                            //   alert(
                            //
                            //   )
                            // }
                            callsupport={
                              "tel:+91" +
                              Object.values(bookings.order_options_1[0])[1]
                            }
                            viewdetails={() => {
                              setViewDetail(true);
                              setOrderHash(bookings.order_id_encrypted);
                            }}
                            orderNumber={bookings.order_id}
                            bookingDateAndTime={
                              bookings.order_appointments[0].appointment_date +
                              " , " +
                              bookings.order_appointments[0]
                                .appointment_timeslot
                            }
                            // partnerStatusAssigned={bookings.partnerStatusAssigned}
                            // partnerImage={bookings.partnerImage}
                            // partnerName={bookings.partnerName}
                            // bookingDateAndTime={bookings.bookingDateAndTime}
                            issueDevice={bookings.order_category}
                            issueType={
                              bookings.order_issues != null
                                ? bookings.order_issues.length > 0
                                  ? bookings.order_issues.map((v) => (
                                      <>
                                        {v.issue_name}
                                        <br />
                                      </>
                                    ))
                                  : null
                                : null
                            }
                            // partnerAssigningStatus={bookings.partnerAssigningOTP}
                            // OTP={bookings.OTP}
                          />
                        </Col>
                      );
                    })
                  : null
                : null}
            </Row>
          )}
        </Col>
        <Col xl={3} className={styles.allBookingsLeftCont}>
          <LeftMenu
            profileImage={"/assets/images/bookings-page-profile.png"}
            profileName={profiledetail !== null && profiledetail.name}
            profileNumber={
              profiledetail !== null && "+91" + profiledetail.number
            }
            menus={leftMenuName}
            addemailaction={() => setaddEmail(true)}
            alternativenumberaction={() => setAlternatePopup(true)}
            logout={() => {}}
            altnum={
              profiledetail !== null &&
              "+91" + profiledetail.altnum[0].mobile_number
            }
            altemail={profiledetail !== null && profiledetail.email}
          />
        </Col>
      </Row>
    </section>
  );
}

export default AllBookings;
