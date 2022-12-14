import { Col, Image, Row } from "react-bootstrap";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TestimonialData } from "utils/data";
import styles from "@/styles/components/common/Testimonial.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { HomeTestimonialAPI } from "api/homeapi";
export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <BsChevronRight color="#000" />,
    prevArrow: <BsChevronLeft color="#000" />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
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
  const [mobileView, setMobileView] = useState(false);

  const [data, setData] = useState(TestimonialData);

  //  Testimonial UI for different devices
  useEffect(() => {
    window.innerWidth < 992 ? setMobileView(true) : setMobileView(false);
    HomeTestimonialAPI()
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container>
      {data.length > 0 && (
        <>
          <div className={styles.TestimonialHeadingWrraper}>
            <h4 className={styles.TestimonialHeading}>Testimonials</h4>
          </div>
          <Row>
            <Col xl={12}>
              <Slider {...settings}>
                {mobileView
                  ? data.slice(0, 3).map((value, index) => (
                      <Col key={index}>
                        <div className={styles.TestimonialCard}>
                          <div className={styles.TestimonialAvatar}>
                            <Image
                              src={value.testimonial_image_url}
                              loading="lazy"
                              fluid
                              alt={value.testimonial_name}
                            />
                          </div>
                          <p className={styles.TestimonialName}>
                            {value.testimonial_name}
                          </p>
                          <p className={styles.TestimonialBrand}>
                            {value.testimonial_brand}
                          </p>
                          <p className={styles.TestimonialDetail}>
                            {value.testimonial_content}
                          </p>
                          <div className={styles.RatingWrraper}>
                            <Image
                              src={"/assets/images/rating-star.png"}
                              alt="rating-star"
                              loading="lazy"
                            />
                          </div>
                          <div className={styles.TestimonialIcon}>
                            <Image
                              src={"/assets/images/testimonial-icon.png"}
                              alt="testimonial-icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </Col>
                    ))
                  : data.map((value, index) => (
                      <Col key={index}>
                        <div className={styles.TestimonialCard}>
                          <div className={styles.TestimonialAvatar}>
                            <Image
                              src={value.testimonial_image_url}
                              loading="lazy"
                              fluid
                              alt={value.testimonial_name}
                            />
                          </div>
                          <p className={styles.TestimonialName}>
                            {value.testimonial_name}
                          </p>
                          <p className={styles.TestimonialBrand}>
                            {value.testimonial_brand}
                          </p>
                          <p className={styles.TestimonialDetail}>
                            {value.testimonial_content}
                          </p>
                          <div className={styles.RatingWrraper}>
                            <Image
                              src={"/assets/images/rating-star.png"}
                              alt="rating-star"
                              loading="lazy"
                            />
                          </div>
                          <div className={styles.TestimonialIcon}>
                            <Image
                              src={"/assets/images/testimonial-icon.png"}
                              alt="testimonial-icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </Col>
                    ))}
              </Slider>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
