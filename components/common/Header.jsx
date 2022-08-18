import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryButton from "./PrimaryButton";
import { Image } from "react-bootstrap";
import { allProducts } from "utils/dropMenuDataApple";
import styles from "@/styles/components/common/Header.module.css";

function Header() {
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
      <Container fluid className={styles.navBarBottomHeader}>
        <Nav variant="pills" activeKey="1" className={styles.navDropMain}>
          {allProducts.map((products, ind) => {
            return (
              <NavDropdown
                title={products.menuName}
                id="nav-dropdown"
                className={styles.dropDownMenuHead}
                key={ind}
              >
                <div>
                  {products.menus.map((menu, menuIndex) => {
                    return (
                      <div key={menuIndex}>
                        <NavDropdown.Item
                          eventKey="4.1"
                          className={styles.listedItemHead}
                        >
                          {menu.dropHead}
                        </NavDropdown.Item>
                        {menu.models.map((model, index) => {
                          return (
                            <NavDropdown.Item eventKey="4.2" key={index}>
                              {model.modelName}
                            </NavDropdown.Item>
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
                          <NavDropdown.Item
                            eventKey="4.1"
                            className={styles.listedItemHead}
                            style={
                              menu.dropHead === undefined
                                ? { display: "none" }
                                : null
                            }
                          >
                            {menu.dropHead}
                          </NavDropdown.Item>

                          {menu.models.map((model, index) => {
                            return (
                              <NavDropdown.Item eventKey="4.2" key={index}>
                                {model.modelName}
                              </NavDropdown.Item>
                            );
                          })}
                        </div>
                      );
                    })}
                </div>
              </NavDropdown>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
