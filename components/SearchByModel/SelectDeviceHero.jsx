import React, { useEffect, useRef, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { searchDeviceData } from "utils/SearchByModelData";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";
import CategoryModels from "./CategoryModels";
import IssueComponent from "@/components/IssuePage/IssueComponent";
import { issueData } from "utils/issueData";

import style from "@/styles/components/IssuePage/issuepage.module.css";
import styles from "@/styles/components/SearchByModel/SelectDeviceHero.module.css";
import MobileModels from "./MobileModels";
import { API_URL } from "utils/data";

function SelectDeviceHero({ headClass, modelSection }) {
  const [categories, setcategories] = useState([]);
  const [brandData, setbrandData] = useState([{}]);
  const [models, setmodels] = useState([{}]);
  const [mobileCat, setMobileCat] = useState([]);
  const [mobileBrands, setMobileBrands] = useState([]);
  const [mobileModels, setMobileModels] = useState([]);
  const [categoryName, setCategoryName] = useState("Device");
  const [brandName, setBrandName] = useState("Brands");
  const [modelName, setModelName] = useState("Models");
  const [mobileView, setMobileView] = useState(false);
  const [disableBrands, setDisableBrands] = useState(true);
  const [disableModel, setDisableModel] = useState(true);
  const [brandId, setBrandId] = useState(0);
  const [issues, setIssues] = useState([]);

  const getIssues = async (eventKey) => {
    await axios
      .get(`${API_URL}api/v1/issues_by_models_detail?model=${eventKey}&city=1`)
      .then((data) => {
        if (data.data.data !== undefined) {
          setIssues(data.data.data);
        } else {
          setIssues([]);
        }
      });
    await axios
      .get(`${API_URL}api/v1/models_by_brand?brand=${brandId}`)
      .then((data) => {
        const selectedModel = data.data.data;
        if (selectedModel) {
          selectedModel.forEach((model) => {
            if (model.model_id == eventKey) {
              setModelName(model.model_title);
            }
          });
        }
      });
  };

  useEffect(() => {
    window.innerWidth < 992 ? setMobileView(true) : setMobileView(false);
  }, []);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const categoryData = await axios
      .get(`${API_URL}api/v1/categories_by_cities?city=1`)
      .then((data) => {
        setcategories(data.data.data);
        setMobileCat(data.data.data);
      })
      .catch(() => setcategories([]));
  };

  const getBrands = async (eventKey) => {
    await axios
      .get(`${API_URL}api/v1/brands_by_category?category=${eventKey}`)
      .then((data) => {
        if (data.data.data !== undefined) {
          setDisableBrands(false);
          setbrandData(data.data.data);
        } else {
          setDisableBrands(true);
          console.log("No data found");
          setbrandData([]);
        }
      });
    await axios
      .get(`${API_URL}api/v1/categories_by_cities?city=1`)
      .then((data) => {
        const category = data.data.data;
        category.forEach((element) => {
          if (element.category_id == eventKey) {
            setCategoryName(element.category_title);
          }
        });
      });
    setIssues([]);
    setDisableModel(true);
    setBrandName("Brands");
    setModelName("Models");
  };

  const getModels = async (eventKey) => {
    const modelData = await axios
      .get(`${API_URL}api/v1/models_by_brand?brand=${eventKey}`)
      .then((data) => {
        if (data.data.data !== undefined) {
          setDisableModel(false);
          setmodels(data.data.data);
        } else {
          console.log("no data");
          setDisableModel(true);
          setmodels([]);
        }
      });
    setBrandId(eventKey);
    await axios
      .get(`${API_URL}api/v1/brands_by_category?category=1`)
      .then((data) => {
        const model = data.data.data;
        model.forEach((element) => {
          if (element.brand_id == eventKey) {
            setBrandName(element.brand_title);
          }
        });
      });
    setIssues([]);
    setModelName("Models");
  };

  const findBrands = async (id) => {
    await axios
      .get(`${API_URL}api/v1/brands_by_category?category=${id}`)
      .then((data) => {
        setMobileBrands(data.data.data);
      });
  };

  const selectDrop = useRef();
  const categoryModel = useRef();

  const disableDrop = () => {
    console.log(selectDrop.current.classList);
    selectDrop.current.classList.remove("show");
  };

  return (
    <>
      <section className={`${styles.modelHeroContainer} ${modelSection}`}>
        <Row className={`${styles.modelHeroRow} ${headClass}`}>
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
        {mobileView ? (
          <MobileModels
            getIssuesFromMobile={getIssues}
            issues={issues}
            setissues={setIssues}
          />
        ) : (
          <Row className={styles.selectDevice}>
            <Nav className={styles.selectDeviceNav}>
              <Row className={styles.selectDeviceFirstRow}>
                <Col xl={6} xs={6}>
                  <div className={`${styles.selectButton} selectButton`}>
                    <p>Step 1</p>
                    <NavDropdown
                      title={categoryName}
                      id="nav-dropdown"
                      onSelect={getBrands}
                      ref={selectDrop}
                    >
                      {categories.map((categories, ind) => {
                        return (
                          <NavDropdown.Item
                            eventKey={categories.category_id}
                            key={ind}
                            className={styles.navdropdown}
                          >
                            <div className={styles.categoryImages}>
                              <Image
                                fluid
                                src={categories.category_icon_url}
                                alt={categories.category_slug_01}
                              />
                            </div>
                            {categories.category_title}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  </div>
                </Col>
                <Col xl={6} xs={6}>
                  <div
                    className={`${styles.selectButton} selectButton getBrands`}
                  >
                    <p>Step 2</p>
                    <NavDropdown
                      title={brandName}
                      id="nav-dropdown"
                      onSelect={getModels}
                      disabled={disableBrands}
                      className={disableBrands && styles.disabledDrop}
                    >
                      <Row>
                        {brandData.map((brands, ind) => {
                          return (
                            <Col key={ind} xl={2}>
                              <NavDropdown.Item
                                eventKey={brands.brand_id}
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
                            </Col>
                          );
                        })}
                      </Row>
                    </NavDropdown>
                  </div>
                </Col>
              </Row>
              <Row className={styles.modelDropRow}>
                <Col xl={12} className={styles.modelDrop}>
                  <div
                    className={`${styles.selectButton} selectButton getModels`}
                  >
                    <p>Step 3</p>
                    <NavDropdown
                      title={modelName}
                      id="nav-dropdown"
                      onSelect={getIssues}
                      disabled={disableModel}
                      className={disableModel && styles.disabledDrop}
                    >
                      <Row>
                        {models.map((models, ind) => {
                          return (
                            <Col key={ind} xl={2}>
                              <NavDropdown.Item
                                eventKey={models.model_id}
                                key={ind}
                                className={styles.navdropdown}
                              >
                                <div className={styles.navDropBox}>
                                  <Image
                                    fluid
                                    src={models.model_image_url}
                                    alt={models.model_title}
                                  />
                                  {models.model_title}
                                </div>
                              </NavDropdown.Item>
                            </Col>
                          );
                        })}
                      </Row>
                    </NavDropdown>
                  </div>
                </Col>
              </Row>
            </Nav>
          </Row>
        )}
      </section>
      <h3 className={style.issuePageTitle}>Select your Repair Services</h3>
      <Row className={style.issuePageRow}>
        {issues.map((issues, index) => {
          return (
            <Col key={index} xl={4} md={6} className={style.issueColumn}>
              <IssueComponent
                issueName={issues.issue_title}
                issueOfferPrice={issues.discounted_price}
                issueOriginalPrice={issues.display_price}
                discountedPercentage={issues.discount_percentage}
                serviceTime={issues.repair_duration}
                warranty={issues.warranty_period}
                serviceType={issues.repair_type}
                href={"#"}
                buttonName={"Add to cart"}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default SelectDeviceHero;
