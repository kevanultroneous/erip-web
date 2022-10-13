import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CategoryModels from "./CategoryModels";
import { BsChevronDown } from "react-icons/bs";
import { Col, Row, Image } from "react-bootstrap";
import BrandModels from "./BrandModels";
import Models from "./Model";
import { API_URL } from "utils/data";
import styles from "@/styles/components/SearchByModel/selectMobile.module.css";

function MobileModels({ getIssuesFromMobile, issues, setissues, homeQuery }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  const [categoryName, setCategoryName] = useState("Device");
  const [brandName, setBrandName] = useState("Brands");
  const [modelName, setModelName] = useState("Models");

  const [displayCategory, setDisplayCategory] = useState(false);
  const [displayBrands, setdisplayBrands] = useState(false);
  const [displayModels, setDisplayModels] = useState(false);

  const [disableBrandsClick, setDisableBrandsClick] = useState(false);
  const [disableModelsClick, setDisableModelsClick] = useState(false);

  const [brandId, setBrandId] = useState(0);

  const [topBrands, setTopBrands] = useState(true);
  const [totalBrands, setTotalBrands] = useState(3);
  const [showBrands, setShowBrands] = useState(true);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    await axios
      .get(`${API_URL}api/v1/categories_by_cities?city=1`)
      .then((data) => {
        setCategories(
          data.data.data.filter((category) => category.group_id == 1)
        );
      })
      .catch(() => setCategories([]));
    if (homeQuery) {
      getBrands(homeQuery);
      setTopBrands(true);
    }
  };

  const getBrands = async (categoryId) => {
    await axios
      .get(`${API_URL}api/v1/brands_by_category?category=${categoryId}`)
      .then((data) => {
        setdisplayBrands(true);
        setDisplayCategory(false);
        setDisableBrandsClick(true);
        if (data.data.data !== undefined) {
          setBrands(data.data.data);
        } else {
          // alert("no data");
          setBrands([]);
          setModels([]);
          setDisableModelsClick(false);
          setDisableBrandsClick(false);
          setdisplayBrands(false);
        }
      })
      .catch(() => setBrands([]));
    await axios
      .get(`${API_URL}api/v1/categories_by_cities?city=1`)
      .then((data) => {
        const category = data.data.data;
        category.forEach((element) => {
          if (element.category_id == categoryId) {
            setCategoryName(element.category_title);
          }
        });
      });
    setissues([]);
    setTopBrands(true);
    setBrandName("Brands");
    setModelName("Models");
  };

  const getModels = async (brandID) => {
    await axios
      .get(`${API_URL}api/v1/models_by_brand?brand=${brandID}`)
      .then((data) => {
        setdisplayBrands(false);
        setDisplayModels(true);
        setDisableModelsClick(true);
        if (data.data.data !== undefined) {
          setModels(data.data.data);
        } else {
          // alert("no data");
          setDisableModelsClick(false);
          setModels([]);
          setDisplayModels(false);
        }
      });
    setBrandId(brandID);
    await axios
      .get(`${API_URL}api/v1/brands_by_category?category=1`)
      .then((data) => {
        const model = data.data.data;
        model.forEach((element) => {
          if (element.brand_id == brandID) {
            setBrandName(element.brand_title);
          }
        });
      });
    setTopBrands(false);
    setissues([]);
    setModelName("Models");
  };

  const getIssues = async (issueID) => {
    await axios
      .get(`${API_URL}api/v1/models_by_brand?brand=${brandId}`)
      .then((data) => {
        const selectedModel = data.data.data;
        if (selectedModel) {
          selectedModel.forEach((model) => {
            if (model.model_id == issueID) {
              setModelName(model.model_title);
            }
          });
        }
      });
    getIssuesFromMobile(issueID);
    setDisplayModels(false);
  };
  const showMoreBrands = () => {
    setTotalBrands(brands.length);
    setShowBrands(false);
  };

  const showLessBrands = () => {
    setTotalBrands(3);
    setShowBrands(true);
  };

  return (
    <>
      <div className={styles.selectDeviceDependency}>
        <Row>
          <Col xs={6}>
            <div
              className={styles.selectDrop}
              onClick={() => setDisplayCategory(!displayCategory)}
            >
              <p>{categoryName}</p>
              <BsChevronDown className={styles.selectDropIcons} />
            </div>
            {displayCategory && (
              <CategoryModels
                heading={"Select your Gadget"}
                categoryArray={categories}
                clickHandler={getBrands}
                overlayHandling={() => {
                  setDisplayCategory(false);
                }}
              />
            )}
          </Col>
          <Col xs={6}>
            <div
              className={`${styles.selectDrop} ${
                disableBrandsClick ? null : styles.disabledClick
              }`}
              onClick={() => {
                disableBrandsClick ? setdisplayBrands(!displayBrands) : null;
              }}
            >
              <p>{brandName}</p>
              <BsChevronDown className={styles.selectDropIcons} />
              {displayBrands && (
                <BrandModels
                  heading={"Select your Brand"}
                  brandsArray={brands}
                  clickHandler={getModels}
                  overlayHandling={() => {
                    setdisplayBrands(false);
                  }}
                />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div
              className={`${styles.selectDrop} ${
                disableModelsClick ? null : styles.disabledClick
              }`}
              onClick={() => {
                disableModelsClick ? setDisplayModels(!displayModels) : null;
              }}
            >
              <p>{modelName}</p>
              <BsChevronDown className={styles.selectDropIcons} />
              {displayModels && (
                <Models
                  heading={"Select your Model"}
                  modelsArray={models}
                  clickHandler={getIssues}
                  overlayHandling={() => {
                    setDisplayModels(false);
                  }}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
      {brands.length > 1 && topBrands && (
        <section className={styles.topBrands}>
          <h3>Top Brands</h3>
          <Row className={styles.topBrandsRow}>
            {brands.slice(0, totalBrands).map((brands) => {
              return (
                <Col
                  xl={2}
                  xs={4}
                  key={brands.brand_id}
                  onClick={() => getModels(brands.brand_id)}
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
          {brands.length > 3 && (
            <button onClick={showBrands ? showMoreBrands : showLessBrands}>
              {showBrands ? "View All" : "Show Less"}
            </button>
          )}
        </section>
      )}
    </>
  );
}

export default MobileModels;
