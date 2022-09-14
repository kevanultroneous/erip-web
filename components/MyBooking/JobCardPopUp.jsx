import React, { useState } from "react";
import { Button, Col, Image, InputGroup, Modal, Row } from "react-bootstrap";

import styles from "@/styles/components/MyBooking/JobCard.module.css";
import { BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import { useRef } from "react";
import { MdDownload } from "react-icons/md";
import ReactToPrint from "react-to-print";
import DownloadComponent from "../common/downloadComponent";

function JobCardPopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const jobCardRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reactToPrintContent = React.useCallback(() => {
    if (jobCardRef.current.dialog.children[0]) {
      return jobCardRef.current.dialog.children[0];
    }
  }, [jobCardRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    return <MdDownload />;
  }, []);

  // console.log(jobCardRef.current.dialog.children[0]);

  return (
    <>
      <Button
        onClick={handleShow}
        className={styles.popUpButton}
        variant={"outline-primary"}
      >
        <p>View Job Card</p>
        <BsChevronRight />
      </Button>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName={`${styles.modelWidth} modelWidth`}
          centered
          ref={jobCardRef}
          className="jobCard"
        >
          <Modal.Header className={styles.orderNumber}>
            <p>Order Number - 0000007</p>
            <DownloadComponent
              title={"Order Number - 0000007"}
              content={reactToPrintContent}
            />
          </Modal.Header>
          <Modal.Body>
            <Row className={styles.orderDetailsTitle}>
              <h5>Customer Details</h5>
            </Row>
            <div>
              <Row className={styles.nameSection}>
                <Col xl={3}>
                  <div>
                    <p>Full Name</p>
                    <input type="text" value={""} disabled />
                  </div>
                </Col>
                <Col xl={3} xs={6}>
                  <div>
                    <p>Contact Number</p>
                    <input type="tel" value={""} disabled />
                  </div>
                </Col>
                <Col xl={3} xs={6}>
                  <div>
                    <p>Email Address</p>
                    <input type="email" value={""} disabled />
                  </div>
                </Col>
                <Col xl={3}>
                  <div>
                    <p>Date</p>
                    <input type="text" value={""} disabled />
                  </div>
                </Col>
              </Row>
              <Row className={styles.nameSection}>
                <Col xl={6}>
                  <div>
                    <p>Address</p>
                    <input type="text" value={""} disabled />
                  </div>
                </Col>
                <Col xl={3} xs={6}>
                  <div>
                    <p>Model</p>
                    <input type="email" value={""} disabled />
                  </div>
                </Col>
                <Col xl={3} xs={6}>
                  <div>
                    <p>Brand</p>
                    <input type="text" value={""} disabled />
                  </div>
                </Col>
              </Row>
              <Row className={styles.nameSection}>
                <Col xl={9}>
                  <div>
                    <p>Issue</p>
                    <input type="text" value={""} disabled />
                  </div>
                </Col>
                <Col xl={3}>
                  <div>
                    <p>IMEI/SL</p>
                    <input type="text" value={""} disabled />
                  </div>
                </Col>
              </Row>
              <Row className={(styles.nameSection, styles.sliderJobCard)}>
                <Slider {...settings}>
                  <Col xl={4} className={styles.sliderImages}>
                    <div>
                      <Image
                        fluid
                        src={"/assets/images/jobCard.png"}
                        alt={"image number 1"}
                      />
                    </div>
                  </Col>
                  <Col xl={4} className={styles.sliderImages}>
                    <div>
                      <Image
                        fluid
                        src={"/assets/images/jobCard.png"}
                        alt={"image number 1"}
                      />
                    </div>
                  </Col>
                  <Col xl={4} className={styles.sliderImages}>
                    <div>
                      <Image
                        fluid
                        src={"/assets/images/jobCard.png"}
                        alt={"image number 1"}
                      />
                    </div>
                  </Col>
                </Slider>
              </Row>
              <Row className={styles.orderDetailsTitle}>
                <h5>Before Repair Quality Check (QC)</h5>
              </Row>
              <Row className={(styles.nameSection, styles.radioSection)}>
                {["r1", "r2", "r3", "r4", "r5", "r6"].map(
                  (radioBtns, index) => {
                    return (
                      <Col
                        xl={4}
                        className={styles.jobCardRadioSection}
                        key={index}
                      >
                        <p>Lorem ipsum albeto clifor</p>
                        <Row>
                          <Col
                            className={`${styles.jobCardRadio} jobCardRadio`}
                            xl={2}
                            xs={6}
                          >
                            <input
                              type="checkbox"
                              name={radioBtns}
                              disabled
                              checked
                            />
                            <h6>Yes</h6>
                          </Col>
                          <Col className={styles.jobCardRadio} xl={2} xs={6}>
                            <input type="checkbox" name={radioBtns} disabled />
                            <h6>No</h6>
                          </Col>
                        </Row>
                      </Col>
                    );
                  }
                )}
              </Row>
              <Row className={styles.nameSection}>
                <Col xl={6}>
                  <div>
                    <p>Remarks</p>
                    <input type="text" disabled />
                  </div>
                </Col>
                <Col xl={6}>
                  <div>
                    <p>Estimation</p>
                    <input type="text" disabled />
                  </div>
                </Col>
              </Row>
              <Row className={styles.nameSection}>
                <Col>
                  <h5>Terms and Conditions</h5>
                  <ul>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default JobCardPopUp;