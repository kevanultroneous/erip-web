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
import {
  callFetchCoupons,
  callVerifyCoupons,
  removeCoupons,
  setCouponssSuccess,
} from "redux/actions/couponActions/couponsActions";
import { APPLY_COUPON_SUCCESS } from "redux/actions/actionTypes";
import { VerifyCoupons } from "api/couponsApi";
import axios from "axios";
import { PostEnqApi } from "api/enquireAPI";

export default function CartAndOffer({ show, onHide }) {
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [couponShow, setCouponShow] = useState(false);
  const commonselector = useSelector((state) => state);
  const cartSelector = useSelector((state) => state.cartdata);
  const couponsselector = useSelector((state) => state.couponsdata);

  const dispatch = useDispatch();

  useEffect(() => {
    BillAmount();
  }, [cartSelector]);

  useEffect(() => {
    if (!show) {
      setActive(0);
      setShowCheckout(false);
    } else {
      dispatch(callFetchCoupons(commonselector.locationdata.city, 1));
      dispatch(callMyCartBycity(localStorage.getItem("token")));
    }
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

  const couponsdataList = couponsselector.data
    ? couponsselector.data.data !== undefined
      ? couponsselector.data.data
      : []
    : [];

  const cartDetailList = cartSelector.data
    ? cartSelector.data.data !== undefined
      ? cartSelector.data.data
      : []
    : [];

  const selectingCoupons =
    couponsselector.selectedcoupons !== null
      ? couponsselector.selectedcoupons
      : null;

  let listOfIssue = [];
  cartDetailList.map((v) => {
    listOfIssue.push(v.issue_id);
  });

  let flowGroup = [];
  cartDetailList.map((v) => {
    flowGroup.push(v.flow_group);
  });

  let segments = [];
  cartDetailList.map((v) => {
    segments.push(v.model_segment);
  });

  let brands = [];
  cartDetailList.map((v) => {
    brands.push(v.brand_id);
  });

  let catids = [];
  cartDetailList.map((v) => {
    catids.push(v.category_id);
  });

  const EnquireNow = () => {
    PostEnqApi(commonselector.userdata.useraccess, {
      flowGroup: cartDetailList[0].flow_group,
      sourceType: 1,
      subSourceType: 1,
      city: localStorage.getItem("cityid"),
      category: cartDetailList[0].category_id,
      brand: cartDetailList[0].brand_id,
      model_segment: cartDetailList[0].model_segment,
      issues: listOfIssue,
      coupon: couponShow ? selectingCoupons.coupon_id : 0,
    })
      .then((r) => {
        if (r.data.success) {
          localStorage.setItem("enq_id", r.data.enquiry_data.enquiry_id);
        } else {
          alert(r.data.message);
        }
      })
      .catch((e) => console.log(e));
  };

  const CheckOutHandler = () => {
    console.log(total);
    console.log(selectingCoupons);
    if (couponShow) {
      VerifyCoupons(
        commonselector.userdata.useraccess,
        commonselector.locationdata.city,
        commonselector.cartdata.data.data[0].category_id,
        selectingCoupons ? selectingCoupons.coupon_id : null,
        total
      )
        .then((r) => {
          if (r.data) {
            if (r.data.success) {
              EnquireNow();
            } else {
              alert(r.data.message);
            }
          }
        })
        .catch((e) => console.log(e));
    } else {
      EnquireNow();
      setShowCheckout(true);
    }
  };
  return (
    <div>
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
                <h4 className={styles.CartAndOfferMainTitle}>
                  {cartSelector.data.success == false ? null : "Your Cart"}
                </h4>
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
                  <div className="text-center">
                    <Image
                      src="/assets/images/blank-cart.png"
                      fluid
                      alt="blank cart"
                    />
                    <h3 className="text-center mt-xl-4 mb-xl-4 mt-lg-4 mb-lg-4 mt-4 mb-4">
                      <b>Your cart is empty!</b>
                    </h3>
                    <h5>You have not added any services to in your cart yet</h5>
                  </div>
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
                      title={selectingCoupons.coupon_title}
                      offer={`-- ₹${selectingCoupons.coupon_amount} ${
                        selectingCoupons.coupon_is_percentage
                          ? "(" + selectingCoupons.coupon_percentage + "OFF)"
                          : ""
                      }`}
                      clickHandler={() => {
                        setCouponShow(false);
                        dispatch(removeCoupons());
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
                    {couponShow
                      ? selectingCoupons.coupon_amount
                        ? "₹" + selectingCoupons.coupon_amount
                        : ""
                      : ""}
                  </lable>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <h4 className={styles.CartAndOfferSubMainTitleBold}>Total</h4>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6} className={styles.TextRight}>
                  <lable className={styles.CartAndOfferSubMainTitleBold}>
                    {couponShow
                      ? selectingCoupons.coupon_amount
                        ? `₹${total - parseInt(selectingCoupons.coupon_amount)}`
                        : `₹${total}`
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
                    clickHandler={() => CheckOutHandler()}
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
                {couponsdataList.map((v, i) => (
                  <CouponsCard
                    code={v.coupon_code}
                    detail={v.coupon_title}
                    key={i}
                    applyaction={() => {
                      setCouponShow(true);
                      dispatch(setCouponssSuccess(v));
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
    </div>
  );
}
