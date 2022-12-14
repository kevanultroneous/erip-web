import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/About-Us/AboutFeature.module.css";
import { BsCheck } from "react-icons/bs";
import Container from "../common/Container";

function AboutFeature() {
  
  // feature data  
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
      <Container>
        <Row className={styles.aboutFeatureContainer}>
          <Col xl={4} md={10}>
            <div className={styles.aboutfeatureimage}>
              <Image
                fluid
                src="/assets/images/about-feature-image.png"
                alt="about feature image"
              />
            </div>
          </Col>
          <Col xl={8}>
            <div className={styles.aboutFeatureHeading}>
              <h2>Features</h2>
            </div>
            <Row>
              {/* Dynamic call for feature data */}
              {aboutFeatureData.map((featureData, ind) => {
                return (
                  <Col xl={6} key={ind} className={styles.featureData}>
                    <button className={styles.aboutFeatureCheckbox}>
                      <Image
                        src="/assets/icons/about-feature-tick.svg"
                        alt="about feature tick"
                      />
                    </button>
                    <span>{featureData.feature}</span>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutFeature;
