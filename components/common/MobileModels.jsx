import { Col, Image, Row } from "react-bootstrap";
import React from "react";
import styles from "@/styles/components/common/MobileModel.module.css";

function MobileModels({
  heading,
  deviceArray,
  clickHandler,
  imageurl,
  atlImage,
  imageTitle,
}) {
  return (
    <section className={styles.modelContainer}>
      <div className={styles.mobileDataContainer}>
        <div className={styles.modelHeader}>
          <h4>{heading}</h4>
        </div>
        <Row className={styles.categoryDataMobile}>
          {deviceArray.map((model, ind) => {
            return (
              <Col
                key={ind}
                xs={6}
                className={styles.categoryContainer}
                onClick={() => clickHandler(model.category_id)}
              >
                <div className={styles.categoryBox}>
                  <div>
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

export default MobileModels;
