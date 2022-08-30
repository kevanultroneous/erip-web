import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CategoryModels from "./CategoryModels";
import { BsChevronDown } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/components/SearchByModel/selectMobile.module.css";
import BrandModels from "./BrandModels";
import Models from "./Model";

function MobileModels({ getIssuesFromMobile }) {
  const [categoryName, setCategoryName] = useState("Device");
  const [brandName, setBrandName] = useState("Brands");
  const [modelName, setModelName] = useState("Models");
  const [displayCategory, setDisplayCategory] = useState(false);
  const [displayBrands, setdisplayBrands] = useState(false);
  const [displayModels, setDisplayModels] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [disableBrandsClick, setDisableBrandsClick] = useState(false);
  const [disableModelsClick, setDisableModelsClick] = useState(false);
  const [brandId, setBrandId] = useState(0);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    await axios
      .get("http://43.204.87.153/api/v1/categories_by_cities?city=1")
      .then((data) => {
        setCategories(data.data.data);
      })
      .catch(() => setCategories([]));
  };

  const getBrands = async (categoryId) => {
    await axios
      .get(
        `http://43.204.87.153/api/v1/brands_by_category?category=${categoryId}`
      )
      .then((data) => {
        setdisplayBrands(true);
        setDisplayCategory(false);
        if (data.data.data !== undefined) {
          setBrands(data.data.data);
        } else {
          setBrands([]);
          setdisplayBrands(false);
        }
      })
      .catch(() => setBrands([]));
    await axios
      .get("http://43.204.87.153/api/v1/categories_by_cities?city=1")
      .then((data) => {
        const category = data.data.data;
        category.forEach((element) => {
          if (element.category_id == categoryId) {
            setCategoryName(element.category_title);
          }
        });
      });
    setBrandName("Brands");
    setModelName("Models");
  };

  const getModels = async (brandID) => {
    await axios
      .get(`http://43.204.87.153/api/v1/models_by_brand?brand=${brandID}`)
      .then((data) => {
        setdisplayBrands(false);
        setDisplayModels(true);
        if (data.data.data !== undefined) {
          setModels(data.data.data);
        } else {
          setModels([]);
          setDisplayModels(false);
        }
      });
    setBrandId(brandID);
    await axios
      .get("http://43.204.87.153/api/v1/brands_by_category?category=1")
      .then((data) => {
        const model = data.data.data;
        model.forEach((element) => {
          if (element.brand_id == brandID) {
            setBrandName(element.brand_title);
          }
        });
      });
    setBrandName("Brands");
    setModelName("Models");
  };

  const getIssues = async (issueID) => {
    await axios
      .get(`http://43.204.87.153/api/v1/models_by_brand?brand=${brandId}`)
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
    setModelName("Models");
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
              className={styles.selectDrop}
              onClick={() => setdisplayBrands(!displayBrands)}
            >
              <p>{brandName}</p>
              <BsChevronDown className={styles.selectDropIcons} />
              {displayBrands && (
                <BrandModels
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
              className={styles.selectDrop}
              onClick={() => setDisplayModels(!displayModels)}
            >
              <p>{modelName}</p>
              <BsChevronDown className={styles.selectDropIcons} />
              {displayModels && (
                <Models
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
    </>
  );
}

export default MobileModels;
