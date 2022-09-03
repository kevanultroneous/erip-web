import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/components/IssuePage/IssueComponent.module.css";
import PrimaryButton from "../common/PrimaryButton";

function IssueComponent({
  issueImage,
  issueAlt,
  issueName,
  issueOfferPrice,
  issueOriginalPrice,
  serviceTime,
  warranty,
  serviceType,
  href,
  addToCart,
  buttonName,
  discountedPercentage,
  loggedIn,
}) {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);
  if (mobileView) {
    return (
      <div className={styles.issueMobileDiv}>
        <Row>
          <Col xs={2}>
            <div className={styles.issueImage}>
              <Image fluid src={issueImage} alt={issueName} />
            </div>
          </Col>
          <Col xs={6}>
            <h5 className={styles.issueName}>{issueName}</h5>
            <p>
              <span className={styles.issueOriginalPrice}>
                {" "}
                ₹{issueOriginalPrice}{" "}
              </span>
              <span className={styles.issueOffer}>
                ({discountedPercentage}% OFF)
              </span>
            </p>
          </Col>
          <Col xs={4} className={styles.mobilePrice}>
            <p className={styles.issueOfferPrice}>₹{issueOfferPrice}</p>
            <Link href={href}>
              <a className={styles.issueLink}>Know More</a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p className={styles.issueDetails}>Service Time: {serviceTime}</p>
            <p className={styles.issueDetails}>Warranty: {warranty}</p>
            <p className={styles.issueDetails}>Service Type: {serviceType}</p>
          </Col>
          <Col xs={6} className={styles.issueMobileButton}>
            <PrimaryButton
              title={buttonName}
              clickHandler={addToCart}
              customClass={styles.issuePrimaryButton}
            />
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div className={styles.issueContainer}>
      <div className={styles.issueRow}>
        <Col xl={3} className={styles.issueImageBox}>
          <div className={styles.issueImage}>
            <Image fluid src={issueImage} alt={issueAlt} />
          </div>
        </Col>
        <Col xl={9}>
          <div className={styles.issueCopy}>
            <h5 className={styles.issueName}>{issueName}</h5>
            {loggedIn && (
              <p>
                <span className={styles.issueOfferPrice}>
                  ₹{issueOfferPrice}
                </span>
                <span className={styles.issueOriginalPrice}>
                  {" "}
                  ₹{issueOriginalPrice}{" "}
                </span>
                <span className={styles.issueOffer}>
                  ({discountedPercentage}% OFF)
                </span>
              </p>
            )}
            <div>
              <p className={styles.issueDetails}>Service Time: {serviceTime}</p>
              <p className={styles.issueDetails}>Warranty: {warranty}</p>
              <p className={styles.issueDetails}>Service Type: {serviceType}</p>
              <Link href={href}>
                <a className={styles.issueLink}>Know More</a>
              </Link>
            </div>
            <PrimaryButton
              title={buttonName}
              clickHandler={addToCart}
              customClass={styles.issuePrimaryButton}
            />
          </div>
        </Col>
      </div>
    </div>
  );
}

export default IssueComponent;
