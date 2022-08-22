import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "./PrimaryButton";
import { Image } from "react-bootstrap";
import { allProducts } from "utils/dropMenuDataApple";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "@/styles/components/common/Header.module.css";

export function Header() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);

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
              />
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className={styles.mobileToggleButton}
              />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={styles.mobileMenuLink}>
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
                <Nav.Link href="#link" className={styles.mobileMenuLink}>
                  Log out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
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
              <div className={styles.navBarGeo}>
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
              />
              <PrimaryButton title="Login" className={styles.headerLoginBtn} />
            </Navbar.Collapse>
          </Container>
          <Container fluid className="navBarBottomHeader">
            <Nav variant="pills" activeKey="1" className={styles.navDropMain}>
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
                                className="listedItemHead"
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
          </Container>
        </Navbar>
      );
    }
  }
}