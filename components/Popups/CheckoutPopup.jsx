import styles from "@/styles/components/Popups/Checkout.module.css";
import { useEffect, useRef, useState } from "react";
import { Alert, Col, Image, Modal, Row } from "react-bootstrap";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmRight,
} from "react-icons/hi";
import Slider from "react-slick";
import PrimaryButton from "../common/PrimaryButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { daysforcal, GMAP_API, monthsforcal, statictimelist } from "utils/data";
import { BiArrowBack } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { Circle, Gmaps, InfoWindow, Marker } from "react-gmaps";

export default function CheckoutPopup({ show, onHide }) {
  const process = ["Schedule Appointment", "Select Address", "Make Payment"];
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDateError, setShowDateError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);
  const [processStatus, setProcessStatus] = useState([0]);
  const [secondProcessShow, setSecondProcessShow] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");

  useEffect(() => {
    getLocation(selectedAddress.formatted_address);
  }, [selectedAddress]);

  const ConfirmProcessed = () => {
    selectedTime === null ? setShowTimeError(true) : setShowTimeError(false);
    selectedDate === null ? setShowDateError(true) : setShowDateError(false);
    if (!(selectedTime === null) && !(selectedDate === null)) {
      setSecondProcessShow(true);
    }
  };

  //current location
  const coords = {
    lat: currentLocation.latitude,
    lng: currentLocation.longitude,
  };

  const params = { v: "3.exp", key: GMAP_API };

  function onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
  }

  function onDragEnd(e) {
    console.log("onDragEnd", e);
  }

  function onCloseClick() {
    console.log("onCloseClick");
  }

  function onClick(e) {
    console.log("onClick", e);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setCurrentLocation(position.coords);
    reverseMap(position.coords.latitude, position.coords.longitude);
  }
  function reverseMap(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = (geocoder = new google.maps.Geocoder());
    geocoder.geocode({ latLng: latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        results.map((v) => console.log(v));
        if (results[1]) {
          setSelectedAddress(results[1].formatted_address);
        }
      }
    });
  }
  var getLocation = function (address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();

        setCurrentLocation({ latitude, longitude });
      }
    });
  };
  //  observer for close or open modal
  useEffect(() => {
    if (!show) {
      setSelectedDate(null);
      setSelectedTime(null);
      setShowDateError(false);
      setShowTimeError(false);
    }
  }, [show]);

  // slider settings

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

  // ================================== Make a calander for a week ================================

  // ---------- get a nextweek with year month and date ------------
  function nextweek() {
    var today = new Date();
    var nextweek = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate() + 6
    );
    return nextweek;
  }

  // ----------------- dynamic slogan  [ th , rd , st ,nd and more ] -------------------
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
  // ---------------- find a dates between 2 date (return array) ------------------
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
  // --------------------------------- today (date,month,year,day) datas ---------------------------------
  let today = new Date();
  let todayDetail = {
    day: today.getDay(),
    date: today.getDate(),
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  };
  // --------------------------------- nextweekdaydetail -------------------------------------
  let nextweekdaydetail = {
    day: nextweek().getDay() - 2,
    date: nextweek().getDate(),
    year: nextweek().getFullYear(),
    month: nextweek().getMonth(),
  };
  // --------------------------------- convert into fulllDate ---------------------------------
  const startdate = new Date(
    `${todayDetail.year}-${todayDetail.month}-${todayDetail.date}`
  );
  const enddate = new Date(
    `${nextweekdaydetail.year}-${nextweekdaydetail.month}-${nextweekdaydetail.date}`
  );
  // --------------------------------- make a state for full calender ---------------------------------
  const [datelist, setDateList] = useState(getDatesInRange(startdate, enddate));
  // =====================================================================================

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={secondProcessShow ? "lg" : "xl"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CheckoutPopup"
    >
      <Modal.Body
        className={`${styles.ModalBody} ${
          secondProcessShow && styles.LocationModalBody
        }`}
      >
        {!secondProcessShow && (
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

            {/*  status of Process  */}
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
                          processStatus.includes(i) &&
                          styles.SelectedProcessName
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

            {/* date calander */}
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

            {/* time sloat  */}
            <Col xs={12} md={12} lg={12} xl={12}>
              <h5 className={styles.SubtitleText}>Select Time</h5>
              <Row className={styles.SelectionTimeRow}>
                {statictimelist.map((v, i) => (
                  <Col
                    xs={6}
                    xl={4}
                    key={i}
                    className={`${styles.TimeCardCol}`}
                  >
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

            {/* button for actions */}
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
        )}

        {/* Address and Location  */}
        {secondProcessShow &&
        (selectedAddress === null || selectedAddress === "") ? (
          <Row className={styles.LocationRow}>
            <Col xs={2} md={2} lg={2} xl={2}>
              <BiArrowBack
                className={styles.LocationBackArrow}
                onClick={() => setSecondProcessShow(false)}
              />
            </Col>
            <Col xs={8} md={8} lg={8} xl={8}>
              <h4 className={styles.LocationText}>Select Location</h4>
            </Col>
            <Col xs={12} md={12} lg={12} xl={12}>
              <div className={styles.LocationHeadLine}>
                <p className={styles.HeadLine}>
                  Select your delivery location to get started
                </p>
              </div>
              <div>
                <PrimaryButton
                  clickHandler={() => getLocation()}
                  title={
                    <>
                      <Image
                        src="/assets/icons/location-icon.svg"
                        alt="location-icon"
                        loading="lazy"
                      />
                      &nbsp;&nbsp; Use my current location
                    </>
                  }
                  buttonStyle={{
                    width: "100%",
                    backgroundColor: "#0E62CB",
                    color: "#fff",
                  }}
                />
                <p className={styles.OrOptionText}>OR</p>
                <div className={styles.SearchInput}>
                  <FiSearch className={styles.SearchIcon} />
                  <ReactGoogleAutocomplete
                    placeholder="Search street, locality, etc"
                    apiKey={GMAP_API}
                    onPlaceSelected={(place) => {
                      setSelectedAddress(place);
                    }}
                    defaultValue={selectedAddress}
                    options={{
                      types: ["establishment"],
                      componentRestrictions: { country: "in" },
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          // if location is selected  confirm location
          !(selectedAddress === "" || selectedAddress === null) && (
            <Row className={styles.LocationRow}>
              <Col xs={2} md={2} lg={2} xl={2}>
                <BiArrowBack
                  className={styles.LocationBackArrow}
                  onClick={() => setSecondProcessShow(false)}
                />
              </Col>
              <Col xs={8} md={8} lg={8} xl={8}>
                <h4 className={styles.LocationText}>Confirm Location</h4>
              </Col>
              <Col xs={12} md={6} lg={6} xl={6}>
                <ReactGoogleAutocomplete
                  placeholder="Search street, locality, etc"
                  apiKey={GMAP_API}
                  onPlaceSelected={(place) => {
                    setSelectedAddress(place);
                  }}
                  defaultValue={selectedAddress}
                  options={{
                    types: ["establishment"],
                    componentRestrictions: { country: "in" },
                  }}
                />
              </Col>
              <Col xs={12} md={6} lg={6} xl={6}>
                <Gmaps
                  height={"400px"}
                  lat={coords.lat}
                  lng={coords.lng}
                  zoom={12}
                  loadingMessage={"Be happy"}
                  params={params}
                  onMapCreated={() => onMapCreated}
                >
                  <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                    draggable={true}
                    onDragEnd={() => onDragEnd}
                  />
                  <InfoWindow
                    lat={coords.lat}
                    lng={coords.lng}
                    content={`${selectedAddress.formatted_address}`}
                    onCloseClick={() => onCloseClick}
                  />
                </Gmaps>
              </Col>
            </Row>
          )
        )}
      </Modal.Body>
    </Modal>
  );
}
