import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";

function OfferBanner({ offers }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {}
      {offers.map((offer, index) => {
        return (
          <div key={index}>
            <Image src={offer.osection_image_url} alt={offer.osection_title} />
          </div>
        );
      })}
    </Slider>
  );
}

export default OfferBanner;
