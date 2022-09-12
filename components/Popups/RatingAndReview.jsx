import { Col, Form, Image, Modal, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/RatingAndReview.module.css";
import PrimaryButton from "../common/PrimaryButton";
import ReactStars from "react-rating-stars-component";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

export default function RatingAndReview({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="RatingAndReview"
    >
      <Modal.Body>
        <Row>
          <Col xs={8} md={8} lg={8} xl={8} className={styles.ItemCenter}>
            <p className={styles.ItemHeading}>Rating and Review</p>
          </Col>
          <Col xs={4} md={4} lg={4} xl={4} className={styles.ItemEnd}>
            <Image src="/assets/icons/close.png" onClick={onHide} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.RatingDetails}>
            <div className={styles.ImageWrraper}>
              <Image src={"/"} fluid />
            </div>
            <p className={styles.PartnerName}>Mr Partner Name</p>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.RatingDetails}>
            <p className={styles.PartnerSubHeading}>
              Please rate our partner and the service according to your
              experience
            </p>
            <ReactStars
              count={5}
              //   onChange={ratingChanged}
              size={50}
              isHalf={true}
              color="#ffffff"
              activeColor="#feb546"
            />
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.SubHeadings}>
            <h6 className={styles.SubHeadingOne}>
              What could have been better?
            </h6>
            <p className={styles.SubHeadingTwo}>
              You can select multiple options
            </p>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className="d-flex justify-content-center"
          >
            <Row className={styles.RatingDetailsRow}>
              {[
                "Partner behaviour",
                "ERIP website",
                "Service",
                "Everything was perfect",
              ].map((v, i) => (
                <Col xs={12} md={5} lg={5} xl={5} key={i}>
                  <div className={styles.CheckBoxCover}>
                    <Form.Check name="group1" type={"checkbox"} />
                    <p className={styles.CheckBoxTitle}>{v}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12} className={styles.RatingDetails}>
            <div>
              <textarea
                placeholder="Tell us more..."
                rows={4}
                cols={55}
                className={styles.TellMore}
              ></textarea>
            </div>
            <PrimaryButton
              title="Submit"
              buttonStyle={{
                color: "#ffffff",
                background: "#0E62CB",
                width: "100%",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
