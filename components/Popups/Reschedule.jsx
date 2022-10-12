import { Alert, Col, Modal, Row } from "react-bootstrap";
import NavigationHandler from "./NavigationHandler";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/components/Popups/Checkout.module.css";
import { useState } from "react";
import { enddate, getDatesInRange, startdate } from "utils/calenderPackage";
import { useEffect } from "react";
import { TimeSloatAPIs } from "api/mixApi";
import { calenderslidersettings } from "utils/sliderSettings";
import { daysforcal, monthsforcal, timesofsloats } from "utils/data";
import PrimaryButton from "../common/PrimaryButton";
import { postOrderReschedule } from "api/ordersAPI";

export default function Reschedule({ show, onHide, order }) {
  const [showDateError, setShowDateError] = useState(false);
  const [datelist, setDateList] = useState(getDatesInRange(startdate, enddate));
  const [showTimeError, setShowTimeError] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);
  const [timesloatsata, setTimeSloatData] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [completedSloat, setCompletedSloat] = useState([]);

  useEffect(() => {
    setCompletedSloat(TimeIsOver(timesloatsata, timesofsloats));
  }, [timesloatsata]);

  const TimeIsOver = (timesloatsata, timesofsloats) => {
    let overdata = [];
    let newDate = new Date();
    let hours = newDate.getHours();

    for (let t = 0; t < timesloatsata.length; t++) {
      for (let l = 0; l < timesofsloats.length; l++) {
        if (timesloatsata[t].title == timesofsloats[l].time) {
          if (hours >= timesofsloats[l].over) {
            overdata.push(timesloatsata[t].title);
          }
        }
      }
    }
    return overdata;
  };

  const timeselectedHandler = (index) => {
    setShowTimeError(false);
    setSelectedTime(index);
  };

  useEffect(() => {
    TimeSloatAPIs()
      .then((time_sloat) => {
        if (time_sloat.data.success) {
          setTimeSloatData(time_sloat.data.data);
        } else {
          console.log("time sloat says" + time_sloat.data.message);
        }
      })
      .catch((e) => console.log("time sloat api" + e));
  }, []);

  const ConfirmProcessed = () => {
    selectedTime === null ? setShowTimeError(true) : setShowTimeError(false);
    selectedDate === null ? setShowDateError(true) : setShowDateError(false);
    let setup_day =
      datelist[selectedDate].dates < 10
        ? "0" + datelist[selectedDate].dates
        : datelist[selectedDate].dates;
    let generated_date =
      new Date().getFullYear() +
      "-" +
      (datelist[selectedDate].month < 10
        ? "0" + datelist[selectedDate].month
        : datelist[selectedDate].month) +
      "-" +
      setup_day;
    let selected_time = timesloatsata[selectedTime].id;

    if (!(selectedTime === null) && !(selectedDate === null)) {
      postOrderReschedule(localStorage.getItem("token"), {
        order: order,
        dateOrder: generated_date,
        timeslot: selected_time,
      })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            onHide();
          } else {
            alert(response.data.message);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="LoginPopup"
    >
      <Modal.Body
        className="p-2 p-xl-5 p-lg-5 p-md-5"
        style={{ background: "#F5F6FA", borderRadius: "10px" }}
      >
        <NavigationHandler
          backhandler={() => onHide()}
          navtitle={"Reschedule"}
          unique
        />
        <Row>
          <Col xs={12} md={12} lg={12} xl={12}>
            {showDateError && (
              <Alert variant={"danger"}>Please Select Date !</Alert>
            )}
            {showTimeError && (
              <Alert variant={"danger"}>Please Select Time !</Alert>
            )}
          </Col>

          <Col xs={12} md={12} lg={12} xl={12}>
            <h5 className={styles.SubtitleText}>Select Date</h5>
          </Col>

          {/* date calander */}
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.CalenderWrraper}
            style={{ padding: "0 " }}
          >
            <Slider {...calenderslidersettings} className={"CalendarSlider"}>
              {datelist.map((v, i) => (
                <div
                  className={`${styles.CardOfdate} ${
                    selectedDate === i && styles.SelectedCardOfDate
                  }`}
                  key={i}
                  onClick={() => {
                    i == 0 ? setSelectedTime(null) : null;
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

          {/* time sloat  */}
          <Col xs={12} md={12} lg={12} xl={12}>
            <h5 className={styles.SubtitleText}>Select Time</h5>
            <Row
              className={styles.SelectionTimeRow}
              style={{ padding: "0 6rem" }}
            >
              {timesloatsata.map((v, i) => (
                <Col xs={6} xl={4} key={i} className={`${styles.TimeCardCol}`}>
                  <div
                    onClick={() =>
                      !new Date().getDate() == selectedDate &&
                      completedSloat.includes(v.title)
                        ? null
                        : timeselectedHandler(i)
                    }
                    className={`${styles.TimeCard} ${
                      selectedTime === i && styles.SelectedCard
                    }`}
                    style={
                      !new Date().getDate() == selectedDate &&
                      completedSloat.includes(v.title)
                        ? {
                            backgroundColor: "grey",
                            cursor: "not-allowed",
                            opacity: "0.8",
                            userSelect: "none",
                          }
                        : null
                    }
                  >
                    <p className={styles.TimeText}>
                      {v.title.replace("TO", "-")}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.ButtonCol}>
            <PrimaryButton
              clickHandler={() => ConfirmProcessed()}
              title={"Reschedule"}
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
