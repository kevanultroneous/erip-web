import { Col, Image, Row } from "react-bootstrap";
import React from "react";
import styles from "@/styles/components/SearchByModel/MobileModel.module.css";

function BrandModels({ heading, brandsArray, overlayHandling, clickHandler }) {
  return (
    <section className={styles.modelContainer} onClick={overlayHandling}>
      <div className={styles.mobileDataContainer}>
        <div className={styles.modelHeader}>
          <h4>{heading}</h4>
        </div>
        {/*  Get brand data  */}
        <Row className={styles.categoryDataMobile}>
          {brandsArray.map((brands, ind) => {
            return (
              <Col
                key={ind}
                xs={6}
                className={styles.categoryContainer}
                onClick={() => clickHandler(brands.brand_id)}
              >
                <div className={styles.categoryBox}>
                  <div className={styles.modelIcons}>
                    <Image
                      src={brands.brand_icon_url}
                      alt={brands.brand_slug_01}
                      fluid
                    />
                  </div>
                  <p>{brands.brand_title}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default BrandModels;
