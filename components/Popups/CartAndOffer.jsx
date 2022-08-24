import Link from "next/link";
import { Col, Image, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import styles from "@/styles/components/Popups/CartAndOffer.module.css";
import { CgCloseO } from "react-icons/cg";
import CartProductList from "./CartProductList";
import Coupons from "./Coupons";
import { useEffect, useState } from "react";
export default function CartAndOffer({ show, onHide }) {
  const [total, setTotal] = useState(0);
  const cartlist = [
    {
      name: "Lorem Ipsum ABC issues X",
      price: 200,
    },
    {
      name: "Lorem Ipsum ABC issues X",
      price: 100,
    },
    {
      name: "Lorem Ipsum ABC issues X",
      price: 200,
    },
    {
      name: "Lorem Ipsum ABC issues X",
      price: 100,
    },
  ];
  useEffect(() => {
    var ans = 0;
    for (let i = 0; i < cartlist.length; i++) {
      ans = ans + cartlist[i].price;
    }
    setTotal(ans);
  }, []);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CartandOfferPopup"
    >
      <Modal.Body className={styles.CartAndOfferBody}>
        <Row>
          <Col xs={10} md={6} lg={6} xl={6}>
            <h4 className={styles.CartAndOfferMainTitle}>Your Cart</h4>
          </Col>
          <Col xs={2} md={6} lg={6} xl={6} className={styles.CloseIconWrraper}>
            <CgCloseO className={styles.CloseIcon} onClick={onHide} />
          </Col>
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.ProductListWrraper}
          >
            {cartlist.map((value, index) => (
              <CartProductList
                key={index}
                productname={value.name}
                price={value.price}
                clickHandler={() => alert(index)}
              />
            ))}
          </Col>
        </Row>
        {/*  */}
        <Row className={styles.AvailableCoupons}>
          <Col xs={6} md={6} lg={6} xl={6}>
            <h4 className={styles.CartAndOfferSubMainTitle}>
              Available coupons
            </h4>
          </Col>
          <Col xs={6} md={6} lg={6} xl={6} className={styles.TextRight}>
            <lable
              className={`${styles.CartAndOfferSubMainTitle} ${styles.LinkType}`}
            >
              See All
            </lable>
          </Col>
          {/*  */}
          <Col xs={12} md={12} lg={12} xl={12} className={styles.CouponsCol}>
            <Coupons
              offer={"-- ₹100 (25% OFF)"}
              clickHandler={() => alert("25% off")}
            />
          </Col>
        </Row>
        {/*  */}
        <Row>
          <Col xs={12} md={12} lg={12} xl={12}>
            <hr />
          </Col>
          <Col xs={6} md={6} lg={6} xl={6}>
            <h4 className={styles.CartAndOfferSubMainTitleUni}>Discount</h4>
          </Col>
          <Col xs={6} md={6} lg={6} xl={6} className={styles.TextRight}>
            <lable className={styles.CartAndOfferSubMainTitleUni}>₹100</lable>
          </Col>
          <Col xs={6} md={6} lg={6} xl={6}>
            <h4 className={styles.CartAndOfferSubMainTitleBold}>Total</h4>
          </Col>
          <Col xs={6} md={6} lg={6} xl={6} className={styles.TextRight}>
            <lable className={styles.CartAndOfferSubMainTitleBold}>
              ₹{total - 100}
            </lable>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.CheckoutButtonWrraper}
          >
            <PrimaryButton
              title={"Checkout"}
              buttonStyle={{
                width: "100%",
                backgroundColor: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
