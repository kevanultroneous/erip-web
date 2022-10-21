import { Col, Image, Row } from "react-bootstrap";
import React from "react";
import styles from "@/styles/components/SearchByModel/MobileModel.module.css";

function CategoryModels({
  heading,
  categoryArray,
  overlayHandling,
  clickHandler,
}) {
  return (
    <section className={styles.modelContainer} onClick={overlayHandling}>
      <div className={styles.mobileDataContainer}>
        <div className={styles.modelHeader}>
          <h4>{heading}</h4>
        </div>
        <Row className={styles.categoryDataMobile}>

          {/* ------------------- Get category Data ----------------------------- */}
          {categoryArray.map((model, ind) => {
            return (
              <Col
                key={ind}
                xs={6}
                className={styles.categoryContainer}
                onClick={() => clickHandler(model.category_id)}
              >
                <div className={styles.categoryBox}>
                  <div className={styles.modelIcons}>
                    <Image
                      src={model.category_icon_url}
                      alt={model.category_icon}
                      fluid
                    />
                  </div>
                  <p>{model.category_title}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default CategoryModels;
