import { Col, Image, Row } from "react-bootstrap";
import React from "react";
import styles from "@/styles/components/SearchByModel/MobileModel.module.css";

function Models({ heading, modelsArray, overlayHandling, clickHandler }) {
  return (
    <section className={styles.modelContainer} onClick={overlayHandling}>
      <div className={styles.mobileDataContainer}>
        <div className={styles.modelHeader}>
          <h4>{heading}</h4>
        </div>
        <Row className={styles.categoryDataMobile}>
          {modelsArray.map((models, ind) => {
            return (
              <Col
                key={ind}
                xs={6}
                className={styles.categoryContainer}
                onClick={() => clickHandler(models.model_id)}
              >
                <div className={styles.categoryBox}>
                  <div>
                    <Image
                      src={models.model_image_url}
                      alt={models.model_slug_01}
                      fluid
                    />
                  </div>
                  <p>{models.model_title}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default Models;
