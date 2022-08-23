import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { searchDeviceData } from "utils/SearchByModelData";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";
import styles from "@/styles/components/SearchByModel/ModelHero.module.css";

function SelectDeviceHero() {
  const [categories, setcategories] = useState([]);
  const [brandData, setbrandData] = useState([{}]);
  const [models, setmodels] = useState([{}]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const categoryData = await axios.get(
      "http://43.204.87.153/api/v1/categories_by_cities?city=1"
    );
    setcategories(categoryData.data.data);
  };

  const getBrands = async (eventKey) => {
    const brandedData = await axios.get(
      `http://43.204.87.153/api/v1/brands_by_category?category=${eventKey}`
    );
    console.log();
    setbrandData(brandedData.data.data);
  };

  const getModels = async (eventKey) => {
    const modelData = await axios.get(
      `http://43.204.87.153/api/v1/models_by_brand?brand=${eventKey}`
    );
    setmodels(modelData.data.data);
  };

  return (
    <section className={styles.modelHeroContainer}>
      <Row className={styles.modelHeroRow}>
        <Col xl={2}>
          <Image
            fluid
            src="/assets/images/searchFilter.png"
            alt="search Filter"
          />
        </Col>
        <Col xl={10}>
          <h1>Mobile repair service in Bangalore</h1>
        </Col>
      </Row>
      <Row className={styles.selectDevice}>
        <Nav className={styles.selectDeviceNav}>
          <Col xl={3}>
            <div className={`${styles.selectButton} selectButton`}>
              <p>Step 1</p>
              <NavDropdown
                title={"Device"}
                id="nav-dropdown"
                onSelect={getBrands}
              >
                {categories.map((categories, ind) => {
                  return (
                    <NavDropdown.Item
                      eventKey={categories.category_id}
                      key={ind}
                      className={styles.navdropdown}
                    >
                      {categories.category_title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </div>
          </Col>
          <Col xl={3}>
            <div className={`${styles.selectButton} selectButton`}>
              <p>Step 2</p>
              <NavDropdown
                title={"Brand"}
                id="nav-dropdown"
                onSelect={getModels}
              >
                {brandData.map((brands, ind) => {
                  return (
                    <NavDropdown.Item
                      eventKey={brands.brand_id}
                      key={ind}
                      className={styles.navdropdown}
                    >
                      <div className={styles.brandLogoBox}>
                        <Image
                          fluid
                          src={brands.brand_icon_url}
                          alt={brands.brand_title}
                        />
                      </div>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </div>
          </Col>
          <Col xl={3}>
            <div className={`${styles.selectButton} selectButton`}>
              <p>Step 3</p>
              <NavDropdown title={"Model"} id="nav-dropdown">
                {models.map((models, ind) => {
                  return (
                    <NavDropdown.Item
                      eventKey={models.model_id}
                      key={ind}
                      className={styles.navdropdown}
                    >
                      {models.model_title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </div>
          </Col>
        </Nav>
      </Row>
    </section>
  );
}

export default SelectDeviceHero;
