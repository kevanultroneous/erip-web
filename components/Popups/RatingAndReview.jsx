import { Col, Form, Image, Modal, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/RatingAndReview.module.css";
import PrimaryButton from "../common/PrimaryButton";
import ReactStars from "react-rating-stars-component";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";

export default function RatingAndReview({ show, onHide }) {
  //
  const [ratings, setRatings] = useState(null);
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="RatingAndReview"
    >
      <Modal.Body className={styles.PopupBody}>
        <Row>
          <Col xs={9} md={9} lg={8} xl={8} className={styles.ItemCenter}>
            <p className={styles.ItemHeading}>Rating and Review</p>
          </Col>
          <Col xs={3} md={3} lg={4} xl={4} className={styles.ItemEnd}>
            <Image
              src={
                mobileView
                  ? "/assets/icons/blue-close.png"
                  : "/assets/icons/close.png"
              }
              onClick={onHide}
            />
          </Col>
        </Row>
        <Row>
          {mobileView && ratings != null ? (
            <Col
              xs={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.MobRatingDetails}
            >
              <Row>
                <Col xs={3}>
                  <div className={styles.ImageWrraper}>
                    <Image src={"/"} fluid />
                  </div>
                </Col>
                <Col xs={9}>
                  <p className={styles.PartnerName}>Mr Partner Name</p>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    isHalf={true}
                    color="#ffffff"
                    activeColor="#FEB546"
                    value={ratings}
                    classNames={styles.SelectedRatingMobSpace}
                  />
                </Col>
              </Row>
            </Col>
          ) : (
            <Col
              xs={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.RatingDetails}
            >
              <div className={styles.ImageWrraper}>
                <Image src={"/"} fluid />
              </div>
              <p className={styles.PartnerName}>Mr Partner Name</p>
            </Col>
          )}
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.RatingDetails}
            style={
              !(ratings == null) && mobileView == true
                ? { display: "none" }
                : null
            }
          >
            <p className={styles.PartnerSubHeading}>
              Please rate our partner and the service according to your
              experience
            </p>
            <ReactStars
              count={5}
              onChange={(e) => setRatings(e)}
              size={mobileView ? 40 : 50}
              edit={ratings !== null ? false : true}
              isHalf={true}
              value={ratings}
              color="#ffffff"
              activeColor="#feb546"
              classNames={styles.RatingMobSpace}
            />
          </Col>
          {!(ratings == null) ? (
            <div>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.SubHeadings}
              >
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
                className={styles.RatingDetailsRowMainCover}
              >
                <Row className={styles.RatingDetailsRow}>
                  {[
                    "Partner behaviour",
                    "ERIP website",
                    "Service",
                    "Everything was perfect",
                  ].map((v, i) => (
                    <Col xs={12} md={6} lg={5} xl={5} key={i}>
                      <div className={styles.CheckBoxCover}>
                        <Form.Check name="group1" type={"checkbox"} />
                        <p className={styles.CheckBoxTitle}>{v}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.RatingDetails}
              >
                <div>
                  <textarea
                    placeholder="Tell us more..."
                    rows={4}
                    cols={55}
                    className={styles.TellMore}
                  ></textarea>
                </div>
                <div className={styles.PrimaryButtonCover}>
                  {mobileView ? (
                    <div className={styles.ThankyouCover}>
                      <BsEmojiSmile color="#EB870E" size={20} />
                      <p className={styles.ThankyouText}>
                        Thankyou for your feedback
                      </p>
                    </div>
                  ) : null}

                  <PrimaryButton
                    title="Submit"
                    buttonStyle={{
                      color: "#ffffff",
                      background: "#0E62CB",
                      width: "100%",
                    }}
                  />
                </div>
              </Col>
            </div>
          ) : null}
        </Row>
      </Modal.Body>
    </Modal>
  );
}