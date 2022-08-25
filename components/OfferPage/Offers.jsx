import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, Row } from "react-bootstrap";

function Offers() {
  const [offer, setOffer] = useState([]);
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const offerData = await axios.get(
      "http://43.204.87.153/api/v1/cms/offers?city=1"
    );
    setOffer(offerData.data.data);
  };

  return (
    <>
      {offer.map((offersData, index) => {
        return (
          <Row key={index}>
            <div>
              <Image
                fluid
                src={offersData.offer_image_url}
                alt={offersData.offer_image}
              />
            </div>
          </Row>
        );
      })}
    </>
  );
}

export default Offers;
