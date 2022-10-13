import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "./PrimaryButton";
import { Col, Image, Modal, Row, Spinner } from "react-bootstrap";
import { moreMenu } from "utils/moreMenu";
import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "@/styles/components/common/Header.module.css";
import LoginPopup from "../Popups/LoginPopup";
import CartAndOffer from "../Popups/CartAndOffer";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { API_URL, GMAP_API } from "utils/data";
import { CityDetactionAPI, PincodeByCity, UserLogout } from "pages/api/api";
import { getPincode, MatchCity } from "utils/utilsfunctions";
import Logout from "../Popups/Logout";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_USER_SUCCESS, USER_CLEAR } from "redux/actions/actionTypes";
import { GET_CITY_SUCCESS } from "redux/actions/actionTypes";
import { BiUser } from "react-icons/bi";
import { callNavsearch } from "redux/actions/mixActions/mixActions";
import { selectCategory } from "redux/actions/issuePageActions/issuePageActions";
import geocodeToPincode from "geocode-to-pincode";
import { getCookie } from "cookies-next";
import { NavSearchApi } from "api/mixApi";
import NavigationHandler from "../Popups/NavigationHandler";
import { MyProfile } from "api/profileApi";
import { useRouter } from "next/router";

export function Header() {
  const [mobileView, setMobileView] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [cartandOfferPopup, setCartAndOfferPopup] = useState(false);
  const [locationPopupShow, setLocationPopupShow] = useState(true);
  const [currentCity, setCurrentCity] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [cityData, setCityData] = useState([]);
  const [token, setToken] = useState(false);
  const [logoutpopup, setLogoutPopup] = useState(false);
  const [appleHeaderData, setAppleHeaderData] = useState([]);
  const [topBrandsHeaderData, setTopBrandsHeaderData] = useState([]);
  const [mobileRepairHeaderData, setmobileRepairHeaderData] = useState([]);
  const [topIssuesHeaderData, settopIssuesHeaderData] = useState([]);
  const [loactionloader, setLocationLoader] = useState(false);
  const [showMobloc, setShowMobloc] = useState(false);
  const [search, setSearch] = useState("");
  const [sdata, setSdata] = useState(null);
  const [savepincode, setSavePincode] = useState([]);
  const dispatch = useDispatch();

  const locationselector = useSelector((selector) => selector.locationdata);
  const navsearch = useSelector((selector) => selector.mix.navsearch);
  const userselector = useSelector((selector) => selector.userdata);
  // const profileselector = useSelector((selector) => selector.profile.profile);
  const selector = useSelector((selector) => selector);

  const navdata = navsearch ? (navsearch.data ? navsearch.data : null) : null;

  const [categoriesSearch, setCategoriesSearch] = useState([]);
  const [brandsSearch, setBrandsSearch] = useState([]);
  const [modelsSearch, setModelsSearch] = useState([]);
  const [segmentSearch, setsegmentSearch] = useState([]);
  const [errSearch, setErrsearch] = useState("");
  const [loadsSearch, setLoadsSearch] = useState(false);
  const [showsearch, setShowSearch] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const router = useRouter();
  setTimeout(() => {
    setSdata(navdata);
  }, 1000);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
      setLoginPopup(false);
    } else {
      setToken(false);
    }
  });
  const callDropdataApple = async () => {
    await axios
      .get(`${API_URL}api/v1/cms/top_apple_products`)
      .then((data) =>
        data.data.data !== undefined
          ? setAppleHeaderData(data.data.data)
          : setAppleHeaderData([])
      );
  };
  const callDropdataBrands = async () => {
    await axios.get(`${API_URL}api/v1/cms/top_brands`).then((data) => {
      data.data.data !== undefined
        ? setTopBrandsHeaderData(data.data.data)
        : setTopBrandsHeaderData([]);
    });
  };
  const callDropdataModel = async () => {
    await axios
      .get(`${API_URL}api/v1/cms/top_models`)
      .then((data) =>
        data.data.data !== undefined
          ? setmobileRepairHeaderData(data.data.data)
          : setmobileRepairHeaderData([])
      );
  };
  const callDropdataIssue = async () => {
    await axios
      .get(`${API_URL}api/v1/cms/top_issues`)
      .then((data) =>
        data.data.data !== undefined
          ? settopIssuesHeaderData(data.data.data)
          : settopIssuesHeaderData([])
      );
  };

  const dropdowndata = [
    {
      title: "Apple Products",
      drop: "down",
      handler: callDropdataApple,
      data: appleHeaderData,
    },
    {
      title: "Top Brands",
      drop: "down",
      handler: callDropdataBrands,
      data: topBrandsHeaderData,
    },
    {
      title: "Mobile Repairs",
      drop: "down",
      handler: callDropdataModel,
      data: mobileRepairHeaderData,
    },
    {
      title: "Top Issues",
      drop: "start",
      handler: callDropdataIssue,
      data: topIssuesHeaderData,
    },
    {
      title: "More",
      drop: "start",
      handler: () => null,
      data: moreMenu,
    },
  ];
  const FetchProfile = () => {
    MyProfile(localStorage.getItem("token"))
      .then((r) => {
        if (r.data.success) {
          setProfileData(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (localStorage.getItem("city") && localStorage.getItem("cityid")) {
    } else {
      localStorage.setItem("city", "Bengluru");
      localStorage.setItem("cityid", 1);
    }

    if (localStorage.getItem("token")) {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: localStorage.getItem("token"),
      });
    } else {
      dispatch({
        type: USER_CLEAR,
        payload: 0,
      });
    }

    if (getCookie("erip") == "web") {
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("city");
      localStorage.removeItem("enq_id");
      localStorage.removeItem("cityid");
    }

    if (locationselector.err === "" && locationselector.city != null) {
      setLocationPopupShow(false);
    }
    if (!(localStorage.getItem("city") && localStorage.getItem("cityid"))) {
      setLocationPopupShow(true);
    }
    window.innerWidth < 992 ? setMobileView(true) : setMobileView(false);
    var modal = document.getElementById("dropdown_location");

    const handleScroll = (event) => {
      const scroll = window.scrollY;
      const menuOpen = menuCollapse.current.classList.contains("show");
      const childs = menuCollapse.current.children;

      for (let i = 0; i < childs.length; i++) {
        const element = childs[i];
        if (element.classList.contains("show")) {
          element.children[1].classList.remove("show");
        }
      }

      if (menuOpen) {
        if (scroll > 70) {
          menuCollapse.current.classList.remove("show");
        }
      }
      setLocationPopupShow(false);
      setShowMobloc(false);
    };
    FetchProfile();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (search != "") {
      if (search.length < 0) {
        setShowSearch(false);
        setCategoriesSearch(null);
        setBrandsSearch(null);
        setModelsSearch(null);
        setsegmentSearch(null);
      } else {
        setShowSearch(true);
      }
      setLoadsSearch(true);
      NavSearchApi(localStorage.getItem("cityid"), search)
        .then((response) => {
          if (response.data.success) {
            if (response.data.message == "no data found") {
              setCategoriesSearch(null);
              setBrandsSearch(null);
              setModelsSearch(null);
              setsegmentSearch(null);
              setErrsearch("No data Found");
            } else {
              setCategoriesSearch(response.data.data[0].categories);
              setBrandsSearch(response.data.data[0].brands);
              setModelsSearch(response.data.data[0].models);
              setsegmentSearch(response.data.data[0].segments);
              setLoadsSearch(false);
            }
          } else {
            setErrsearch(response.data.message);
            setLoadsSearch(false);
          }
        })
        .catch((e) => console.log(e));
    }
  }, [search]);

  useEffect(() => {
    if (currentCity != "") {
      CityDetactionAPI()
        .then((r) => {
          setCityData(r.data.data);
        })
        .catch((e) => console.log(e));

      if (MatchCity(cityData, currentCity, dispatch)) {
        setLocationPopupShow(false);
        setShowMobloc(false);
      } else {
        setSelectedAddress("");
      }
    }
  }, [currentCity]);

  function getLocation() {
    setLocationLoader(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  const menuCollapse = useRef();

  function LogoutUser() {
    setLogoutPopup(true);
  }

  function LogoutAction() {
    UserLogout(localStorage.getItem("token"))
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          // alert(response.data.message);
          localStorage.removeItem("token");
          setLogoutPopup(false);
        }
      })
      .catch((e) => console.log("logout" + e));
  }

  function showPosition(position) {
    // geocodeToPincode({
    //   lat: position.coords.latitude,
    //   lng: position.coords.longitude,
    //   key: GMAP_API,
    // })
    //   .then((response) => localStorage.setItem("pincode", response.pincode))
    //   .catch((error) => console.log(error));
    reverseMap(position.coords.latitude, position.coords.longitude);
    displayLocation(position.coords.latitude, position.coords.longitude);
  }

  function reverseMap(lat, lng) {
    if (
      (lat != null && lng != null) ||
      (lat != undefined && lng != undefined)
    ) {
      var latlng = new google.maps.LatLng(lat, lng);
      if (latlng != null || latlng != undefined) {
        var geocoder = (geocoder = new google.maps.Geocoder());
        geocoder.geocode({ latLng: latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              setLocationPopupShow(false);
              setLocationLoader(false);
              setSelectedAddress(results[1].formatted_address);
            }
          }
        });
      }
    }
  }

  function getLatandLongByAddress(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        if (
          (latitude != null && longitude != null) ||
          (latitude != undefined && longitude != undefined)
        ) {
          // getPincode(latitude, longitude);
          displayLocation(latitude, longitude);
        }
      }
    });
  }

  function displayLocation(latitude, longitude) {
    if (
      (latitude != null && longitude != null) ||
      (latitude != undefined && longitude != undefined)
    ) {
      var geocoder;
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(latitude, longitude);
      if (latlng != undefined || latlng != null) {
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
            alert("Geocoder failed due to: " + status);
          }
        });
      }
    }
  }

  {
    if (mobileView) {
      return (
        <Navbar expand="lg" className={`${styles.mobileNavBar} mobileNavBar`}>
          <Container className={styles.ContainerNavmob}>
            <Row>
              <Col xs={6} sm={6} md={6} className={styles.MobNavCol}>
                <Link href={"/"}>
                  <Navbar.Brand>
                    <div className={styles.brandLogo}>
                      <Image
                        fluid
                        src="/assets/icons/erip-logo-blue.png"
                        alt="Erip Logo"
                      />
                    </div>
                  </Navbar.Brand>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={6} className={styles.SubMainWrraper}>
                <div className={styles.SubWrraper}>
                  <Image
                    src="/assets/icons/mobile-header-cart.svg"
                    alt="header cart"
                    className={styles.CartSpace}
                    onClick={() => setCartAndOfferPopup(true)}
                  />
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={styles.mobileToggleButton}
                  />
                </div>
              </Col>
            </Row>

            <Navbar.Collapse id="basic-navbar-nav" ref={menuCollapse}>
              <Nav className="me-auto">
                {token ? null : (
                  <Nav.Link
                    href="#"
                    className={styles.mobileMenuLink}
                    onClick={() => setLoginPopup(true)}
                  >
                    Login
                  </Nav.Link>
                )}

                <Nav.Link
                  className={styles.mobileMenuLink}
                  onClick={() => router.push("/my-bookings")}
                >
                  My Bookings
                </Nav.Link>

                <Nav.Link
                  className={styles.mobileMenuLink}
                  onClick={() => router.push("/about-us")}
                >
                  About Us
                </Nav.Link>

                <Nav.Link
                  className={styles.mobileMenuLink}
                  onClick={() => router.push("/#")}
                >
                  Blogs
                </Nav.Link>

                {/* <Nav.Link href="#" className={styles.mobileMenuLink}>
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
            <LoginPopup show={loginPopup} onHide={() => setLoginPopup(false)} />
            <CartAndOffer
              show={cartandOfferPopup}
              onHide={() => setCartAndOfferPopup(false)}
            />
            <Logout
              show={logoutpopup}
              yesaction={() => LogoutAction()}
              noaction={() => setLogoutPopup(false)}
            />
          </Container>
          <Row>
            <Col xs={6} className={styles.LocationmobWrraper}>
              <div
                className={styles.LocationmobSub}
                onClick={() => setShowMobloc(!showMobloc)}
              >
                <Image src="/assets/icons/mobile-loc.png" alt="mob-loc" />
                <p className={styles.LocationText}>{locationselector.name}</p>
                <Image
                  src="/assets/icons/mobile-dropdown.png"
                  alt="mob-loc"
                  style={
                    showMobloc
                      ? { transform: "rotate(182deg)", transition: "0.5s ease" }
                      : null
                  }
                  className={styles.dropdownicons}
                />
              </div>
            </Col>
            <Modal
              show={showMobloc}
              onHide={() => setShowMobloc(false)}
              centered
              size="md"
              className="OfferPopup Searchpopups"
            >
              <Modal.Body style={{ height: "90vh" }}>
                <NavigationHandler backhandler={() => setShowMobloc(false)} />
                <div className={`${styles.SearchLocMob}`}>
                  <FiSearch className={styles.SearchIcon} />
                  <ReactGoogleAutocomplete
                    defaultValue={selectedAddress}
                    placeholder="Search city, area, pincode"
                    apiKey={GMAP_API}
                    onPlaceSelected={(place) => {
                      setLocationLoader(true);
                      setTimeout(() => {
                        if (place) {
                          setLocationLoader(false);
                          getLatandLongByAddress(place.formatted_address);
                        }
                      }, 3000);
                    }}
                    options={{
                      types: ["establishment"],
                      componentRestrictions: { country: "in" },
                    }}
                    className={styles.SearchBoxMob}
                  />
                </div>
                <p className={styles.InputOrText}>or</p>
                <div
                  className={styles.ModalHeadDetect}
                  onClick={() => getLocation()}
                >
                  <Image
                    src="/assets/icons/location-color.svg"
                    loading="lazy"
                    alt="Location"
                  />
                  <p className={styles.LocationDetectText}>
                    Detect My Location
                  </p>
                </div>
                <center>
                  {loactionloader && (
                    <Spinner
                      animation="border"
                      variant="primary"
                      className="ms-2"
                    />
                  )}
                </center>
              </Modal.Body>
            </Modal>
            <Col xs={12}>
              <div className={styles.Searchbar}>
                <FiSearch
                  size={25}
                  color="#0E62CB"
                  style={{ marginRight: "1rem" }}
                />
                <input
                  type="text"
                  placeholder="Search your brand or model"
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search.length <= 0 ? null : (
                  <div className={styles.SearchItems}>
                    {loadsSearch ? (
                      <center>
                        <Spinner
                          animation="border"
                          variant="primary"
                          className="ms-2"
                        />
                      </center>
                    ) : (
                      <ul className={styles.SearchLi}>
                        {categoriesSearch.map((v, i) => (
                          <li key={i}>
                            <Link
                              href={
                                v.category_flow_group == "1"
                                  ? {
                                      pathname: `${localStorage.getItem(
                                        "city"
                                      )}/${v.category_title.toLowerCase()}-repair`,
                                      // query: {
                                      //   issue: v.category_id,
                                      //   category: v.category_title,
                                      // },
                                    }
                                  : {
                                      pathname: "home-appliances",
                                      query: {
                                        issue: v.category_id,
                                        category: v.category_title,
                                      },
                                    }
                              }
                            >
                              <Row className={styles.SearchRow}>
                                <Col xs={3} md={3} lg={3} xl={3}>
                                  <Image
                                    alt="category img"
                                    src={v.category_image_url}
                                    fluid
                                    width={70}
                                  />
                                </Col>
                                <Col
                                  xs={9}
                                  md={9}
                                  lg={9}
                                  xl={9}
                                  className={styles.SearchTextCenter}
                                >
                                  <p className={styles.SearchText}>
                                    {v.category_title}
                                  </p>
                                </Col>
                                <hr className={styles.SearchHr} />
                              </Row>
                            </Link>
                          </li>
                        ))}
                        {brandsSearch.map((v, i) => (
                          <li key={i}>
                            <Link
                              href={
                                v.category_flow_group == "1"
                                  ? {
                                      pathname: `${localStorage.getItem(
                                        "city"
                                      )}/${v.category_title.toLowerCase()}-repair/${
                                        v.brand_title
                                      }`,
                                      // query: {
                                      //   issue: v.category_id,
                                      //   category: v.category_title,
                                      //   brand: v.brand_title,
                                      // },
                                    }
                                  : {
                                      pathname: "home-appliances",
                                      query: {
                                        issue: v.category_id,
                                        category: v.category_title,
                                        brand: v.brand_title,
                                      },
                                    }
                              }
                            >
                              <Row className={styles.SearchRow}>
                                <Col xs={3} md={3} lg={3} xl={3}>
                                  <Image
                                    alt="brand image"
                                    src={v.brand_image_url}
                                    fluid
                                    width={70}
                                  />
                                </Col>
                                <Col
                                  xs={9}
                                  md={9}
                                  lg={9}
                                  xl={9}
                                  className={styles.SearchTextCenter}
                                >
                                  <p className={styles.SearchText}>
                                    {v.category_title}
                                  </p>
                                </Col>
                                <hr className={styles.SearchHr} />
                              </Row>
                            </Link>
                          </li>
                        ))}
                        {modelsSearch.map((v, i) => (
                          <li key={i}>
                            <Link
                              href={
                                v.category_flow_group == "1"
                                  ? {
                                      pathname: `${localStorage.getItem(
                                        "city"
                                      )}/${v.category_title.toLowerCase()}-repair/${
                                        v.brand_title
                                      }/${v.model_title}`,
                                      // query: {
                                      //   issue: v.category_id,
                                      //   category: v.category_title,
                                      //   brand: v.brand_title,
                                      //   model: v.model_title,
                                      // },
                                    }
                                  : {
                                      pathname: "home-appliances",
                                      query: {
                                        issue: v.category_id,
                                        category: v.category_title,
                                        brand: v.brand_title,
                                        model: v.model_title,
                                      },
                                    }
                              }
                            >
                              <Row className={styles.SearchRow}>
                                <Col xs={3} md={3} lg={3} xl={3}>
                                  <Image
                                    alt="model img"
                                    src={v.model_image_url}
                                    fluid
                                    width={70}
                                  />
                                </Col>
                                <Col
                                  xs={9}
                                  md={9}
                                  lg={9}
                                  xl={9}
                                  className={styles.SearchTextCenter}
                                >
                                  <p className={styles.SearchText}>
                                    {v.model_title}
                                  </p>
                                </Col>
                                <hr className={styles.SearchHr} />
                              </Row>
                            </Link>
                          </li>
                        ))}
                        {segmentSearch.map((v, i) => (
                          <li key={i}>
                            <Link
                              href={
                                v.category_flow_group == "1"
                                  ? {
                                      pathname: `${localStorage.getItem(
                                        "city"
                                      )}/${v.category_title.toLowerCase()}-repair/${
                                        v.brand_title
                                      }/${v.model_title}`,
                                      // query: {
                                      //   issue: v.category_id,
                                      //   category: v.category_title,
                                      //   brand: v.brand_title,
                                      //   model: v.model_title,
                                      // },
                                    }
                                  : {
                                      pathname: "home-appliances",
                                      query: {
                                        issue: v.category_id,
                                        category: v.category_title,
                                      },
                                    }
                              }
                            >
                              <Row className={styles.SearchRow}>
                                <Col xs={3} md={3} lg={3} xl={3}>
                                  <Image
                                    alt="segment img"
                                    src={v.segment_image_url}
                                    fluid
                                    width={70}
                                  />
                                </Col>
                                <Col
                                  xs={9}
                                  md={9}
                                  lg={9}
                                  xl={9}
                                  className={styles.SearchTextCenter}
                                >
                                  <p className={styles.SearchText}>
                                    {v.segment_title}
                                  </p>
                                </Col>
                                <hr className={styles.SearchHr} />
                              </Row>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Navbar>
      );
    } else {
      return (
        <Navbar expand="lg" className={styles.navHeader}>
          <Container fluid className={styles.navBarTopHeader}>
            <Navbar.Brand>
              <Link href={"/"}>
                <div className={styles.brandLogo}>
                  <Image
                    fluid
                    src="/assets/icons/erip-logo-blue.png"
                    alt="Erip Logo"
                  />
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <div className={styles.Searchbar}>
                <FiSearch
                  size={25}
                  color="#0E62CB"
                  style={{ marginRight: "1rem" }}
                />
                <input
                  type="text"
                  placeholder="Search your brand or model"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {search.length <= 0 ? null : (
                <div className={styles.SearchItems}>
                  {loadsSearch ? (
                    <center>
                      <Spinner
                        animation="border"
                        variant="primary"
                        className="ms-2"
                      />
                    </center>
                  ) : (
                    <ul className={styles.SearchLi}>
                      {categoriesSearch.map((v, i) => (
                        <li key={i}>
                          <Link
                            href={
                              v.category_flow_group == "1"
                                ? {
                                    pathname: `${localStorage.getItem(
                                      "city"
                                    )}/${v.category_title.toLowerCase()}-repair`,
                                    // query: {
                                    //   issue: v.category_id,
                                    //   category: v.category_title,
                                    // },
                                  }
                                : {
                                    pathname: "home-appliances",
                                    query: {
                                      issue: v.category_id,
                                      category: v.category_title,
                                    },
                                  }
                            }
                          >
                            <Row className={styles.SearchRow}>
                              <Col xs={3} md={3} lg={3} xl={3}>
                                <Image
                                  alt="category img"
                                  src={v.category_image_url}
                                  fluid
                                  width={70}
                                />
                              </Col>
                              <Col
                                xs={9}
                                md={9}
                                lg={9}
                                xl={9}
                                className={styles.SearchTextCenter}
                              >
                                <p className={styles.SearchText}>
                                  {v.category_title}
                                </p>
                              </Col>
                              <hr className={styles.SearchHr} />
                            </Row>
                          </Link>
                        </li>
                      ))}
                      {brandsSearch.map((v, i) => (
                        <li key={i}>
                          <Link
                            href={
                              v.category_flow_group == "1"
                                ? {
                                    pathname: `${localStorage.getItem(
                                      "city"
                                    )}/${v.category_title.toLowerCase()}-repair/${
                                      v.brand_title
                                    }`,
                                    // query: {
                                    //   issue: v.category_id,
                                    //   category: v.category_title,
                                    //   brand: v.brand_title,
                                    // },
                                  }
                                : {
                                    pathname: "home-appliances",
                                    query: {
                                      issue: v.category_id,
                                      category: v.category_title,
                                      brand: v.brand_title,
                                    },
                                  }
                            }
                          >
                            <Row className={styles.SearchRow}>
                              <Col xs={3} md={3} lg={3} xl={3}>
                                <Image
                                  alt="brand img"
                                  src={v.brand_image_url}
                                  fluid
                                  width={70}
                                />
                              </Col>
                              <Col
                                xs={9}
                                md={9}
                                lg={9}
                                xl={9}
                                className={styles.SearchTextCenter}
                              >
                                <p className={styles.SearchText}>
                                  {v.category_title}
                                </p>
                              </Col>
                              <hr className={styles.SearchHr} />
                            </Row>
                          </Link>
                        </li>
                      ))}
                      {modelsSearch.map((v, i) => (
                        <li key={i}>
                          <Link
                            href={
                              v.category_flow_group == "1"
                                ? {
                                    pathname: `${localStorage.getItem(
                                      "city"
                                    )}/${v.category_title.toLowerCase()}-repair/${
                                      v.brand_title
                                    }/${v.model_title}`,
                                    // query: {
                                    //   issue: v.category_id,
                                    //   category: v.category_title,
                                    //   brand: v.brand_title,
                                    //   model: v.model_title,
                                    // },
                                  }
                                : {
                                    pathname: "home-appliances",
                                    query: {
                                      issue: v.category_id,
                                      category: v.category_title,
                                      brand: v.brand_title,
                                      model: v.model_title,
                                    },
                                  }
                            }
                          >
                            <Row className={styles.SearchRow}>
                              <Col xs={3} md={3} lg={3} xl={3}>
                                <Image
                                  alt="model imgs"
                                  src={v.model_image_url}
                                  fluid
                                  width={70}
                                />
                              </Col>
                              <Col
                                xs={9}
                                md={9}
                                lg={9}
                                xl={9}
                                className={styles.SearchTextCenter}
                              >
                                <p className={styles.SearchText}>
                                  {v.model_title}
                                </p>
                              </Col>
                              <hr className={styles.SearchHr} />
                            </Row>
                          </Link>
                        </li>
                      ))}
                      {segmentSearch.map((v, i) => (
                        <li key={i}>
                          <Link
                            href={
                              v.category_flow_group == "1"
                                ? {
                                    pathname: `${localStorage.getItem(
                                      "city"
                                    )}/${v.category_title.toLowerCase()}-repair/${
                                      v.brand_title
                                    }/${v.model_title}`,
                                    // query: {
                                    //   issue: v.category_id,
                                    //   category: v.category_title,
                                    //   brand: v.brand_title,
                                    //   model: v.model_title,
                                    // },
                                  }
                                : {
                                    pathname: "home-appliances",
                                    query: {
                                      issue: v.category_id,
                                      category: v.category_title,
                                    },
                                  }
                            }
                          >
                            <Row className={styles.SearchRow}>
                              <Col xs={3} md={3} lg={3} xl={3}>
                                <Image
                                  alt="segment img"
                                  src={v.segment_image_url}
                                  fluid
                                  width={70}
                                />
                              </Col>
                              <Col
                                xs={9}
                                md={9}
                                lg={9}
                                xl={9}
                                className={styles.SearchTextCenter}
                              >
                                <p className={styles.SearchText}>
                                  {v.segment_title}
                                </p>
                              </Col>
                              <hr className={styles.SearchHr} />
                            </Row>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className={styles.navBarcolor}>
              <Nav className="me-auto my-2 my-lg-0"></Nav>
              {/* location popup */}
              <div
                className={styles.navBarGeo}
                onClick={() => setLocationPopupShow(!locationPopupShow)}
              >
                <Image
                  id="dropdown_location"
                  src="/assets/icons/header-location.svg"
                  alt="header location"
                />

                <p id="dropdown_location">{locationselector.name}</p>
                <Image
                  id="dropdown_location"
                  src="/assets/icons/header-down-arrow.svg"
                  alt="header down arrow"
                />
              </div>

              <Image
                src="/assets/icons/header-cart.svg"
                alt="header cart"
                className={styles.navHeaderCart}
                onClick={() => {
                  !localStorage.getItem("token")
                    ? setLoginPopup(true)
                    : setCartAndOfferPopup(true);
                }}
              />
              {token ? (
                <Link href={"/my-bookings"}>
                  <div className={styles.FlexEnd}>
                    <BiUser size={30} />
                    <span
                      style={{
                        color: "#0E62CB",
                        fontSize: "20px",
                        fontWeight: "700",
                        margin: "0%",
                        marginLeft: "1rem",
                      }}
                    >
                      {profileData[0]?.user_fullname}
                    </span>
                  </div>
                </Link>
              ) : (
                <PrimaryButton
                  title={"Login"}
                  className={styles.headerLoginBtn}
                  clickHandler={() => setLoginPopup(true)}
                />
              )}
            </Navbar.Collapse>
          </Container>
          <Container fluid className="navBarBottomHeader">
            <Nav
              variant="pills"
              activeKey="1"
              className={styles.navDropMain}
              ref={menuCollapse}
            >
              {dropdowndata.map((v, i) => (
                <DropdownButton
                  title={v.title}
                  className="dropDownMenuHead"
                  key={i}
                  drop={v.drop}
                  onClick={() => v.handler()}
                >
                  {v.data.map((menu, menuIndex) => {
                    return (
                      <>
                        {v.title == dropdowndata[0].title ? (
                          <div key={menuIndex}>
                            <Dropdown.Item
                              eventKey="4.1"
                              className={styles.listedItemHead}
                            >
                              {menu.submenu}
                            </Dropdown.Item>

                            {menu.submenuItems &&
                              menu.submenuItems.map((model, index) => {
                                return (
                                  <Link
                                    key={index}
                                    href={{
                                      pathname: "personal-gadgets",
                                      query: { issue: model.model_id },
                                    }}
                                  >
                                    <Dropdown.Item eventKey="4.2">
                                      {model.model_title}
                                    </Dropdown.Item>
                                  </Link>
                                );
                              })}
                          </div>
                        ) : null}
                        {v.title == dropdowndata[1].title ? (
                          <Link
                            key={menuIndex}
                            href={{
                              pathname: "personal-gadgets",
                              query: { issue: menu.brand_id },
                            }}
                          >
                            <div>
                              <Dropdown.Item eventKey="4.2" key={menuIndex}>
                                {menu.brand_title}
                              </Dropdown.Item>
                            </div>
                          </Link>
                        ) : null}
                        {v.title == dropdowndata[2].title ? (
                          <Link
                            key={menuIndex}
                            href={{
                              pathname: "personal-gadgets",
                              query: { issue: menu.model_id },
                            }}
                          >
                            <div>
                              <Dropdown.Item
                                eventKey="4.2"
                                key={menuIndex}
                                onClick={() => {
                                  dispatch(selectCategory(1));
                                }}
                              >
                                {menu.model_title}
                              </Dropdown.Item>
                            </div>
                          </Link>
                        ) : null}
                        {v.title == dropdowndata[3].title ? (
                          <div key={menuIndex}>
                            <Dropdown.Item eventKey="4.2" key={menuIndex}>
                              {menu.length <= 0 ? "" : menu.model_title}
                            </Dropdown.Item>
                          </div>
                        ) : null}
                        {v.title == dropdowndata[4].title ? (
                          <div key={menuIndex}>
                            <Dropdown.Item eventKey="4.2" key={menuIndex}>
                              {menu.length <= 0 ? "" : menu.menuName}
                            </Dropdown.Item>
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </DropdownButton>
              ))}
              {/* <DropdownButton
                title={"Apple Products"}
                className="dropDownMenuHead"
                key={"Apple"}
                drop={"down"}
              >
                <div className="dropMenuDiv">
                  {appleHeaderData.map((menu, menuIndex) => {
                    return (
                      <div key={menuIndex}>
                        <Dropdown.Item
                          eventKey="4.1"
                          className={styles.listedItemHead}
                        >
                          {menu.submenu}
                        </Dropdown.Item>
                        {menu.submenuItems.map((model, index) => {
                          return (
                            <Link
                              key={index}
                              href={{
                                pathname: "personal-gadgets",
                                query: { issue: model.model_id },
                              }}
                            >
                              <Dropdown.Item eventKey="4.2">
                                {model.model_title}
                              </Dropdown.Item>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </DropdownButton>
              <DropdownButton
                title={"Top Brands"}
                className="dropDownMenuHead"
                key={"topbrands"}
                drop={"down"}
              >
                {topBrandsHeaderData.map((menu, menuIndex) => {
                  return (
                    <Link
                      key={menuIndex}
                      href={{
                        pathname: "personal-gadgets",
                        query: { issue: menu.brand_id },
                      }}
                    >
                      <div>
                        <Dropdown.Item eventKey="4.2" key={menuIndex}>
                          {menu.brand_title}
                        </Dropdown.Item>
                      </div>
                    </Link>
                  );
                })}
              </DropdownButton>
              <DropdownButton
                title={"Mobile Repairs"}
                className="dropDownMenuHead"
                key={"mobileRepair"}
                drop={"down"}
              >
                {mobileRepairHeaderData.map((menu, menuIndex) => {
                  return (
                    <Link
                      key={menuIndex}
                      href={{
                        pathname: "personal-gadgets",
                        query: { issue: menu.model_id },
                      }}
                    >
                      <div>
                        <Dropdown.Item
                          eventKey="4.2"
                          key={menuIndex}
                          onClick={() => {
                            dispatch(selectCategory(1));
                          }}
                        >
                          {menu.model_title}
                        </Dropdown.Item>
                      </div>
                    </Link>
                  );
                })}
              </DropdownButton>
              <DropdownButton
                title={"Top Issues"}
                className="dropDownMenuHead"
                key={"topIssues"}
                drop={"start"}
              >
                {topIssuesHeaderData.map((menu, menuIndex) => {
                  return (
                    <div key={menuIndex}>
                      <Dropdown.Item eventKey="4.2" key={menuIndex}>
                        {menu.length <= 0 ? "" : menu.model_title}
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </DropdownButton>
              <DropdownButton
                title={"More"}
                className="dropDownMenuHead"
                key={"more"}
                drop={"start"}
              >
                {moreMenu.map((menu, menuIndex) => {
                  return (
                    <div key={menuIndex}>
                      <Dropdown.Item eventKey="4.2" key={menuIndex}>
                        {menu.length <= 0 ? "" : menu.menuName}
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </DropdownButton> */}
            </Nav>
            <LoginPopup show={loginPopup} onHide={() => setLoginPopup(false)} />
            <CartAndOffer
              show={cartandOfferPopup}
              onHide={() => setCartAndOfferPopup(false)}
              backshow={() => setCartAndOfferPopup(true)}
            />
          </Container>
          <div
            className={`${styles.LocationSmallModal} ${
              locationPopupShow && styles.LocationModalVisible
            }`}
          >
            <div className={styles.ModalHeadDir}>
              <Image
                src="/assets/icons/gmap-location.svg"
                loading="lazy"
                alt="location"
              />
              <p className={styles.LocationText}>
                Please provide your location for best experience
              </p>
            </div>

            <div
              className={styles.ModalHeadDetect}
              onClick={() => getLocation()}
            >
              <Image
                src="/assets/icons/location-color.svg"
                loading="lazy"
                alt="location"
              />
              <p className={styles.LocationDetectText}>Detect My Location</p>
              {loactionloader && (
                <Spinner
                  animation="border"
                  variant="primary"
                  className="ms-2"
                />
              )}
            </div>
            <div className={styles.InputGroup}>
              <p className={styles.InputOrText}>or</p>
              <ReactGoogleAutocomplete
                defaultValue={selectedAddress}
                placeholder="Search city, area, pincode"
                apiKey={GMAP_API}
                onPlaceSelected={(place) => {
                  setLocationLoader(true);
                  setTimeout(() => {
                    if (place) {
                      getLatandLongByAddress(place.formatted_address);
                      setLocationLoader(false);
                    }
                  }, 3000);
                }}
                options={{
                  types: ["establishment"],
                  componentRestrictions: { country: "in" },
                }}
                className={styles.SearchBox}
              />
            </div>
          </div>
        </Navbar>
      );
    }
  }
}
