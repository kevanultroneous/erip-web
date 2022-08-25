import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/IssuePage/IssueTotalBill.module.css";

function IssueTotalBill() {
  return (
    <div className={styles.totalBillContainer}>
      <Row className={styles.totalBillRow}>
        <Col xl={5}>
          <div className={styles.couponHead}>
            <p>Best coupon</p>
            <Link href="">
              <a>See All</a>
            </Link>
          </div>
          <div className={styles.couponsBody}>
            <div>
              <p className={styles.couponsName}>TRYNEW</p>
              <p className={styles.couponsBodyText}>
                Save 25% on your first order
              </p>
            </div>
            <div>
              <Link href="">
                <a>APPLY</a>
              </Link>
            </div>
          </div>
        </Col>
        <Col xl={4}>
          <div>
            <p>Total: ₹ 1000</p>
            <PrimaryButton title={`Book Now`} variant="primary" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default IssueTotalBill;
