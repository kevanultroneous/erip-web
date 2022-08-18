import Container from "./Container";
import styles from "@/styles/components/common/NewsAndUpdate.module.css";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsandUpdateData } from "utils/data";
import Link from "next/link";
export default function NewsAndUpdate() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <Container>
      <div className={styles.NewsandUpdateHeadingWrraper}>
        <h4 className={styles.NewsandUpdateHeading}>News & Updates</h4>
      </div>
      <Row>
        <Col xl={12}>
          <Slider {...settings}>
            {NewsandUpdateData.map((value, index) => (
              <Col key={index}>
                <div className={styles.NewsandUpdateCard}>
                  <Image src={value.image} alt={value.image} loading="lazy" />
                  <p className={styles.NewsandUpdateDetail}>{value.detail}</p>
                  <Link href={value.link}>Know More</Link>
                </div>
              </Col>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}
