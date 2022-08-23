import { Col, Image, Row } from "react-bootstrap";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TestimonialData } from "utils/data";
import styles from "@/styles/components/common/Testimonial.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
export default function Testimonials({ data }) {
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
          // dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 885,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <div className={styles.TestimonialHeadingWrraper}>
        <h4 className={styles.TestimonialHeading}>Testimonials</h4>
      </div>
      <Row>
        <Col xl={12}>
          <Slider {...settings}>
            {data.map((value, index) => (
              <Col>
                <div className={styles.TestimonialCard}>
                  <div className={styles.TestimonialAvatar}>
                    <Image
                      src={value.testimonial_image_url}
                      loading="lazy"
                      fluid
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
    </Container>
  );
}
