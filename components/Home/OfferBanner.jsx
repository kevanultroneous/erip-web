import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Container from "../common/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "@/styles/components/Home/OfferBanner.module.css";
import { OfferBannerhomedata } from "utils/data";
import { useEffect, useState } from "react";
import OfferadPopup from "../Popups/OfferadPopup";
import { OfferSectionHomeAPI } from "api/homeapi";
export default function OfferBanner({ clickhandler }) {
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
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 884,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const [data, setData] = useState(OfferBannerhomedata);
  const [offerPopup, setOfferPopup] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  //  offer section Api on home
  useEffect(() => {
    OfferSectionHomeAPI()
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <Container userdefinedclass={styles.MobileSpacing}>
      <OfferadPopup
        show={offerPopup}
        onHide={() => setOfferPopup(false)}
        img={selectedImg}
      />
      <Row className="justify-content-center m-0 OfferBannerImageSlide">
        <Slider {...settings} className="offerbanner">
          {data.map((value, index) => (
            <Col
              xl={4}
              key={index}
              onClick={() => {
                setOfferPopup(true);
                setSelectedImg(value.osection_image_url);
              }}
            >
              {/* <Link
                href={
                  value.osection_clickable == false
                    ? "/"
                    : value.osection_click_url
                }
                target={"_blank"}
              > */}
              <div className={styles.SliderImage}>
                <Image
                  src={value.osection_image_url}
                  alt={value.osection_title}
                  className={styles.OfferBannerImage}
                  loading="lazy"
                />
              </div>
              {/* </Link> */}
            </Col>
          ))}
        </Slider>
      </Row>
    </Container>
  );
}
