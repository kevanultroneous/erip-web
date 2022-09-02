import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "./PrimaryButton";
import { Col, Image, Row } from "react-bootstrap";
import { allProducts } from "utils/dropMenuDataApple";
import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "@/styles/components/common/Header.module.css";
import LoginPopup from "../Popups/LoginPopup";
import CartAndOffer from "../Popups/CartAndOffer";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { GMAP_API } from "utils/data";
import { CityDetactionAPI, PincodeByCity, UserLogout } from "pages/api/api";
import { MatchCity } from "utils/utilsfunctions";
import Logout from "../Popups/Logout";
import { FiSearch } from "react-icons/fi";

export function Header() {
  const [mobileView, setMobileView] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [cartandOfferPopup, setCartAndOfferPopup] = useState(false);
  const [locationPopupShow, setLocationPopupShow] = useState(false);
  const [currentCity, setCurrentCity] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [cityData, setCityData] = useState([]);
  const [token, setToken] = useState(false);
  const [logoutpopup, setLogoutPopup] = useState(false);
  const [showMobloc, setShowMobloc] = useState(false);
  useEffect(() => {
    window.innerWidth < 992 ? setMobileView(true) : setMobileView(false);
    var modal = document.getElementById("dropdown_location");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
      setLoginPopup(false);
    } else {
      setToken(false);
    }
  });

  useEffect(() => {
    setLocationPopupShow(false);

    CityDetactionAPI()
      .then((r) => {
        setCityData(r.data.data);
      })
      .catch((e) => console.log(e));

    if (MatchCity(cityData, currentCity)) {
    } else {
      setSelectedAddress("");
    }

    if (localStorage.getItem("cityid")) {
      // PincodeByCity(1)
      //   .then((r) => console.log(r))
      //   .catch((e) => console.log(e));
    }
  }, [currentCity]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const menuCollapse = useRef();

  useEffect(() => {
    const handleScroll = (event) => {
      const scroll = window.scrollY;
      const menuOpen = menuCollapse.current.classList.contains("show");
      const childs = menuCollapse.current.children;

      for (let i = 0; i < childs.length; i++) {
        const element = childs[i];
        if (element.classList.contains("show")) {
          element.classList.remove("show");
        }
      }

      if (menuOpen) {
        if (scroll > 70) {
          menuCollapse.current.classList.remove("show");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function LogoutUser() {
    setLogoutPopup(true);
  }
  function LogoutAction() {
    UserLogout(localStorage.getItem("token"))
      .then((response) => {
        if (response.data.success) {
          alert(response.data.message);
          localStorage.removeItem("token");
          setLogoutPopup(false);
        }
        console.log(response);
      })
      .catch((e) => console.log("logout" + e));
  }
  function showPosition(position) {
    reverseMap(position.coords.latitude, position.coords.longitude);
    displayLocation(position.coords.latitude, position.coords.longitude);
  }
  function reverseMap(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = (geocoder = new google.maps.Geocoder());
    geocoder.geocode({ latLng: latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          setLocationPopupShow(false);
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
        displayLocation(latitude, longitude);
      }
    });
  }
  function displayLocation(latitude, longitude) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);
    var count, country, state, city;
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
  {
    if (mobileView) {
      return (
        <Navbar expand="lg" className={`${styles.mobileNavBar} mobileNavBar`}>
          <Container>
            <Navbar.Brand href="#">
              <div className={styles.brandLogo}>
                <Image
                  fluid
                  src="/assets/icons/erip-logo-blue.png"
                  alt="Erip Logo"
                />
              </div>
            </Navbar.Brand>
            <div>
              <Image
                src="assets/icons/mobile-header-cart.svg"
                alt="header cart"
                className={styles.CartSpace}
                onClick={() => setCartAndOfferPopup(true)}
              />
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className={styles.mobileToggleButton}
              />
            </div>

            <Navbar.Collapse id="basic-navbar-nav" ref={menuCollapse}>
              <Nav className="me-auto">
                <Nav.Link
                  href="#home"
                  className={styles.mobileMenuLink}
                  onClick={() => (token ? LogoutUser() : setLoginPopup(true))}
                >
                  {token ? "Logout" : "Login"}
                </Nav.Link>

                <Nav.Link href="#link" className={styles.mobileMenuLink}>
                  My Bookings
                </Nav.Link>
                <Nav.Link href="#link" className={styles.mobileMenuLink}>
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className={styles.mobileMenuLink}>
                  Blogs
                </Nav.Link>
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
                <p className={styles.LocationText}>Banglore</p>
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
            <Col xs={12}>
              <div
                style={
                  showMobloc
                    ? { display: "block", transition: "0.5s ease" }
                    : { display: "none", transition: "0.5s ease" }
                }
              >
                <div className={`${styles.SearchLocMob}`}>
                  <FiSearch className={styles.SearchIcon} />
                  <ReactGoogleAutocomplete
                    defaultValue={selectedAddress}
                    placeholder="Search city, area, pincode"
                    apiKey={GMAP_API}
                    onPlaceSelected={(place) =>
                      getLatandLongByAddress(place.formatted_address)
                    }
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
                  />
                  <p className={styles.LocationDetectText}>
                    Detect My Location
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Navbar>
      );
    } else {
      return (
        <Navbar expand="lg" className={styles.navHeader}>
          <Container fluid className={styles.navBarTopHeader}>
            <Navbar.Brand href="#">
              <div className={styles.brandLogo}>
                <Image
                  fluid
                  src="/assets/icons/erip-logo-blue.png"
                  alt="Erip Logo"
                />
              </div>
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
                  src="assets/icons/header-location.svg"
                  alt="header location"
                />

                <p id="dropdown_location">Bengaluru</p>
                <Image
                  id="dropdown_location"
                  src="assets/icons/header-down-arrow.svg"
                  alt="header down arrow"
                />
              </div>

              <Image
                src="assets/icons/header-cart.svg"
                alt="header cart"
                className={styles.navHeaderCart}
                onClick={() => setCartAndOfferPopup(true)}
              />

              <PrimaryButton
                title={token ? "Logout" : "Login"}
                className={styles.headerLoginBtn}
                clickHandler={() =>
                  token ? LogoutUser() : setLoginPopup(true)
                }
              />
            </Navbar.Collapse>
          </Container>
          <Container fluid className="navBarBottomHeader">
            <Nav
              variant="pills"
              activeKey="1"
              className={styles.navDropMain}
              ref={menuCollapse}
            >
              {allProducts.map((products, ind) => {
                return (
                  <DropdownButton
                    title={products.menuName}
                    className="dropDownMenuHead"
                    key={products.direction}
                    drop={products.direction}
                  >
                    <div className="dropMenuDiv">
                      {products.menus.map((menu, menuIndex) => {
                        return (
                          <div key={menuIndex}>
                            <Dropdown.Item
                              eventKey="4.1"
                              className={styles.listedItemHead}
                            >
                              {menu.dropHead}
                            </Dropdown.Item>
                            {menu.models.map((model, index) => {
                              return (
                                <Dropdown.Item eventKey="4.2" key={index}>
                                  {model.modelName}
                                </Dropdown.Item>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      {products.dualMenus.length > 0 &&
                        products.dualMenus.map((menu, menuIndex) => {
                          return (
                            <div key={menuIndex}>
                              <Dropdown.Item
                                eventKey="4.1"
                                className={styles.listedItemHead}
                                style={
                                  menu.dropHead === undefined
                                    ? { display: "none" }
                                    : null
                                }
                              >
                                {menu.dropHead}
                              </Dropdown.Item>

                              {menu.models.map((model, index) => {
                                return (
                                  <Dropdown.Item eventKey="4.2" key={index}>
                                    {model.modelName}
                                  </Dropdown.Item>
                                );
                              })}
                            </div>
                          );
                        })}
                    </div>
                  </DropdownButton>
                );
              })}
            </Nav>
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
          <div
            className={`${styles.LocationSmallModal} ${
              locationPopupShow && styles.LocationModalVisible
            }`}
          >
            <div className={styles.ModalHeadDir}>
              <Image src="/assets/icons/gmap-location.svg" loading="lazy" />
              <p className={styles.LocationText}>
                Please provide your location for best experience
              </p>
            </div>

            <div
              className={styles.ModalHeadDetect}
              onClick={() => getLocation()}
            >
              <Image src="/assets/icons/location-color.svg" loading="lazy" />
              <p className={styles.LocationDetectText}>Detect My Location</p>
            </div>
            <div className={styles.InputGroup}>
              <p className={styles.InputOrText}>or</p>
              <ReactGoogleAutocomplete
                defaultValue={selectedAddress}
                placeholder="Search city, area, pincode"
                apiKey={GMAP_API}
                onPlaceSelected={(place) =>
                  getLatandLongByAddress(place.formatted_address)
                }
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
