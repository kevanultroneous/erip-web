import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/About-Us/AboutFeature.module.css";
import { BsCheck } from "react-icons/bs";

function AboutFeature() {
  const aboutFeatureData = [
    {
      feature: "ISO Certified",
    },
    {
      feature: "Instant On-Demand Doorstep Service",
    },
    {
      feature: "100% Gauranteed Quality Spare Parts",
    },
    {
      feature: "Instant Reverts on Bookings",
    },
    {
      feature: "Industry Grade Technicians",
    },
    {
      feature: "Post-Service Payments",
    },
    {
      feature: "Continuous Monitoring of Repair Activies",
    },
    {
      feature: "Extended Warranty on Spare Parts",
    },
    {
      feature: "Guaranteed Repairs below 30 minutes on Selected Services",
    },
    {
      feature: "Collaboration with top E-waste NGOs",
    },
  ];
  return (
    <section>
      <Row className={styles.aboutFeatureContainer}>
        <Col xl={4}>
          <div className={styles.aboutfeatureimage}>
            <Image
              fluid
              src="/assets/images/about-feature-image.png"
              alt="about feature image"
            />
          </div>
        </Col>
        <Col xl={7}>
          <div className={styles.aboutFeatureHeading}>
            <h2>Features</h2>
          </div>
          <Row>
            {aboutFeatureData.map((featureData, ind) => {
              return (
                <Col xl={6} key={ind} className={styles.featureData}>
                  <button className={styles.aboutFeatureCheckbox}>
                    <BsCheck className={styles.aboutfeatureCheck} />
                  </button>
                  <span>{featureData.feature}</span>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default AboutFeature;
