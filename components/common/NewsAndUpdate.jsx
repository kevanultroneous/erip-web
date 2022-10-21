import Container from "./Container";
import styles from "@/styles/components/common/NewsAndUpdate.module.css";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsandUpdateData } from "utils/data";
import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { BlogResponseApi } from "api/homeapi";
export default function NewsAndUpdate() {
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
  const [data, setData] = useState(NewsandUpdateData);

  // ----------------Blog Api call------------------------// 
  useEffect(() => {
    BlogResponseApi()
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container>
      <div className={styles.NewsandUpdateHeadingWrraper}>
        <h4 className={styles.NewsandUpdateHeading}>Blogs</h4>
      </div>
      <Row>
        <Col xl={12}>
          <Slider {...settings} className="blogslider">
            {data.map((value, index) => (
              <Col key={index}>
                <div className={styles.NewsandUpdateCard}>
                  <div className={styles.NewsImageWrraper}>
                    <Image
                      src={value.post_image_url}
                      alt={value.post_image_url}
                      loading="lazy"
                    />
                  </div>
                  <p className={styles.NewsandUpdateDetail}>
                    {value.post_title}
                  </p>
                  <div className={styles.PostUrl}>
                    <Link href={value.post_url} target={"_blank"}>
                      Read More
                    </Link>
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
