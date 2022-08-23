import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Container from "../common/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "@/styles/components/Home/OfferBanner.module.css";
export default function OfferBanner({ data }) {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 885,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Container userdefinedclass={styles.MobileSpacing}>
      <Row className="justify-content-center m-0">
        <Slider {...settings}>
          {data.map((value, index) => (
            <Col xl={4} key={index}>
              <Link href={value.osection_click_url} target={"_blank"}>
                <Image
                  src={value.osection_image_url}
                  alt={value.osection_title}
                  loading="lazy"
                />
              </Link>
            </Col>
          ))}
        </Slider>
      </Row>
    </Container>
  );
}
