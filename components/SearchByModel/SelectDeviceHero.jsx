import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { searchDeviceData } from "utils/SearchByModelData";
import Form from "react-bootstrap/Form";
import styles from "@/styles/components/SearchByModel/ModelHero.module.css";

function SelectDeviceHero() {
  return (
    <section className={styles.modelHeroContainer}>
      <Row className={styles.modelHeroRow}>
        <Col xl={2}>
          <Image
            fluid
            src="/assets/images/searchFilter.png"
            alt="search Filter"
          />
        </Col>
        <Col xl={10}>
          <h1>Mobile repair service in Bangalore</h1>
        </Col>
      </Row>
      <Row className={styles.selectDevice}>
        {searchDeviceData.map((searchFilters, ind) => {
          return (
            <Col xl={3} key={ind}>
              <div className={styles.selectButton}>
                <label htmlFor="device">Step {ind + 1}</label>
                <Form.Select name="device" id="device">
                  <option value="">{searchFilters.filterName}</option>
                  {searchFilters.filters.map((filters, ind) => {
                    return (
                      <option
                        value={filters.device}
                        key={ind}
                        className={styles.filtersOption}
                      >
                        {filters.device}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default SelectDeviceHero;
