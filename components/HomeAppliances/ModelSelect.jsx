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

  useEffect(() => {}, []);

  const getCity = useSelector((state) => state.locationdata.city);
  const segments = useSelector((state) => state.homeAppliancesModel.data);

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
