import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Container from "../common/Container";
import "antd/dist/antd.css";

import { Radio, Tabs } from "antd";

import styles from "@/styles/components/homeAppliances/ModelSelect.module.css";
import { selectSegments } from "redux/actions/issuePageActions/issuePageActions";
import { useDispatch, useSelector } from "react-redux";
import {
  getHomeApplianceIssue,
  getHomeApplianceModel,
} from "redux/actions/homeApplianceActions/homeAppliances";

function ModelSelect({ segmentArray }) {
  const [mobileView, setMobileView] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);

  const handleChange = (e) => {
    dispatch(selectSegments(e));
    dispatch(getHomeApplianceIssue(e));
  };

  const getCity = useSelector((state) => state.locationdata.city);
  const segments = useSelector((state) => state.homeAppliancesModel.data);

  useEffect(() => {
    console.log({ segments });
  }, [segments]);

  const modelData = [
    {
      segment_id: 1,
      segment_title: "SCREEN MORE THEN 46",
      segment_image: "fff9f6d2b8c5da23042a256d1d168aa7.png",
      segment_image_url:
        "http://43.204.87.153/images/segments/fff9f6d2b8c5da23042a256d1d168aa7.png",
      segment_slug_01: "0",
    },
    {
      segment_id: 2,
      segment_title: "SCREEN UP TO 52 INCH",
      segment_image: "4e0489bad915691901b5ca32596f42cf.png",
      segment_image_url:
        "http://43.204.87.153/images/segments/4e0489bad915691901b5ca32596f42cf.png",
      segment_slug_01: "0",
    },
  ];

  return (
    <Container userdefinedclass={styles.modelSelectContainer}>
      {mobileView ? (
        <Row className={styles.modelSelectSegmentMain}>
          <h5>Please select a model</h5>
          <Row className={styles.modelSelectSegment}>
            {segmentArray.map((models) => {
              return (
                <Col key={models.segment_id} xl={2}>
                  <Button
                    className={styles.modelSelectButtonWeb}
                    onClick={() => handleChange(models.segment_id)}
                  >
                    <Image
                      fluid
                      src={models.segment_image_url}
                      alt={models.segment_title}
                      className={styles.modelSelectImage}
                    />
                  </Button>
                </Col>
              );
            })}
          </Row>
        </Row>
      ) : (
        <Row className={styles.modelSelectSegmentMain}>
          <h5>Please select a model</h5>
          <div className={styles.modelSelectSegment}>
            {segmentArray.map((models) => {
              return (
                <div key={models.segment_id}>
                  <Button
                    onClick={() => handleChange(models.segment_id)}
                    className={styles.modelSelectbutton}
                    variant={"outline-primary"}
                  >
                    {models.segment_title}
                  </Button>
                </div>
              );
            })}
          </div>
        </Row>
      )}
    </Container>
  );
}

export default ModelSelect;
