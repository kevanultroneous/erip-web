import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/personalGadgets/IssueTotalBill.module.css";
import { useEffect, useState } from "react";

function IssueTotalBill({ totalPrice }) {
  const [mobileView, setMobileView] = useState(true);

//  Dynamic Media query for Issue bill details
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);
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
            <p>Total: ₹ {totalPrice}</p>
            <PrimaryButton
              title={
                mobileView ? `Book Now` : `Total: ₹${totalPrice} - Book Now`
              }
              variant="primary"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default IssueTotalBill;
