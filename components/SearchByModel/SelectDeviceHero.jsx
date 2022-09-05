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
import IssueTotalBill from "../IssuePage/IssueTotalBill";
import { AddToCart } from "pages/api/api";

function SelectDeviceHero({
  headClass,
  modelSection,
  quoteaction,
  token,
  homeQuery,
}) {
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
  const [cartIssues, setCartIssues] = useState([]);
  const [displayIssues, setDisplayIssues] = useState(false);

  useEffect(() => {
    window.innerWidth < 662 ? setMobileView(true) : setMobileView(false);
  }, []);

  const selectDrop = useRef();
  const categoryModel = useRef();

  const disableDrop = () => {
    console.log(selectDrop.current.classList);
    selectDrop.current.classList.remove("show");
  };

  const getIssues = async (eventKey, key) => {
    const issueURL = !token
      ? mobileView
        ? `${API_URL}api/v1/issues_by_models_detail?model=${eventKey}&city=1`
        : `${API_URL}api/v1/issues_by_models?model=${key.target.accessKey}`
      : mobileView
      ? `${API_URL}api/v1/issues_by_models_detail?model=${eventKey}&city=1`
      : `${API_URL}api/v1/issues_by_models_detail?model=${key.target.accessKey}&city=1`;
    await axios.get(issueURL).then((data) => {
      if (data.data.data !== undefined) {
        setDisplayIssues(true);
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
            if (model.model_id == key.target.accessKey) {
              setModelName(model.model_title);
            }
          });
        }
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const AddTOcartAction = (issueid) => {
    AddToCart(localStorage.getItem("token"), issueid)
      .then((r) => {
        if (r.data.success) {
          alert(r.data.message);
        } else {
          alert(r.data.message);
        }
      })
      .catch((e) => console.log(e));
  };
  const getCategory = async () => {
    await axios
      .get(`${API_URL}api/v1/categories_by_cities?city=1`)
      .then((data) => {
        setcategories(data.data.data);
        setMobileCat(data.data.data);
      })
      .catch(() => setcategories([]));
    if (homeQuery) {
      getBrands(homeQuery);
    }
  };

  const getBrands = async (eventKey, key) => {
    await axios
      .get(`${API_URL}api/v1/brands_by_category?category=${eventKey}`)
      .then((data) => {
        if (data.data.data !== undefined) {
          setDisableBrands(false);
          setbrandData(data.data.data);
        } else {
          setDisableBrands(true);
          alert("No data found");
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
    setDisplayIssues(false);
    setIssues([]);
    setDisableModel(true);
    setBrandName("Brands");
    setModelName("Models");
  };

  const getModels = async (eventKey, key) => {
    const modelData = await axios
      .get(`${API_URL}api/v1/models_by_brand?brand=${key.target.accessKey}`)
      .then((data) => {
        if (data.data.data !== undefined) {
          setDisableModel(false);
          setmodels(data.data.data);
        } else {
          alert("no data");
          setDisableModel(true);
          setmodels([]);
        }
      });
    setBrandId(key.target.accessKey);
    await axios
      .get(`${API_URL}api/v1/brands_by_category?category=1`)
      .then((data) => {
        const model = data.data.data;
        model.forEach((element) => {
          if (element.brand_id == key.target.accessKey) {
            setBrandName(element.brand_title);
          }
        });
      });
    setDisplayIssues(false);
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

  const totalprice =
    cartIssues.length <= 0
      ? 0
      : cartIssues
          .map((issueMap) => Number(issueMap.discounted_price))
          .reduce((a, b) => a + b);

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
            homeQuery={homeQuery}
            getIssuesFromMobile={getIssues}
            issues={issues}
            setissues={setIssues}
          />
        ) : (
          <Row className={styles.selectDevice}>
            <Nav className={styles.selectDeviceNav}>
              <Row className={styles.selectDeviceFirstRow}>
                <Col xl={4} xs={6}>
                  <div
                    className={`${styles.selectButton} selectButton getCategory`}
                  >
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
                            accessKey={categories.category_id}
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
                <Col xl={4} xs={6}>
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
                            <Col key={ind} xl={2} md={6}>
                              <NavDropdown.Item
                                // eventKey={brands.brand_id}
                                className={styles.navdropdown}
                                accessKey={brands.brand_id}
                              >
                                <div className={styles.brandLogoBox}>
                                  <Image
                                    accessKey={brands.brand_id}
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
                <Col xl={4} className={styles.modelDrop}>
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
                            <Col key={ind} xl={2} md={4}>
                              <NavDropdown.Item
                                // eventKey={models.model_id}
                                key={ind}
                                className={styles.navdropdown}
                              >
                                <div className={styles.navDropBox}>
                                  <Image
                                    accessKey={models.model_id}
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
      {displayIssues && (
        <h3 className={style.issuePageTitle}>Select your Repair Services</h3>
      )}
      {displayIssues && (
        <Row className={style.issuePageRow}>
          {issues.map((issues, index) => {
            return (
              <Col key={index} xl={4} md={6} className={style.issueColumn}>
                <IssueComponent
                  issueImage={"/assets/images/issue-images.png"}
                  issueName={issues.issue_title}
                  loggedIn={token}
                  issueOfferPrice={issues.discounted_price}
                  issueOriginalPrice={issues.display_price}
                  discountedPercentage={issues.discount_percentage}
                  serviceTime={issues.repair_duration}
                  warranty={issues.warranty_period}
                  serviceType={issues.repair_type}
                  href={"#"}
                  addToCart={() => {
                    setCartIssues((previssues) => [...previssues, issues]);
                    token ? AddTOcartAction(issues.issue_id) : quoteaction();
                  }}
                  buttonName={token ? "Add to cart" : "Get Quote"}
                />
              </Col>
            );
          })}
        </Row>
      )}
      {token && cartIssues.length > 0 && (
        <IssueTotalBill totalPrice={totalprice} />
      )}
    </>
  );
}

export default SelectDeviceHero;
