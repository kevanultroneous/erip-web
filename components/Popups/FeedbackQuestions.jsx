import { useEffect, useState } from "react";
import { Col, Form, Image, Modal, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/components/Popups/FeedbackQuestions.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PrimaryButton from "../common/PrimaryButton";

export default function FeedbackQuestions({ show, onHide }) {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    initialSlide: 2,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          customPaging: function (i) {
            return <div className="dot"></div>;
          },
          dotsClass: "slick-dots slick-thumb",
        },
      },
      {
        breakpoint: 884,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          customPaging: function (i) {
            return <div className="dot"></div>;
          },
          dotsClass: "slick-dots slick-thumb",
        },
      },
    ],
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="FeedbackQuestions"
    >
      <Modal.Body className={styles.FeedbackQuestionsBody}>
        <Row>
          <Col xs={10} md={10} lg={8} xl={8}>
            <p className={styles.FQheading}>Feedback Questions</p>
          </Col>
          <Col xs={2} md={2} lg={4} xl={4} className={styles.FQclose}>
            <Image
              src={
                mobileView
                  ? "/assets/icons/blue-close.png"
                  : "/assets/icons/close.png"
              }
              onClick={onHide}
            />
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <Slider {...settings}>
              {[1, 2, 3].map((v, index) => (
                <div key={index}>
                  <p className={styles.Question}>
                    How was the technician {index} behavior?
                  </p>

                  <Row>
                    {[
                      "Option A",
                      "Option B",
                      "Option C",
                      "Option D",
                      "Option E",
                      "Option F",
                    ].map((v, i) => (
                      <Col xs={6} md={6} lg={6} xl={6} key={i}>
                        <div className={styles.CheckBoxCover}>
                          <div>
                            <Form.Check name={`group${index}`} type={"radio"} />
                          </div>
                          <div className={styles.CheckBoxTitleWrraper}>
                            <p className={styles.CheckBoxTitle}>{v}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Slider>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.RadioButtonWrraper}
          >
            <PrimaryButton
              title="Submit Feedback"
              buttonStyle={{
                width: "100%",
                background: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
