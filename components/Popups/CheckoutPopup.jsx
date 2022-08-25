import styles from "@/styles/components/Popups/Checkout.module.css";
import { useEffect, useState } from "react";
import { Alert, Col, Modal, Row } from "react-bootstrap";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmRight,
} from "react-icons/hi";
import Slider from "react-slick";
import PrimaryButton from "../common/PrimaryButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { daysforcal, monthsforcal } from "utils/data";
export default function CheckoutPopup({ show, onHide }) {
  const timelist = [
    "9 am - 11 am",
    "11 am - 01 pm",
    "01 pm - 03 pm",
    "03 pm - 05 pm",
    "05 pm - 07 pm",
    "07 pm - 09 pm",
  ];
  const calender = [
    {
      day: "Friday",
      date: "24th",
      slogan: "today",
    },
    {
      day: "Saturday",
      date: "25th",
      slogan: "today",
    },
    {
      day: "Sunday",
      date: "26th",
      slogan: "June",
    },
    {
      day: "Monday",
      date: "27th",
      slogan: "June",
    },
    {
      day: "Friday",
      date: "24th",
      slogan: "today",
    },
    {
      day: "Saturday",
      date: "25th",
      slogan: "today",
    },
    {
      day: "Sunday",
      date: "26th",
      slogan: "June",
    },
    {
      day: "Monday",
      date: "27th",
      slogan: "June",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <HiOutlineArrowSmRight color="#000" />,
    prevArrow: <HiOutlineArrowSmLeft color="#000" />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const process = ["Schedule Appointment", "Select Address", "Make Payment"];

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDateError, setShowDateError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);
  const [processStatus, setProcessStatus] = useState([0]);

  const ConfirmProcessed = () => {
    selectedTime === null ? setShowTimeError(true) : setShowTimeError(false);
    selectedDate === null ? setShowDateError(true) : setShowDateError(false);
  };

  useEffect(() => {
    if (!show) {
      setSelectedTime(null);
      setSelectedTime(null);
      setShowDateError(false);
      setShowTimeError(false);
    }
  }, [show]);

  function nextweek() {
    var today = new Date();
    var nextweek = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate() + 6
    );
    return nextweek;
  }
  function ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return "st";
    }
    if (j == 2 && k != 12) {
      return "nd";
    }
    if (j == 3 && k != 13) {
      return "rd";
    }
    return "th";
  }
  function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
      dates.push({
        days: date.getDay(),
        dates: date.getDate(),
        month: date.getMonth(),
        slogan: ordinal_suffix_of(date.getDate()),
      });
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }

  let today = new Date();
  let todayDetail = {
    day: today.getDay(),
    date: today.getDate(),
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  };

  let nextweekdaydetail = {
    day: nextweek().getDay() - 2,
    date: nextweek().getDate(),
    year: nextweek().getFullYear(),
    month: nextweek().getMonth(),
  };
  const startdate = new Date(
    `${todayDetail.year}-${todayDetail.month}-${todayDetail.date}`
  );
  const enddate = new Date(
    `${nextweekdaydetail.year}-${nextweekdaydetail.month}-${nextweekdaydetail.date}`
  );
  const [datelist, setDateList] = useState(getDatesInRange(startdate, enddate));

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CheckoutPopup"
    >
      <Modal.Body className={styles.ModalBody}>
        <Row>
          <Col xs={2} md={2} lg={2} xl={2}>
            <HiOutlineArrowNarrowLeft
              className={styles.BackArrow}
              onClick={onHide}
            />
          </Col>
          <Col xs={8} md={8} lg={8} xl={8}>
            <h4 className={styles.CheckoutText}>Checkout</h4>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            {showDateError && (
              <Alert variant={"danger"}>Plese Select Date !</Alert>
            )}
            {showTimeError && (
              <Alert variant={"danger"}>Plese Select Time !</Alert>
            )}
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.ProcessCol}>
            <div className={styles.Process}>
              {process.map((v, i) => (
                <>
                  <div className={styles.ProcessGroup} key={i}>
                    <span
                      className={`${styles.ProcessNumber} ${
                        processStatus.includes(i) &&
                        styles.SelectedProcessNumber
                      }`}
                    >
                      {i + 1}
                    </span>
                    <p
                      className={`${styles.ProcessName} ${
                        processStatus.includes(i) && styles.SelectedProcessName
                      }`}
                    >
                      {v}
                    </p>
                  </div>
                  {i !== 2 && <hr className={styles.ProcessLines} />}
                </>
              ))}
            </div>
          </Col>
          <h6 className={styles.MobileProcessStatus}>
            {process[processStatus.indexOf(processStatus.length - 1)]}
          </h6>
          <Col xs={12} md={12} lg={12} xl={12}>
            <h5 className={styles.SubtitleText}>Select Date</h5>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.CalenderWrraper}
          >
            <Slider {...settings} className={"CalendarSlider"}>
              {datelist.map((v, i) => (
                <div
                  className={`${styles.CardOfdate} ${
                    selectedDate === i && styles.SelectedCardOfDate
                  }`}
                  key={i}
                  onClick={() => {
                    setShowDateError(false);
                    setSelectedDate(i);
                  }}
                >
                  <div className={styles.Day}>{daysforcal[v.days]}</div>
                  <div className={styles.Date}>{v.dates + v.slogan}</div>
                  <div className={styles.Slogan}>{monthsforcal[v.month]}</div>
                </div>
              ))}
            </Slider>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <h5 className={styles.SubtitleText}>Select Time</h5>
            <Row className={styles.SelectionTimeRow}>
              {timelist.map((v, i) => (
                <Col xs={6} xl={4} key={i} className={`${styles.TimeCardCol}`}>
                  <div
                    onClick={() => {
                      setShowTimeError(false);
                      setSelectedTime(i);
                    }}
                    className={`${styles.TimeCard} ${
                      selectedTime === i && styles.SelectedCard
                    }`}
                  >
                    <p className={styles.TimeText}>{v}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.ButtonCol}>
            <PrimaryButton
              clickHandler={() => ConfirmProcessed()}
              title={"Confirm & Proceed"}
              buttonStyle={{
                width: "50%",
                backgroundColor: "#0E62CB",
                color: "#fff",
              }}
              customClass={styles.ButtonwidthMobile}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
