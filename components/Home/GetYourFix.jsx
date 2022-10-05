import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GetYourFixCard } from "utils/data";
import Container from "../common/Container";
import FixCard from "./GetYourFixCard";
import styles from "@/styles/components/Home/GetYourFix.module.css";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "redux/actions/issuePageActions/issuePageActions";
import { getCategoryHero } from "redux/actions/heroActions/heroActions";
import { callFaqByCategory } from "redux/actions/faqActions/faqActions";
import { getInformationByCategory } from "redux/actions/informationActions/informationActions";
import { getCategoryOffer } from "redux/actions/offersActions/offerActions";
import { getTestimonialsByCategory } from "redux/actions/testimonialActions/testimonialAction";
import { GetYourFixAPI } from "api/homeapi";

export default function GetYourFix() {
  // const dispatch = useDispatch();

  const categoryID = useSelector((state) => state.issuePage.categoryID);

  // useEffect(() => {
  //   dispatch(getCategoryHero(categoryID));
  //   dispatch(callFaqByCategory(categoryID));
  //   dispatch(getInformationByCategory(categoryID));
  //   dispatch(getCategoryOffer(categoryID));
  //   dispatch(getTestimonialsByCategory(categoryID));
  // }, [categoryID]);
  const [data, setData] = useState(GetYourFixCard);

  useEffect(() => {
    let cityID =
      localStorage.getItem("cityid") == null
        ? 1
        : localStorage.getItem("cityid");
    GetYourFixAPI(cityID)
      .then((r) => {
        setData(r.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const cityName = useSelector((state) => state.locationdata.name);

  return (
    <Container userdefinedclass={styles.TablateSpacing}>
      <Row>
        <div className={styles.MainTitleWrraper}>
          <h3 className={styles.MainTitle}>Get Your Fix!</h3>
        </div>

        {data.map((value, index) => (
          <Link
            key={index}
            href={
              value.group_id == 1
                ? {
                    pathname: `${cityName}/${value.category_title.toLowerCase()}-repair`,
                    // query: {
                    //   issue: value.category_id,
                    //   category: value.category_title,
                    // },
                  }
                : {
                    pathname: "home-appliances",
                    query: {
                      issue: value.category_id,
                      category: value.category_title,
                    },
                  }
            }
            onClick={() => dispatch(selectCategory(value.category_id))}
          >
            <Col xl={2} lg={2} xs={4} key={index}>
              <FixCard
                imgsrc={value.category_icon_url}
                imgalt={value.category_title}
                title={value.coming_soon ? null : value.category_title}
              />
              {value.coming_soon ? <p>coming soon</p> : null}
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
}
