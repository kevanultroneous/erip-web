import Container from "./Container";
import styles from "@/styles/components/common/NewsAndUpdate.module.css";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsandUpdateData } from "utils/data";
import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
export default function NewsAndUpdate({ data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <BsChevronRight color="#000" />,
    prevArrow: <BsChevronLeft color="#000" />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
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
      <div className={styles.NewsandUpdateHeadingWrraper}>
        <h4 className={styles.NewsandUpdateHeading}>Blogs</h4>
      </div>
      <Row>
        <Col xl={12}>
          <Slider {...settings}>
            {data.map((value, index) => (
              <Col key={index}>
                <div className={styles.NewsandUpdateCard}>
                  <Image
                    src={value.post_image_url}
                    alt={value.post_image_url}
                    loading="lazy"
                    fluid
                  />
                  <p className={styles.NewsandUpdateDetail}>
                    {value.post_title}
                  </p>
                  <Link href={value.post_url} target={"_blank"}>
                    Read More
                  </Link>
                </div>
              </Col>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}
