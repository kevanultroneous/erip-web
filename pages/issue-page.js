import { Header } from "@/components/common/Header";
import IssueComponent from "@/components/IssuePage/IssueComponent";
import { issueData } from "utils/issueData";
import { Col, Row } from "react-bootstrap";
import React from "react";
import styles from "@/styles/components/IssuePage/issuepage.module.css";
import IssueTotalBill from "@/components/IssuePage/IssueTotalBill";
import SelectDeviceHero from "@/components/SearchByModel/SelectDeviceHero";

function issuePage() {
  return (
    <>
      <Header />
      <SelectDeviceHero
        headClass={styles.selectDeviceHero}
        modelSection={styles.selectDeviceSection}
      />
      <h3 className={styles.issuePageTitle}>Select your Repair Services</h3>
      <Row className={styles.issuePageRow}>
        {issueData.map((issues, index) => {
          return (
            <Col key={index} xl={4} md={6} className={styles.issueColumn}>
              <IssueComponent
                issueImage={issues.issueImage}
                issueAlt={issues.issueAlt}
                issueName={issues.issueName}
                issueOfferPrice={issues.issueOfferPrice}
                issueOriginalPrice={issues.issueOriginalPrice}
                serviceTime={issues.serviceTime}
                warranty={issues.warranty}
                serviceType={issues.serviceType}
                href={issues.href}
                addToCart={issues.addToCart}
                buttonName={issues.buttonName}
              />
            </Col>
          );
        })}
      </Row>
      <IssueTotalBill />
    </>
  );
}

export default issuePage;
