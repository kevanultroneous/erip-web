import { Col, Image, Row } from "react-bootstrap";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TestimonialData } from "utils/data";
import styles from "@/styles/components/common/Testimonial.module.css";

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Container>
      <div className={styles.TestimonialHeadingWrraper}>
        <h4 className={styles.TestimonialHeading}>Testimonials</h4>
      </div>
      <Row>
        <Col xl={12}>
          <Slider {...settings}>
            {TestimonialData.map((value, index) => (
              <Col>
                <div className={styles.TestimonialCard}>
                  <div className={styles.TestimonialAvatar}>
                    <Image src={value.image} loading="lazy" />
                  </div>
                  <p className={styles.TestimonialName}>{value.name}</p>
                  <p className={styles.TestimonialBrand}>{value.brand}</p>
                  <p className={styles.TestimonialDetail}>{value.detail}</p>
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
