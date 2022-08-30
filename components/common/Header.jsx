import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "./PrimaryButton";
import { Image } from "react-bootstrap";
import { allProducts } from "utils/dropMenuDataApple";
import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "@/styles/components/common/Header.module.css";
import LoginPopup from "../Popups/LoginPopup";
import CartAndOffer from "../Popups/CartAndOffer";

export function Header() {
  const [mobileView, setMobileView] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [cartandOfferPopup, setCartAndOfferPopup] = useState(false);

  useEffect(() => {
    window.innerWidth < 992 ? setMobileView(true) : setMobileView(false);
  }, []);
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

  function showPosition(position) {
    alert(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
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
                  onClick={() => setLoginPopup(true)}
                >
                  Login
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
          </Container>
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
              <div className={styles.navBarGeo} onClick={() => getLocation()}>
                <Image
                  src="assets/icons/header-location.svg"
                  alt="header location"
                />
                <p>Bengaluru</p>
                <Image
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
                title="Login"
                className={styles.headerLoginBtn}
                clickHandler={() => setLoginPopup(true)}
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
          </Container>
        </Navbar>
      );
    }
  }
}
