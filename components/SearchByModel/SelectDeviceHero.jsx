import React, { useEffect, useRef, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";
import IssueComponent from "@/components/IssuePage/IssueComponent";

import style from "@/styles/components/personalGadgets/issuepage.module.css";
import styles from "@/styles/components/SearchByModel/SelectDeviceHero.module.css";
import MobileModels from "./MobileModels";
import { API_URL } from "utils/data";
import IssueTotalBill from "../IssuePage/IssueTotalBill";
import { AddToCart } from "pages/api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBrands,
  selectCategory,
  selectModels,
} from "redux/actions/issuePageActions/issuePageActions";
import {
  getPersonalGadgetsBrandSuccess,
  getPersonalGadgetsModelSuccess,
} from "redux/actions/personalGadgetActions/personalGadget";
import KnowMoreModal from "../HomeAppliances/KnowMoreModal";
import { getBrandsByCategory, getModelsByBrand } from "api/personalGadgetsApi";
import { useRouter } from "next/router";
import { CartByCity } from "api/cartbyCity";

function SelectDeviceHero({
  headClass,
  modelSection,
  quoteaction,
  token,
  homeQuery,
  categoryAvailable,
}) {
  const [categories, setcategories] = useState([]);
  const [brandData, setbrandData] = useState([{}]);
  const [models, setmodels] = useState([{}]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [cartButtonName, setcartButtonName] = useState([]);

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

  const [topBrands, setTopBrands] = useState(true);
  const [totalBrands, setTotalBrands] = useState(6);
  const [displayBrands, setDisplayBrands] = useState(true);

  // Use Selector
  // City ID
  const cityID = useSelector((state) => state.locationdata.city);
  const cityName = useSelector((state) => state.locationdata.name);

  // category brand model IDs
  const categoryID = useSelector((state) => state.issuePage.categoryID);
  const getBrandID = useSelector((state) => state.issuePage.brandID);
  const getModelID = useSelector((state) => state.issuePage.modelID);
  const issueID = useSelector((state) => state.issuePage.issueID);

  const [currentIssuids, setCurrentIssueIds] = useState(null);
  // personalGadgetsArrays
  const personalGadgetCategory = useSelector((state) => state.personalGadget);
  const personalGadgetBrands = useSelector(
    (state) => state.personalGadgetBrands
  );
  const personalGadgetModels = useSelector(
    (state) => state.personalGadgetModels
  );
  const personalGadgetIssues = useSelector(
    (state) => state.personalGadgetIssues
  );

  // selectgadgets
  const selectCategoryID = useSelector(
    (state) => state.categoryName.categoryName
  );
  const selectBrandsName = useSelector((state) => state.brandName.brandName);
  const selectModelsName = useSelector((state) => state.modelName.modelName);
  const catgeoryFromReducer =
    useSelector((state) => state.personalGadget.data) || categoryAvailable;
  const brandReducer = useSelector((state) => state.personalGadgetBrands.data);
  const modelReducer = useSelector((state) => state.personalGadgetModels.data);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    window.innerWidth < 662 ? setMobileView(true) : setMobileView(false);

    //  redirect for barnd and model category 
    getCategory();
    if (router.query.brand) {
      let queryIDforBrand = getBrandIDfromQuery(router.query.brand);

      if (queryIDforBrand !== undefined) getModels(queryIDforBrand);
    }
    if (router.query.model) {
      let queryIdforModel = getModelIDfroimQuery(router.query.model);

      if (queryIdforModel !== undefined) getModels(queryIdforModel);
    }

    return;
  }, [catgeoryFromReducer]);

  const cartdata = useSelector((state) => state.cartdata);
  const selectDrop = useRef();
  const categoryModel = useRef();

  const disableDrop = () => {
    selectDrop.current.classList.remove("show");
  };
  const [cartdatas, setCartDatas] = useState([]);

  //  add to cart
  const Carts = () => {
    CartByCity(localStorage.getItem("token"), localStorage.getItem("cityid"))
      .then((r) => {
        if (r.data.success) {
          setCartDatas(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  };
  // Carts();
  
//  Remove to cart
  const RemoveFromCart = (id) => {
    AddToCart(localStorage.getItem("token"), id)
      .then((response) => {
        if (response.data.success) {
        }
      })
      .catch((err) => {
        // alert(err);
        console.log(err);
      });
  };

  //  Issue api call & process api
  const getIssues = async (eventKey, key) => {
    const modelID = eventKey || key.target.accessKey;
    dispatch(selectModels(modelID));

    const issueURL = !token
      ? `${API_URL}api/v1/issues_by_models?model=${modelID}`
      : `${API_URL}api/v1/issues_by_models_detail?model=${modelID}&city=${cityID}`;

    await axios.get(issueURL).then((data) => {
      if (data.data.data !== undefined) {
        setDisplayIssues(true);
        setIssues(data.data.data);
      } else {
        setIssues([]);
      }
    });
    await getModelsByBrand(brandId)
      .then((data) => data.filter((model) => model.model_id == getModelID))
      .then((selectModel) => {
        if (selectModel[0]) {
          setModelName(selectModel[0].model_title);
          return selectModel[0].model_title;
        }
      })
      .then((modelTitle) => {
        if (modelTitle && router.query.model) {
          const href = `/${cityName}/${router.query.category}/${router.query.brand}/${modelTitle}`;
          router.push(href, href, { shallow: true });
        }
      });
  };

  // filter api call
  const getCategory = async () => {
    setcategories(
      catgeoryFromReducer.filter((category) => category.group_id == 1)
    );
    if (categoryID !== 0) {
      getBrands(categoryID);
    }
  };

  //  dispatch brand data 
  const getBrands = async (eventKey, key) => {
    dispatch(selectCategory(eventKey));
    // dispatch(selectCategoryName(cityID));
    await getBrandsByCategory(eventKey).then((data) => {
      if (data !== undefined) {
        setDisableBrands(false);
        setbrandData(data);
        dispatch(getPersonalGadgetsBrandSuccess(data));
      } else {
        setDisableBrands(true);
        // alert("No data found");
        setbrandData([]);
      }
    });
    const selectedCategory = catgeoryFromReducer.filter(
      (element) => element.category_id == eventKey || categoryID
    );
    if (selectedCategory[0]) {
      setCategoryName(selectedCategory[0].category_title);

      if (selectedCategory[0] && !router.query.brand && !router.query.model) {
        const href = `/${cityName}/${selectedCategory[0].category_title
          .replace(" ", "-")
          .toLowerCase()}-repair`;
        router.push(href, href, { shallow: true });
      }
    }
    setTopBrands(true);
    setDisplayIssues(false);
    setIssues([]);
    setDisableModel(true);
    setBrandName("Brands");
    setModelName("Models");
  };

  const getModels = async (eventKey, key) => {
    const getModelIdFromClick = eventKey || key.target.accessKey;
    dispatch(selectBrands(getModelIdFromClick));

    const modelData = await getModelsByBrand(getModelIdFromClick).then(
      (data) => {
        if (data !== undefined) {
          setDisableModel(false);
          setmodels(data);
          dispatch(getPersonalGadgetsModelSuccess(data));
        } else {
          // alert("no data");
          setDisableModel(true);
          setmodels([]);
        }
      }
    );
    setBrandId(getModelIdFromClick);
    await getBrandsByCategory(categoryID)
      .then((data) => data.filter((element) => element.brand_id == getBrandID))
      .then((selectBrand) => {
        if (selectBrand[0]) {
          setBrandName(selectBrand[0].brand_title);
          return selectBrand[0].brand_title;
        }
      })
      .then((selectBrandName) => {
        if (selectBrandName && !router.query.model) {
          const href = `/${cityName}/${router.query.category}/${selectBrandName}`;
          router.push(href, href, { shallow: true });
        }
      });
    setTopBrands(false);
    setDisplayIssues(false);
    setIssues([]);
    setModelName("Models");
  };

  const getBrandIDfromQuery = (name) => {
    if (brandReducer.length > 0)
      return brandReducer.filter((brands) => brands.brand_title == name)[0]
        .brand_id;
  };

  const getModelIDfroimQuery = (name) => {
    if (modelReducer.length > 0)
      return modelReducer.filter((model) => model.model_title == name)[0];
  };

  // const totalprice =
  //   cartdata == undefined
  //     ? 0
  //     : cartdata
  //         .map((issueMap) => Number(issueMap.issue_price))
  //         .reduce((a, b) => a + b);0

  const showMoreBrands = () => {
    setTotalBrands(brandData.length);
    setDisplayBrands(false);
  };

  const showLessBrands = () => {
    setTotalBrands(6);
    setDisplayBrands(true);
  };

  const handlingModal = (modalIssue) => {
    setModalData(modalIssue);
    setModal(!modal);
  };

  let heroCatName = "";
  const firstCap = () => {
    let firstLetter = categoryName.substring(0, 1);
    let smallLetter = categoryName.substring(1, categoryName.length);
    return (heroCatName = firstLetter + smallLetter.toLowerCase());
  };

  return (
    <div>
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
            <h1>
              {firstCap()} repair service in {cityName}
            </h1>
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
          <>
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
                                  className={styles.cateImg}
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
                                      fluid
                                      accessKey={brands.brand_id}
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
                      className={`${styles.selectButton} ${styles.getModels} selectButton getModels`}
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
            {brandData.length > 1 && topBrands && (
              <section className={styles.topBrands}>
                <h3>Top Brands</h3>
                <Row className={styles.topBrandsRow}>
                  {brandData.slice(0, totalBrands).map((brands) => {
                    return (
                      <Col
                        xl={2}
                        xs={4}
                        key={brands.brand_id}
                        onClick={(e) => getModels("", e)}
                      >
                        <Image
                          fluid
                          accessKey={brands.brand_id}
                          src={brands.brand_icon_url}
                          alt={brands.brand_title}
                        />
                      </Col>
                    );
                  })}
                </Row>
                {brandData.length > 6 && (
                  <button
                    onClick={displayBrands ? showMoreBrands : showLessBrands}
                  >
                    {displayBrands ? "View All" : "Show Less"}
                  </button>
                )}
              </section>
            )}
          </>
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
                  modalHandler={() => handlingModal(issues)}
                  addToCart={() => {
                    token ? RemoveFromCart(issues.issue_id) : quoteaction();
                  }}
                  buttonName={
                    token
                      ? // ? cartdatas.filter((cartIssueData) => {
                        //     cartIssueData.issue_id === issues.issue_id;
                        //   })
                        //   ? "Remove From Cart"
                        //   : "Add to Cart"
                        // : "Get Quote"
                        "Add to Cart"
                      : "Get Quote"
                  }
                />
              </Col>
            );
          })}
        </Row>
      )}
      {token && cartdata.length > 0 && (
        <IssueTotalBill totalPrice={totalprice} />
      )}
      <div>
        <KnowMoreModal
          show={modal}
          onHide={() => setModal(!modal)}
          key={modalData.issue_id}
          knowMoreTitle={modalData.issue_title}
          knowMoreHTMLBody={modalData.templates_description}
        />
      </div>
    </div>
  );
}

export default React.memo(SelectDeviceHero);
