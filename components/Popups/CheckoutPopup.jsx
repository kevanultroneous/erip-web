import styles from "@/styles/components/Popups/Checkout.module.css";
import { useEffect, useState } from "react";
import { Alert, Col, Image, Modal, Row } from "react-bootstrap";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Slider from "react-slick";
import PrimaryButton from "../common/PrimaryButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  daysforcal,
  GMAP_API,
  monthsforcal,
  process,
  statictimelist,
} from "utils/data";
import { BiArrowBack } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { Gmaps, Marker } from "react-gmaps";
import { enddate, getDatesInRange, startdate } from "utils/calenderPackage";
import { calenderslidersettings } from "utils/sliderSettings";

export default function CheckoutPopup({ show, onHide }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDateError, setShowDateError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);
  const [processStatus, setProcessStatus] = useState([0]);
  const [secondProcessShow, setSecondProcessShow] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [confirmLocationSession, setConfirmLocationSession] = useState(false);
  const [finalLocationStep, setFinalLocationStep] = useState(false);
  const [addressType, setAddressType] = useState("Home");

  useEffect(() => {
    getLatandLongByAddress(selectedAddress);
    setConfirmLocationSession(true);
  }, [selectedAddress]);

  const ConfirmProcessed = () => {
    selectedTime === null ? setShowTimeError(true) : setShowTimeError(false);
    selectedDate === null ? setShowDateError(true) : setShowDateError(false);
    if (!(selectedTime === null) && !(selectedDate === null)) {
      setSecondProcessShow(true);
    }
  };

  //current location

  const params = { v: "3.exp", key: GMAP_API };

  function onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
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

  function getLatandLongByAddress(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();

        setCurrentLocation({ latitude, longitude });
      }
    });
  }
  //  observer for close or open modal
  useEffect(() => {
    if (!show) {
      setSelectedDate(null);
      setSelectedTime(null);
      setShowDateError(false);
      setShowTimeError(false);
      setSelectedAddress("");
    }
  }, [show]);

  const [datelist, setDateList] = useState(getDatesInRange(startdate, enddate));

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
        {!secondProcessShow ? (
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
                    {i !== 2 && <hr className={styles.ProcessLines} />}
                  </div>
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
              <Slider {...calenderslidersettings} className={"CalendarSlider"}>
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
        ) : null}

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
                    <div>
                      <Image
                        src="/assets/icons/location-icon.svg"
                        alt="location-icon"
                        loading="lazy"
                      />
                      &nbsp;&nbsp; Use my current location
                    </div>
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
                      setSelectedAddress(place.formatted_address);
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
        ) : !(selectedAddress === "" || selectedAddress === null) &&
          secondProcessShow &&
          confirmLocationSession ? (
          <Row className={styles.LocationRow}>
            <Col xs={2} md={2} lg={2} xl={2}>
              <BiArrowBack
                className={styles.LocationBackArrow}
                onClick={() => {
                  setSecondProcessShow(true);
                  setSelectedAddress("");
                }}
              />
            </Col>
            <Col xs={8} md={8} lg={8} xl={8}>
              <h4 className={styles.LocationText}>Confirm Location</h4>
            </Col>

            <Col
              xs={12}
              md={6}
              lg={6}
              xl={5}
              className={styles.ConfirmLocationSpace}
            >
              <div>
                <div className={styles.ConfirmLocationInput}>
                  <ReactGoogleAutocomplete
                    placeholder="Address"
                    apiKey={GMAP_API}
                    onPlaceSelected={(place) => {
                      setSelectedAddress(place.formatted_address);
                    }}
                    defaultValue={selectedAddress}
                    options={{
                      types: ["establishment"],
                      componentRestrictions: { country: "in" },
                      mapTypeControl: false,
                      streetViewControl: false,
                    }}
                    className={styles.SearchInp}
                  />
                  <label className={styles.ChangeLable}>CHANGE</label>
                </div>
                <div
                  className={styles.CurrentLocationDiv}
                  onClick={() => getLocation()}
                >
                  <Image
                    src="/assets/icons/dark-icon-location.svg"
                    alt="location-icon"
                    loading="lazy"
                  />
                  <span className={styles.DetectDirectLabel}>
                    Use my current location
                  </span>
                </div>
                <div className={styles.ConfirmButtonDiv}>
                  <PrimaryButton
                    clickHandler={() => {
                      setFinalLocationStep(true);
                      setConfirmLocationSession(false);
                    }}
                    title={"Confirm and Proceed"}
                    buttonStyle={{
                      width: "100%",
                      backgroundColor: "#0E62CB",
                      color: "#fff",
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={6}
              xl={7}
              className={styles.ConfirmLocationSpace}
            >
              <Gmaps
                height={"300px"}
                lat={currentLocation.latitude}
                lng={currentLocation.longitude}
                zoom={12}
                loadingMessage={"Waiting For Maps...."}
                params={params}
                onMapCreated={() => onMapCreated}
              >
                <Marker
                  lat={currentLocation.latitude}
                  lng={currentLocation.longitude}
                  draggable={true}
                />
              </Gmaps>
            </Col>
          </Row>
        ) : secondProcessShow && setFinalLocationStep ? (
          <Row className={styles.LocationRow}>
            <Col
              xs={12}
              md={6}
              lg={6}
              xl={5}
              className={styles.ConfirmLocationSpace}
            >
              <Row>
                <Col xs={12} md={12} lg={12} xl={12}>
                  <div className="d-flex align-items-start">
                    <p>{selectedAddress}</p>
                    <PrimaryButton
                      title="Change"
                      buttonStyle={{
                        width: "fit-content",
                        padding: "0.2rem 0.5rem",
                        fontSize: "17px",
                      }}
                    />
                  </div>
                  <div className="d-block">
                    <input
                      type={"text"}
                      placeholder="House/Flat number"
                      className={styles.FinalInput}
                    />
                    <input
                      type={"text"}
                      placeholder="Landmark(optional)"
                      className={styles.FinalInput}
                    />
                    <input
                      type={"text"}
                      placeholder="Name"
                      className={styles.FinalInput}
                    />
                  </div>
                  <div className={styles.SelectionMenu}>
                    {["Home", "Office", "Others"].map((v, i) => (
                      <PrimaryButton
                        key={i}
                        title={v}
                        buttonStyle={{
                          width: "30%",
                          padding: "0.2rem 0.5rem",
                          fontSize: "18px",
                        }}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
              <div>
                <div>
                  <PrimaryButton
                    clickHandler={() => {
                      setFinalLocationStep(true);
                      setConfirmLocationSession(false);
                    }}
                    title={"Save and Proceed"}
                    buttonStyle={{
                      width: "100%",
                      backgroundColor: "#676767",
                      color: "#fff",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={6}
              xl={7}
              className={styles.ConfirmLocationSpace}
            >
              <Gmaps
                height={"430px"}
                lat={currentLocation.latitude}
                lng={currentLocation.longitude}
                zoom={12}
                loadingMessage={"Waiting For Maps...."}
                params={params}
                onMapCreated={() => onMapCreated}
              >
                <Marker
                  lat={currentLocation.latitude}
                  lng={currentLocation.longitude}
                  draggable={false}
                />
              </Gmaps>
            </Col>
          </Row>
        ) : null}
      </Modal.Body>
    </Modal>
  );
}
