import styles from "@/styles/components/Popups/Checkout.module.css";
import { useEffect, useState } from "react";
import { Alert, Col, Image, Modal, Row } from "react-bootstrap";
import Slider from "react-slick";
import PrimaryButton from "../common/PrimaryButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  API_URL,
  daysforcal,
  GMAP_API,
  monthsforcal,
  timesofsloats,
} from "utils/data";
import { FiSearch } from "react-icons/fi";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { Gmaps, Marker } from "react-gmaps";
import { enddate, getDatesInRange, startdate } from "utils/calenderPackage";
import { calenderslidersettings } from "utils/sliderSettings";
import { StatusProcess } from "./StatusProcess";
import NavigationHandler from "./NavigationHandler";
import {
  AddToCart,
  CityDetactionAPI,
  MyAddress,
  PincodeByCity,
  SaveAddress,
  TimeSloatAPI,
} from "pages/api/api";
import { getPincode, MatchCity } from "utils/utilsfunctions";
import { RiAddFill } from "react-icons/ri";
import Coupons from "./Coupons";
import PaymentOption from "./PaymentOption";
import { useDispatch, useSelector } from "react-redux";
import CouponsCard from "./CouponsCard";
import { CgCloseO } from "react-icons/cg";
import {
  removeCoupons,
  setCouponssSuccess,
} from "redux/actions/couponActions/couponsActions";
import CartProductList from "./CartProductList";
import {
  callAddorRemoveCart,
  callMyCartBycity,
} from "redux/actions/cartActions/cartActions";
import Thankyou from "./ThankYou";
import ThankYouHero from "../ThankYou/ThankYouHero";
import { postOrders } from "api/ordersAPI";
import axios from "axios";

export default function CheckoutPopup({ show, onHide, backmain }) {
  const dispatch = useDispatch();
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(0);
  const [showDateError, setShowDateError] = useState(false);
  const [showTimeError, setShowTimeError] = useState(false);
  const [processStatus, setProcessStatus] = useState([0]);
  const [secondProcessShow, setSecondProcessShow] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 12.972442,
    longitude: 77.580643,
  });
  const [selectedAddress, setSelectedAddress] = useState("");
  const [confirmLocationSession, setConfirmLocationSession] = useState(false);
  const [finalLocationStep, setFinalLocationStep] = useState(false);
  const [addressType, setAddressType] = useState("Home");
  const [houseInput, setHouseInput] = useState("");
  const [landmarkInput, setLandMarkInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [changeModalSize, setChangeModalSize] = useState(true);
  const [LocationInputError, setLocationError] = useState(0);
  const [timesloatsata, setTimeSloatData] = useState([]);
  const [addressdata, setAddressData] = useState({});
  const [currentCity, setCurrentCity] = useState("");
  const [mobileView, setMobileView] = useState(false);
  const [completedSloat, setCompletedSloat] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [locationcityError, setLocationcityError] = useState(true);
  const [selectedAddressStatus, setSelectedAddressStatus] = useState(false);
  const [myaddress, setMyaddress] = useState([]);
  const [myselectedaddress, setMyselectedAddress] = useState({});
  const [deleteShow, setDeleteShow] = useState(false);
  const [tabletView, setTabletView] = useState(false);
  const [finalPayment, setFinalPayment] = useState(false);
  // address flow
  const [addressFlowOne, setAddressFlowOne] = useState(false);
  const [addressFlowTwo, setAddressFlowTwo] = useState(false);
  const [confirmSession, setConfirmSession] = useState(false);
  const [dateandTimeSelection, setDateAndTimeSelection] = useState(true);
  const [directSelected, setDirectSelected] = useState(false);
  const [procced, setProcced] = useState(false);
  //
  const [couponsSow, setCouponsSow] = useState(false);
  const [total, setTotal] = useState(0);

  const [finalway, setFinalWay] = useState(false);
  const [proccessComplete, setProcessComplete] = useState(false);
  const [savepincode, setSavePincode] = useState([]);
  const [bcolor, setBcolor] = useState("#676767");
  const [addId, setAddId] = useState(0);
  const [addType, setAddType] = useState([
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "OFFICE",
    },
    {
      id: 3,
      title: "OTHER",
    },
  ]);
  const [selectedTypeadd, setSelectedTypeadd] = useState();
  const RemoveFromCart = async (id) => {
    await AddToCart(localStorage.getItem("token"), id)
      .then((response) => {
        if (response.data.success) {
          dispatch(callMyCartBycity(localStorage.getItem("token"), 1));
        }
      })
      .catch((err) => dispatch(setAddorRemoveCartFail(err)));
  };
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
  const couponsselector = useSelector((state) => state.couponsdata);
  const cartSelector = useSelector((state) => state.cartdata);

  const cartDetailList = cartSelector.data
    ? cartSelector.data.data !== undefined
      ? cartSelector.data.data
      : []
    : [];

  const couponsdataList = couponsselector.data
    ? couponsselector.data.data !== undefined
      ? couponsselector.data.data
      : []
    : [];

  const selectingCoupons =
    couponsselector.selectedcoupons !== null
      ? couponsselector.selectedcoupons
      : null;

  const BillAmount = () => {
    var ans = 0;
    for (let i = 0; i < cartDetailList.length; i++) {
      ans = parseInt(cartDetailList[i].issue_price) + ans;
    }
    setTotal(ans);
  };

  useEffect(() => {
    BillAmount();
  }, [cartSelector]);

  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
    window.innerWidth < 768 && window.innerWidth > 992
      ? setTabletView(true)
      : setTabletView(false)
      ? setMobileView(true)
      : setMobileView(false);
  }, []);
  useEffect(() => {
    if (localStorage.getItem("cityid")) {
      // PincodeByCity(1)
      //   .then((r) => setSavePincode(r.data.data))
      //   .catch((e) => console.log(e));
    }
  }, [currentLocation]);
  useEffect(() => {
    if (directSelected) {
      setProcessStatus(processStatus.concat(1));
    }
  }, [directSelected]);
  useEffect(() => {
    if (myaddress.length > 0) {
      setAddId(myaddress[0].address_id);
      setMyselectedAddress({
        id: myaddress[0].address_id,
        address: myaddress[0].address_line_1,
      });
    }
  }, [myaddress]);

  useEffect(
    () => setCompletedSloat(TimeIsOver(timesloatsata, timesofsloats)),
    [timesloatsata]
  );

  useEffect(() => {
    getLatandLongByAddress(selectedAddress);
    setConfirmLocationSession(true);
  }, [selectedAddress]);

  const ConfirmProcessed = () => {
    selectedTime === null ? setShowTimeError(true) : setShowTimeError(false);
    selectedDate === null ? setShowDateError(true) : setShowDateError(false);
    if (!(selectedTime === null) && !(selectedDate === null)) {
      if (myaddress.length > 0) {
        setDirectSelected(true);
        setDateAndTimeSelection(false);
        setChangeModalSize(true);
      } else {
        setSecondProcessShow(true);
        setDateAndTimeSelection(false);
        setChangeModalSize(false);
      }
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
      navigator.geolocation.getCurrentPosition(
        showPosition,
        (error) => {
          alert(error.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    // getPincode(position.coords.latitude, position.coords.longitude);
    setCurrentLocation(position.coords);
    reverseMap(position.coords.latitude, position.coords.longitude);
    displayLocation(position.coords.latitude, position.coords.longitude);
  }
  useEffect(() => {
    // getPincode(currentLocation.latitude, currentLocation.longitude);
    reverseMap(currentLocation.latitude, currentLocation.longitude);
  }, [currentLocation]);

  function reverseMap(lat, lng) {
    if (
      (lat != null && lng != null) ||
      (lat != undefined && lng != undefined)
    ) {
      var latlng = new google.maps.LatLng(lat, lng);
      if (latlng != null || latlng != undefined) {
        var geocoder = (geocoder = new google.maps.Geocoder());
        // getPincode(lat, lng);
        geocoder.geocode({ latLng: latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            // results.map((v) => console.log(v));
            if (results[1]) {
              setSelectedAddress(results[1].formatted_address);
            }
          }
        });
      }
    }
  }

  function getLatandLongByAddress(address) {
    var geocoder = new google.maps.Geocoder();
    setTimeout(() => {
      geocoder.geocode({ address: address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();
          setCurrentLocation({ latitude, longitude });
          displayLocation(latitude, longitude);
        }
      });
    }, 1200);
  }
  //  observer for close or open modal
  useEffect(() => {
    if (!show) {
      setSelectedDate(null);
      setSelectedTime(null);
      setShowDateError(false);
      setShowTimeError(false);
      setSelectedAddress("");
      setSecondProcessShow(false);
      setFinalLocationStep(false);
      //
      setChangeModalSize(true);
      setAddressFlowOne(false);
      setAddressFlowTwo(false);
      setConfirmSession(false);
      setDateAndTimeSelection(true);
      setFinalPayment(false);
      setFinalWay(null);
      setSelectedPaymentWay(null);
      setProcessComplete(false);
    } else {
      setSelectedDate(0);
      TimeSloatAPI()
        .then((time_sloat) => {
          if (time_sloat.data.success) {
            setTimeSloatData(time_sloat.data.data);
          } else {
            console.log("time sloat says" + time_sloat.data.message);
          }
        })
        .catch((e) => console.log("time sloat api" + e));

      MyAddress(localStorage.getItem("token"))
        .then((response) => {
          if (response.data.success) {
            setMyaddress(response.data.data);
          }
        })
        .catch((e) => console.log("myaddress fetching " + e));

      axios.get(`${API_URL}api/v1/address_types`).then((response) => {
        if (response.data.success) {
          setAddType(response.data.data);
        }
      });
    }
  }, [show]);
  const refreshAddress = () => {
    MyAddress(localStorage.getItem("token"))
      .then((response) => {
        if (response.data.success) {
          setMyaddress(response.data.data);
        }
      })
      .catch((e) => console.log("myaddress fetching " + e));
  };
  const [datelist, setDateList] = useState(getDatesInRange(startdate, enddate));
  useEffect(() => {
    if (selectedAddressStatus) {
      MyAddress(localStorage.getItem("token"))
        .then((response) => {
          if (response.data.success) {
            setMyaddress(response.data.data);
          }
        })
        .catch((e) => console.log("myaddress fetching " + e));
    }
  }, [selectedAddressStatus]);
  //  save and proceed Handle
  useEffect(() => {
    if (
      houseInput == "" ||
      nameInput == "" ||
      landmarkInput == "" ||
      addType == null
    ) {
      setBcolor("#676767");
    } else {
      setBcolor("#0E62CB");
    }
  }, [houseInput, nameInput, landmarkInput, addType]);
  const SaveAndProceedHandle = () => {
    if (houseInput.length <= 0) {
      setLocationError(1);
    } else if (nameInput.length <= 1) {
      setLocationError(2);
    } else {
      setLocationError(0);
      setAddressData({
        address: selectedAddress.substring(0, 10),
        type: addressType,
        house: houseInput,
        landmark: landmarkInput,
        name: nameInput,
      });
      if (!localStorage.getItem("token")) {
        // alert("Please Login Now");
      } else {
        SaveAddress(
          localStorage.getItem("token"),
          addressType,
          addressType,
          selectedAddress.substring(0, 49),
          selectedAddress.substring(0, 49),
          landmarkInput,
          "001"
        )
          .then((r) => {
            if (r.data.success) {
              setMyselectedAddress(selectedAddress.substring(0, 49));
              setSelectedAddressStatus(true);
              setProcessStatus(processStatus.concat(1));
              setFinalLocationStep(false);
              setFinalPayment(true);
              refreshAddress();
              setAddId(myaddress[0].address_id);
            }
          })
          .catch((e) => console.log(e));
      }
    }
  };
  const OnPlaceSelect = async (place) => {
    if (!(place == undefined)) {
      setSelectedAddress(place.formatted_address);
    }
  };
  function displayLocation(latitude, longitude) {
    if (
      (latitude != null && longitude != null) ||
      (latitude != undefined && longitude != undefined)
    ) {
      var geocoder;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(latitude, longitude);
      if (latlng != null || latlng != undefined) {
        var count, country, state, city;
        // getPincode(latitude, longitude);

        geocoder.geocode({ latLng: latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              var add = results[0].formatted_address;
              var value = add.split(",");

              count = value.length;
              country = value[count - 1];
              state = value[count - 2];
              city = value[count - 3];
              setCurrentCity(city);
            } else {
              alert("address not found");
            }
          } else {
            console.log("Geocoder failed due to: " + status);
          }
        });
      }
    }
  }

  useEffect(() => {
    if (currentCity != "") {
      CityDetactionAPI()
        .then((r) => setCityData(r.data.data))
        .catch((e) => console.log(e));

      if (MatchCity(cityData, currentCity, dispatch)) {
      } else {
        setSelectedAddress("");
        setCurrentLocation({
          latitude: 12.972442,
          longitude: 77.580643,
        });
      }
    }
  }, [currentCity]);

  const timeselectedHandler = (index) => {
    setShowTimeError(false);
    setSelectedTime(index);
  };

  const finalPaymentBackHandler = () => {
    if (myaddress.length > 0) {
      setDirectSelected(true);
      setFinalPayment(false);
    }
  };
  const removeThecartdata = () => {
    for (let cartdata = 0; cartdata < cartDetailList.length; cartdata++) {
      dispatch(
        callAddorRemoveCart(
          localStorage.getItem("token"),
          cartDetailList[cartdata].issue_id
        )
      );
    }
  };
  const [paymentway, setSelectedPaymentWay] = useState(null);

  const FinalOrderNow = () => {
    var setup_day =
      datelist[selectedDate].dates < 10
        ? "0" + datelist[selectedDate].dates
        : datelist[selectedDate].dates;
    var generated_date =
      new Date().getFullYear() +
      "-" +
      (datelist[selectedDate].month < 10
        ? "0" + datelist[selectedDate].month
        : datelist[selectedDate].month) +
      "-" +
      setup_day;

    var selected_time = timesloatsata[selectedTime].id;
    postOrders(localStorage.getItem("token"), {
      enquiryId: localStorage.getItem("enq_id"),
      addressId: addId,
      dateOrder: generated_date,
      timeslot: selected_time,
      paymentType: paymentway + 1,
    })
      .then((r) => {
        if (r.data) {
          if (r.data.success) {
            alert(r.data.message);
            setProcessComplete(true);
            removeThecartdata();
          } else {
            // alert(r.data.message);
          }
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={changeModalSize ? "xl" : "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CheckoutPopup"
    >
      <Modal.Body
        className={`${styles.ModalBody} ${
          secondProcessShow && styles.LocationModalBody
        }`}
      >
        {proccessComplete ? (
          <ThankYouHero
            clkhandler={() => {
              onHide();
            }}
          />
        ) : (
          <>
            {/*======================================== date time selection ======================================== */}
            {dateandTimeSelection ? (
              <Row>
                <NavigationHandler
                  backhandler={() => {
                    onHide();
                    backmain();
                  }}
                  navtitle="Checkout"
                />
                <Col xs={12} md={12} lg={12} xl={12}>
                  {showDateError && (
                    <Alert variant={"danger"}>Please Select Date !</Alert>
                  )}
                  {showTimeError && (
                    <Alert variant={"danger"}>Please Select Time !</Alert>
                  )}
                </Col>

                {/*  status of Process  */}
                <StatusProcess processStatus={processStatus} />
                {/* =================== */}
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
                  <Slider
                    {...calenderslidersettings}
                    className={"CalendarSlider"}
                  >
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
                        <div className={styles.Slogan}>
                          {monthsforcal[v.month]}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </Col>

                {/* time sloat  */}
                <Col xs={12} md={12} lg={12} xl={12}>
                  <h5 className={styles.SubtitleText}>Select Time</h5>
                  <Row className={styles.SelectionTimeRow}>
                    {timesloatsata.map((v, i) => (
                      <Col
                        xs={6}
                        xl={4}
                        key={i}
                        className={`${styles.TimeCardCol}`}
                      >
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

                {/* button for actions */}
                <Col
                  xs={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={styles.ButtonCol}
                >
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

            {directSelected ? (
              <div>
                {/* if you need to delete model code is already done put here code-backup-no-001 from etc.code.txt*/}
                <NavigationHandler
                  backhandler={() => {
                    setChangeModalSize(true);
                    setDateAndTimeSelection(true);
                    setDirectSelected(false);
                  }}
                  navtitle="Checkout"
                />
                <StatusProcess processStatus={processStatus} />
                <Row className={styles.ConfirmSelectedAddress}>
                  <Col xs={12} md={12} lg={12} xl={12}>
                    <div
                      style={{
                        height: "20rem",
                        overflowY: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      {myaddress.map((v, i) => (
                        <Row className={styles.AddressDiv} key={i}>
                          <Col
                            xs={10}
                            md={10}
                            lg={10}
                            xl={10}
                            className={styles.AddressInput}
                          >
                            <p className="m-0 ms-3 font-weight-bold">
                              {v.address_no == "1"
                                ? "Home"
                                : v.address_no == "2"
                                ? "Office"
                                : v.address_no == "3"
                                ? "Others"
                                : ""}
                            </p>
                            <input
                              type="radio"
                              name={"address"}
                              onChange={() => {
                                setAddId(v.address_id);
                                setMyselectedAddress({
                                  id: v.address_id,
                                  address: v.address_line_1,
                                });
                              }}
                              defaultChecked={i == 0 ? true : false}
                            />{" "}
                            <span className={styles.AddressLine}>
                              {v.address_line_1}
                            </span>
                          </Col>
                          {/* if you need so put here code-backup-no-002 from etc.code.txt */}
                          <hr />
                        </Row>
                      ))}
                    </div>

                    <div className={styles.AddNewWrraper}>
                      <p
                        onClick={() => {
                          setSecondProcessShow(false);
                          setChangeModalSize(true);
                          setAddressFlowTwo(true);
                          setConfirmSession(true);
                          setChangeModalSize(false);
                          setDirectSelected(false);
                        }}
                      >
                        <RiAddFill color="#0E62CB" />
                        Add New Address
                      </p>
                    </div>
                    <PrimaryButton
                      clickHandler={() => {
                        setSecondProcessShow(false);
                        setFinalPayment(true);
                        setDirectSelected(false);
                      }}
                      buttonStyle={{
                        width: "100%",
                        backgroundColor: "#0E62CB",
                        color: "#fff",
                      }}
                      title="Continue with this Address"
                    />
                  </Col>
                </Row>
              </div>
            ) : (
              <div>
                {/*======================================== Address and Location Flows ======================================== */}
                {secondProcessShow ? (
                  <Row>
                    <NavigationHandler
                      navtitle={"Select Location"}
                      backhandler={() => {
                        setSecondProcessShow(false);
                        setChangeModalSize(true);
                        setDateAndTimeSelection(true);
                      }}
                      unique
                    />

                    <Col xs={12} md={12} lg={12} xl={12}>
                      <div className={styles.LocationHeadLine}>
                        <p className={styles.HeadLine}>
                          Select your delivery location to get started
                        </p>
                      </div>
                      <div>
                        <PrimaryButton
                          clickHandler={() => {
                            setSecondProcessShow(false);
                            setChangeModalSize(true);
                            setAddressFlowOne(true);
                            setConfirmSession(true);
                            setChangeModalSize(false);
                            getLocation();
                          }}
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
                            onClick={() => {
                              setSecondProcessShow(false);
                              setChangeModalSize(true);
                              setAddressFlowTwo(true);
                              setConfirmSession(true);
                              setChangeModalSize(false);
                            }}
                            placeholder={
                              addressFlowOne
                                ? "Search street, locality, etc"
                                : "Search your locality"
                            }
                            apiKey={GMAP_API}
                            onPlaceSelected={(place) => OnPlaceSelect(place)}
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
                ) : null}

                {/* ======================================== for flow 1  : 1.1  ========================================*/}
                {confirmSession && (addressFlowOne || addressFlowTwo) ? (
                  <Row className={styles.ColReverse}>
                    <div className={styles.HideNavigationBar}>
                      <NavigationHandler
                        navtitle={"Confirm Location"}
                        backhandler={() => {
                          setSecondProcessShow(true);
                          setConfirmSession(false);
                          addressFlowOne
                            ? setAddressFlowOne(false)
                            : setAddressFlowTwo(false);
                        }}
                        unique
                      />
                    </div>
                    <Col
                      xs={12}
                      md={12}
                      lg={6}
                      xl={5}
                      className={styles.ConfirmLocationSpace}
                    >
                      <div>
                        <div className={styles.ConfirmLocationInput}>
                          <ReactGoogleAutocomplete
                            placeholder="Address"
                            apiKey={GMAP_API}
                            onPlaceSelected={(place) => OnPlaceSelect(place)}
                            options={{
                              types: ["establishment"],
                              componentRestrictions: { country: "in" },
                              mapTypeControl: false,
                              streetViewControl: false,
                            }}
                            className={styles.SearchInp}
                          />
                          {addressFlowOne ? null : (
                            <label className={styles.ChangeLable}>CHANGE</label>
                          )}
                        </div>
                        <div
                          className={styles.CurrentLocationDiv}
                          onClick={() => {
                            getLocation();
                          }}
                        >
                          <Image
                            src={
                              addressFlowOne
                                ? "/assets/icons/dark-icon-location.svg"
                                : "/assets/icons/blue-location.svg"
                            }
                            alt="location-icon"
                            loading="lazy"
                          />
                          <span
                            className={styles.DetectDirectLabel}
                            style={addressFlowTwo ? { color: "#0E62CB" } : null}
                          >
                            Use my current location
                          </span>
                        </div>

                        <div className={styles.ConfirmButtonDiv}>
                          <PrimaryButton
                            clickHandler={() => {
                              if (
                                selectedAddress == "" ||
                                selectedAddress == null
                              ) {
                                alert("Please select valid address");
                              } else {
                                setFinalLocationStep(true);
                                setConfirmLocationSession(false);
                                setChangeModalSize(true);
                                addressFlowOne
                                  ? setAddressFlowOne(false)
                                  : setAddressFlowTwo(false);
                                setConfirmSession(false);
                              }
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
                      md={12}
                      lg={6}
                      xl={7}
                      className={`${styles.ConfirmLocationSpace}`}
                    >
                      <Gmaps
                        height={mobileView ? "500px" : "300px"}
                        lat={currentLocation.latitude}
                        lng={currentLocation.longitude}
                        zoom={15}
                        loadingMessage={"Waiting For Maps...."}
                        params={params}
                        onMapCreated={() => onMapCreated}
                      >
                        <Marker
                          lat={currentLocation.latitude}
                          lng={currentLocation.longitude}
                          draggable={true}
                          onDragEnd={(e) =>
                            setCurrentLocation({
                              latitude: e.latLng.lat(),
                              longitude: e.latLng.lng(),
                            })
                          }
                        />
                      </Gmaps>
                    </Col>
                  </Row>
                ) : null}

                {/*======================================== location save and procced ======================================== */}
                {selectedAddress != "" && finalLocationStep ? (
                  <Row>
                    <NavigationHandler
                      backhandler={onHide}
                      navtitle="Checkout"
                    />
                    <StatusProcess processStatus={processStatus} />
                    <Col xs={12} md={12} lg={12} xl={12}>
                      {LocationInputError == 1 ? (
                        <Alert variant={"danger"}>
                          House/Flat number is Required !
                        </Alert>
                      ) : null}
                      {LocationInputError == 2 ? (
                        <Alert variant={"danger"}>Name is Required !</Alert>
                      ) : null}
                    </Col>
                    <Col
                      xs={12}
                      md={12}
                      lg={6}
                      xl={5}
                      className={`${styles.ConfirmLocationSpace} ${styles.finalLocationStep}`}
                    >
                      <Row>
                        <Col xs={12} md={12} lg={12} xl={12}>
                          <div className={styles.SelectedAddressActions}>
                            <p className={styles.SelectedAddressText}>
                              {selectedAddress}
                            </p>
                            <PrimaryButton
                              clickHandler={() => {
                                setSecondProcessShow(false);
                                setChangeModalSize(true);
                                setAddressFlowOne(true);
                                setConfirmSession(true);
                                setChangeModalSize(false);
                                setFinalLocationStep(false);
                              }}
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
                              value={houseInput}
                              onChange={(e) => setHouseInput(e.target.value)}
                              className={styles.FinalInput}
                            />
                            <input
                              type={"text"}
                              value={landmarkInput}
                              onChange={(e) => setLandMarkInput(e.target.value)}
                              placeholder="Landmark(optional)"
                              className={styles.FinalInput}
                            />
                            <input
                              type={"text"}
                              value={nameInput}
                              onChange={(e) => setNameInput(e.target.value)}
                              placeholder="Name"
                              className={styles.FinalInput}
                            />
                          </div>
                          <div className={styles.SelectionMenu}>
                            {addType.map((v, i) => (
                              <PrimaryButton
                                clickHandler={() => {
                                  setAddressType(v.id);
                                  setSelectedTypeadd(v.title);
                                }}
                                key={i}
                                title={v.title}
                                buttonStyle={{
                                  width: "30%",
                                  padding: "0.2rem 0.5rem",
                                  fontSize: "18px",
                                  backgroundColor:
                                    addressType === v ? "#0E62CB" : null,
                                  color: addressType === v && "#fff",
                                }}
                              />
                            ))}
                          </div>
                        </Col>
                      </Row>
                      <div>
                        <div>
                          <PrimaryButton
                            clickHandler={() => SaveAndProceedHandle()}
                            title={"Save and Proceed"}
                            buttonStyle={{
                              width: "100%",
                              backgroundColor: bcolor,
                              color: "#fff",
                              border: "none",
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      md={12}
                      lg={6}
                      xl={7}
                      className={`${styles.ConfirmLocationSpace}  ${styles.FinalGmap}`}
                    >
                      <Gmaps
                        height={"430px"}
                        lat={currentLocation.latitude}
                        lng={currentLocation.longitude}
                        zoom={19}
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
              </div>
            )}

            {/*======================================== final payment ========================================*/}
            {finalPayment && (
              <div>
                <NavigationHandler
                  navtitle={paymentway == 0 ? "Payment" : "Checkout"}
                  backhandler={() => {
                    finalPaymentBackHandler();
                    setSelectedPaymentWay(null);
                    setFinalWay(null);
                  }}
                />
                {paymentway == null && (
                  <StatusProcess
                    processStatus={processStatus}
                    address={
                      myselectedaddress.address
                        ? myselectedaddress.address
                        : myselectedaddress
                    }
                    datetime={
                      new Date().getFullYear() +
                      " - " +
                      (datelist[selectedDate].month < 10
                        ? "0" + (datelist[selectedDate].month + 1)
                        : datelist[selectedDate].month + 1) +
                      " - " +
                      (datelist[selectedDate].dates < 10
                        ? "0" + datelist[selectedDate].dates
                        : datelist[selectedDate].dates) +
                      " , " +
                      timesloatsata[selectedTime].title
                    }
                    datetimeclk={() => {
                      setFinalPayment(false);
                      setDateAndTimeSelection(true);
                    }}
                    addressclk={() => {
                      setFinalPayment(false);
                      setDirectSelected(true);
                    }}
                  />
                )}

                <Modal
                  show={couponsSow}
                  onHide={() => setCouponsSow(false)}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  className={`CartandOfferPopup`}
                >
                  <Modal.Body className={styles.CartAndOfferBody}>
                    <Row>
                      <Col xs={10} md={6} lg={6} xl={6}>
                        <h4 className={styles.CartAndOfferMainTitle}>
                          Available coupons
                        </h4>
                      </Col>
                      <Col
                        xs={2}
                        md={6}
                        lg={6}
                        xl={6}
                        className={`${styles.CloseIconWrraper} mb-3 text-end`}
                      >
                        <CgCloseO
                          size={20}
                          onClick={() => setCouponsSow(false)}
                        />
                      </Col>
                      <Col
                        xs={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={styles.CouponsView}
                      >
                        {couponsdataList.map((v, i) => (
                          <CouponsCard
                            code={v.coupon_code}
                            detail={v.coupon_title}
                            key={i}
                            applyaction={() => {
                              setCouponsSow(false);
                              dispatch(setCouponssSuccess(v));
                            }}
                          />
                        ))}
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
                <Row>
                  {selectingCoupons == undefined ? null : paymentway ==
                    0 ? null : (
                    <Row className={styles.AvailableCoupons}>
                      <Col xs={6} md={6} lg={6} xl={6}>
                        <h4 className={styles.CartAndOfferSubMainTitle}>
                          Available coupons
                        </h4>
                      </Col>
                      <Col
                        xs={6}
                        md={6}
                        lg={6}
                        xl={6}
                        className={styles.TextRight}
                      >
                        <lable
                          className={`${styles.CartAndOfferSubMainTitle} ${styles.LinkType}`}
                          onClick={() => setCouponsSow(true)}
                        >
                          See All
                        </lable>
                      </Col>
                      <Col
                        xs={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={styles.CouponsCol}
                      >
                        {selectingCoupons != undefined && (
                          <Coupons
                            title={selectingCoupons.coupon_title}
                            offer={`-- ₹${selectingCoupons.coupon_amount} ${
                              selectingCoupons.coupon_is_percentage
                                ? "(" +
                                  selectingCoupons.coupon_percentage +
                                  "OFF)"
                                : ""
                            }`}
                            clickHandler={() => {
                              dispatch(removeCoupons());
                            }}
                          />
                        )}
                      </Col>
                    </Row>
                  )}
                  <Col
                    xs={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className={styles.YourCartCol}
                  >
                    <h4 className={styles.CartAndOfferSubMainTitle}>
                      Your Cart
                    </h4>
                    <hr />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className={styles.YourCartInCol}
                  >
                    {cartDetailList.map((v, i) => (
                      <CartProductList
                        key={i}
                        productname={v.issue_title}
                        price={v.issue_price}
                        clickHandler={() => RemoveFromCart(v.issue_id)}
                      />
                    ))}
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className={styles.YourCartInCol}
                  >
                    <Row>
                      <Col xs={6} md={6} lg={6} xl={6}>
                        <p className={styles.TotalAmount}>Total</p>
                      </Col>
                      <Col
                        xs={6}
                        md={6}
                        lg={6}
                        xl={6}
                        className={styles.TextMoneyRight}
                      >
                        {selectingCoupons != undefined
                          ? selectingCoupons.coupon_amount
                            ? `₹${
                                total - parseInt(selectingCoupons.coupon_amount)
                              }`
                            : `₹${total}`
                          : `₹${total}`}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {finalway != 0 && (
                  <Row className={styles.PaymentSelectionRow}>
                    {[
                      {
                        img: "/assets/icons/paynow.png",
                        title: "Pay Now (Online)",
                      },
                      {
                        img: "/assets/icons/payafter.png",
                        title: "Pay After Services",
                      },
                    ].map((v, i) => (
                      <Col xs={12} md={6} lg={6} xl={6} key={i}>
                        <div
                          key={i}
                          className={`${styles.PaymentSelection} ${
                            paymentway == i && styles.SelectedPaymentWay
                          }`}
                          onClick={() => setSelectedPaymentWay(i)}
                        >
                          <span>
                            <Image src={v.img} alt="payment" loading="lazy" />
                          </span>
                          <p className={styles.PaymentTitle}>{v.title}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
                {finalway == 0 && total > 0 ? (
                  <PaymentOption
                    amount={
                      selectingCoupons != undefined
                        ? selectingCoupons.coupon_amount
                          ? total - parseInt(selectingCoupons.coupon_amount)
                          : total
                        : total
                    }
                  />
                ) : null}
                {total > 0 ? (
                  paymentway == 1 ? (
                    <Row>
                      <Col xs={12} md={12} lg={12} xl={12}>
                        <PrimaryButton
                          title="Place Request"
                          buttonStyle={{
                            width: "100%",
                            background: "#0E62CB",
                            color: "#fff",
                          }}
                          clickHandler={() => {
                            FinalOrderNow();
                          }}
                        />
                      </Col>
                    </Row>
                  ) : finalway != 0 ? (
                    <Row>
                      <Col xs={12} md={12} lg={12} xl={12}>
                        <PrimaryButton
                          title="Proceed"
                          buttonStyle={{
                            width: "100%",
                            background: "#0E62CB",
                            color: "#fff",
                          }}
                          clickHandler={() => setFinalWay(0)}
                        />
                      </Col>
                    </Row>
                  ) : null
                ) : null}
              </div>
            )}
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}
