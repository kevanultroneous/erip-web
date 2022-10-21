import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import styles from "@/styles/components/OfferPage/Offers.module.css";

function Offers() {
  const [offer, setOffer] = useState([]);
  useEffect(() => {
    fetchOffers();
  }, []);

  //  Get offer through Api
  const fetchOffers = async () => {
    await axios
      .get("http://43.204.87.153/api/v1/cms/offers?city=1")
      .then((data) => {
        setOffer(data.data.data);
      })
      .catch((err) => {
        setOffer([]);
      });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {offer.map((newOffers, offerIndex) => {
        if (newOffers.length < 2 && newOffers.length > 0) {
          return (
            <Row className={styles.offerSections}>
              <div className={styles.offerBigImage}>
                <Image
                  fluid
                  src={newOffers[0].offer_image_url}
                  alt={newOffers[0].offer_promo_code}
                  className={styles.offerImage}
                />
              </div>
            </Row>
          );
        } else if (newOffers.length > 2) {
          return (
            <Row
              className={`${
                (styles.offerSections, styles.offerSlider)
              } offerSections`}
            >
              <Slider {...settings}>
                {newOffers.map((sliderOffer, sliderOfferIndex) => {
                  return (
                    <Col key={sliderOfferIndex}>
                      <div className={styles.offerSliderImage}>
                        <Image
                          fluid
                          src={sliderOffer.offer_image_url}
                          alt={sliderOffer.offer_promo_code}
                        />
                      </div>
                    </Col>
                  );
                })}
              </Slider>
            </Row>
          );
        }
      })}
    </>
  );
}

export default Offers;
