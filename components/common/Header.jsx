import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "./PrimaryButton";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import styles from "@/styles/components/common/Header.module.css";

export function Header() {
  const [mobileView, setMobileView] = useState(false);
  const [appleNavData, setAppleNavData] = useState([
    { subMenu: "iPhones", subMenuData: [] },
    { subMenu: "Macbooks", subMenuData: [] },
    { subMenu: "Smart Watches", subMenuData: [] },
    { subMenu: "iPads", subMenuData: [] },
  ]);
  const [navTopModel, setNavTopModel] = useState([]);
  const [navTopBrands, setNavTopBrands] = useState([]);
  const [navTopIssues, setNavTopIssues] = useState([]);

  useEffect(() => {
    window.innerWidth < 992 ? setMobileView(true) : setMobileView(false);
    // fetchNavData();
  }, []);

  // const fetchNavData = async () => {
  //   await axios
  //     .get("http://43.204.87.153/api/v1/cms/top_apple_products")
  //     .then((data) => {
  //       for (let i = 0; i < data.data.data_count; i++) {
  //         const products = data.data.data[i];

  //         if (products.model_is_mobile) {
  //           setAppleNavData((prevData) => {
  //             prevData.map((menuData, index) => {
  //               index == 0
  //                 ? { subMenu: "iPhones", subMenuData: [data.data.data] }
  //                 : menuData;
  //             });
  //           });
  //         } else if (products.model_is_laptop) {
  //           setAppleNavData((prevData) => {
  //             prevData.map((menuData, index) => {
  //               index == 1
  //                 ? { subMenu: "Macbooks", subMenuData: [data.data.data] }
  //                 : menuData;
  //             });
  //           });
  //         } else if (products.model_is_smartwatch) {
  //           setAppleNavData((prevData) => {
  //             prevData.map((menuData, index) => {
  //               index == 2
  //                 ? { subMenu: "Smart Watches", subMenuData: [data.data.data] }
  //                 : menuData;
  //             });
  //           });
  //         } else if (products.model_is_tablet) {
  //           setAppleNavData((prevData) => {
  //             prevData.map((menuData, index) => {
  //               index == 3
  //                 ? { subMenu: "iPads", subMenuData: [data.data.data] }
  //                 : menuData;
  //             });
  //           });
  //         }
  //       }
  //     });
  // };

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
            <Navbar.Collapse id="basic-navbar-nav" ref={menuCollapse}>
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
            {/* <Nav variant="pills" activeKey="1" className={styles.navDropMain}>
              <DropdownButton
                title={"Apple Products"}
                className="dropDownMenuHead"
                key={"down"}
                drop={"down"}
              >
                <div className="dropMenuDiv">
                  {console.log(appleNavData)}
                  {appleNavData.map((menu, menuIndex) => {
                    return (
                      <div key={menuIndex}>
                        <Dropdown.Item
                          eventKey="4.1"
                          className={styles.listedItemHead}
                        >
                          {menu.subMenu}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4.2" key={1}>
                          {menu.model_title}
                        </Dropdown.Item>
                      </div>
                    );
                  })}
                </div>
              </DropdownButton>
            </Nav> */}
          </Container>
        </Navbar>
      );
    }
  }
}
