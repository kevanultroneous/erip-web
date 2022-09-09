import Link from "next/link";
import { Col, Image, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import { CgCloseO } from "react-icons/cg";
import CartProductList from "./CartProductList";
import Coupons from "./Coupons";
import { useEffect, useState } from "react";
import CouponsCard from "./CouponsCard";
import CheckoutPopup from "./CheckoutPopup";
import { CouponsByCC, MyCart } from "pages/api/api";
import styles from "@/styles/components/Popups/CartAndOffer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  callAddorRemoveCart,
  callMyCartBycity,
} from "redux/actions/cartActions/cartActions";

export default function CartAndOffer({ show, onHide }) {
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [couponsdata, setCouponsdata] = useState([]);
  const [selectedCoupons, setSelectedCoupons] = useState({});
  const [couponShow, setCouponShow] = useState(false);
  const [cartNetworkData, setCartNetworkData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [finalAmount, setFinalAmount] = useState(0);

  const cartSelector = useSelector((state) => state.cartdata);
  const statusdelete = useSelector((state) => state.cartaddremove);

  const dispatch = useDispatch();
  useEffect(() => {}, [cartSelector]);

  const cartDetailList =
    cartSelector.data.data !== undefined ? cartSelector.data.data : [];

  useEffect(() => {
    if (!show) {
      setActive(0);
      setShowCheckout(false);
    }
    dispatch(callMyCartBycity(localStorage.getItem("token"), 1));
    BillAmount();
  }, [show]);

  const BillAmount = () => {
    var ans = 0;
    for (let i = 0; i < cartDetailList.length; i++) {
      ans = parseInt(cartDetailList[i].issue_price) + ans;
    }
    setTotal(ans);
  };

  const RemoveFromCart = (id) => {
    dispatch(callAddorRemoveCart(localStorage.getItem("token"), id));
    dispatch(callMyCartBycity(localStorage.getItem("token"), 1));
  };

  useEffect(() => {
    CouponsByCC()
      .then((response) => {
        if (response.data.success) {
          setCouponsdata(response.data.data);
        }
      })
      .catch((e) => console.log("coupons error" + e));
    dispatch(callMyCartBycity(localStorage.getItem("token"), 1));
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`${styles.CartandOfferPopup} CartandOfferPopup`}
        // make for dynamic opacity
        style={showCheckout && { opacity: "0" }}
      >
        {active === 0 && (
          <Modal.Body className={styles.CartAndOfferBody}>
            <Row>
              <Col xs={10} md={6} lg={6} xl={6}>
                <h4 className={styles.CartAndOfferMainTitle}>Your Cart</h4>
              </Col>
              <Col
                xs={2}
                md={6}
                lg={6}
                xl={6}
                className={styles.CloseIconWrraper}
              >
                <CgCloseO className={styles.CloseIcon} onClick={onHide} />
              </Col>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.ProductListWrraper}
              >
                {cartSelector.data.success == false ? (
                  <h4 className="text-center">{cartSelector.data.message}</h4>
                ) : (
                  cartDetailList.map((v, i) => (
                    <CartProductList
                      key={i}
                      productname={v.issue_title}
                      price={v.issue_price}
                      clickHandler={() => RemoveFromCart(v.issue_id)}
                    />
                  ))
                )}
              </Col>
            </Row>
            {cartSelector.data.success == false ? null : (
              <Row className={styles.AvailableCoupons}>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <h4 className={styles.CartAndOfferSubMainTitle}>
                    Available coupons
                  </h4>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6} className={styles.TextRight}>
                  <lable
                    className={`${styles.CartAndOfferSubMainTitle} ${styles.LinkType}`}
                    onClick={() => setActive(1)}
                  >
                    See All
                  </lable>
                </Col>

                <Col
                  xs={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={styles.CouponsCol}
                >
                  {couponShow && (
                    <Coupons
                      title={selectedCoupons.coupon_title}
                      offer={`-- ₹${selectedCoupons.coupon_amount} ${
                        selectedCoupons.coupon_is_percentage
                          ? "(" + selectedCoupons.coupon_percentage + "OFF)"
                          : ""
                      }`}
                      clickHandler={() => {
                        setCouponShow(false);
                        setSelectedCoupons({});
                      }}
                    />
                  )}
                </Col>
              </Row>
            )}
            {cartSelector.data.success == false ? null : (
              <Row>
                <Col xs={12} md={12} lg={12} xl={12}>
                  <hr />
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <h4 className={styles.CartAndOfferSubMainTitleUni}>
                    Discount
                  </h4>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6} className={styles.TextRight}>
                  <lable className={styles.CartAndOfferSubMainTitleUni}>
                    {selectedCoupons.coupon_amount
                      ? "₹" + selectedCoupons.coupon_amount
                      : ""}
                  </lable>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <h4 className={styles.CartAndOfferSubMainTitleBold}>Total</h4>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6} className={styles.TextRight}>
                  <lable className={styles.CartAndOfferSubMainTitleBold}>
                    {selectedCoupons.coupon_amount
                      ? `₹${total - parseInt(selectedCoupons.coupon_amount)}`
                      : `₹${total}`}
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
                    clickHandler={() => setShowCheckout(true)}
                    title={"Checkout"}
                    buttonStyle={{
                      width: "100%",
                      backgroundColor: "#0E62CB",
                      color: "#fff",
                    }}
                  />
                </Col>
              </Row>
            )}
          </Modal.Body>
        )}
        {active === 1 && (
          <Modal.Body className={styles.CartAndOfferBody}>
            <Row>
              <Col xs={10} md={6} lg={6} xl={6}>
                <h4 className={styles.CartAndOfferMainTitle}>
                  Available coupons
                </h4>
              </Col>
              <Col
                xs={2}
                md={6}
                lg={6}
                xl={6}
                className={styles.CloseIconWrraper}
              >
                <CgCloseO
                  className={styles.CloseIcon}
                  onClick={() => setActive(0)}
                />
              </Col>
              <Col
                xs={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.CouponsView}
              >
                {couponsdata.map((v, i) => (
                  <CouponsCard
                    code={v.coupon_code}
                    detail={v.coupon_title}
                    key={i}
                    applyaction={() => {
                      setCouponShow(true);
                      setSelectedCoupons(v);
                      setActive(0);
                    }}
                  />
                ))}
              </Col>
            </Row>
          </Modal.Body>
        )}
      </Modal>
      <CheckoutPopup
        show={showCheckout}
        onHide={() => setShowCheckout(false)}
      />
    </>
  );
}
