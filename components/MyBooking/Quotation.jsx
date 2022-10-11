import { Col, Image, Modal, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/Quotation.module.css";
import PrimaryButton from "../common/PrimaryButton";
import { useState } from "react";
import { useEffect } from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";
import PaymentOption from "../Popups/PaymentOption";
import NavigationHandler from "../Popups/NavigationHandler";
export default function Quotation({
  rejectaccept,
  showpaybutton,
  hide,
  quotationdata,
  rejectclick,
  acceptclick,
  paynow,
}) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [datas, setDatas] = useState();
  const [paymentOpt, setPaymentOpt] = useState(false);

  var totals = 0;
  for (let k = 0; k < quotationdata.length; k++) {
    totals = totals + parseInt(quotationdata[k].issue_discounted_price);
  }
  useEffect(() => {
    setTotalAmount(totals);
  }, [totals]);

  return (
    <div
      className={styles.QuotationCard}
      style={hide ? { display: "none" } : null}
    >
      <Modal
        show={paymentOpt}
        onHide={() => setPaymentOpt(false)}
        size={"xl"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="CheckoutPopup"
      >
        <Modal.Body className="p-5">
          <NavigationHandler
            backhandler={() => setPaymentOpt(false)}
            navtitle="Payment"
            unique
            titlestyle={"mb-5"}
          />
          <PaymentOption amount={totalAmount} />
        </Modal.Body>
      </Modal>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <label className={styles.MainTitle}>Quotation for Approval</label>
        </Col>
        {/* <Col xs={12} md={12} lg={12} xl={12}>
          <label className={styles.SubLabels}>Parts</label>
          {[0, 1].map((v, i) => (
            <Row key={i}>
              <Col xs={1} md={1} lg={1} xl={1}>
                <Image src="/assets/icons/setting-ico.png" alt="icon" />
              </Col>
              <Col xs={8} md={8} lg={8} xl={8}>
                <p className={styles.AdditionalPart}>Additional Part</p>
              </Col>
              <Col xs={3} md={3} lg={3} xl={3}>
                <p className={styles.AdditionalAmount}>₹ Amt</p>
              </Col>
            </Row>
          ))}
        </Col> */}
        <Col xs={12} md={12} lg={12} xl={12}>
          <label className={styles.SubLabels}>Issues</label>
          {quotationdata.map((v, i) => (
            <Row key={i}>
              <Col xs={1} md={1} lg={1} xl={1}>
                <Image src="/assets/icons/warning-ico.png" alt="icon" />
              </Col>
              <Col xs={8} md={8} lg={8} xl={8}>
                <p className={styles.AdditionalPart}>{v.issue_name}</p>
              </Col>
              <Col xs={3} md={3} lg={3} xl={3}>
                <p className={styles.AdditionalAmount}>
                  {v.issue_display_price}
                </p>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Row>
            <Col xs={9} md={9} lg={9} xl={9}>
              <label className={styles.TotalAmount}>Total amount</label>
            </Col>
            <Col xs={3} md={3} lg={3} xl={3}>
              <p className={styles.BigAmount}>₹{totalAmount}</p>
            </Col>
            {/*  <Col xs={9} md={9} lg={9} xl={9}>
              <label className={styles.TotalAmount}>Paid</label>
            </Col>
            <Col xs={3} md={3} lg={3} xl={3}>
              <p className={styles.BigAmount}>₹ Amt</p>
            </Col>
            <Col xs={9} md={9} lg={9} xl={9}>
              <label className={styles.TotalAmount}>Balance</label>
            </Col>
            <Col xs={3} md={3} lg={3} xl={3}>
              <p className={styles.BigAmount}>₹ Amt</p>
            </Col>*/}
          </Row>
        </Col>
        <Col xs={12} md={12} lg={12} xl={12}>
          <label className={styles.AcceptText}>
            Do you accept the quotation?
          </label>
        </Col>
        {rejectaccept && (
          <Col xs={12} md={12} lg={12} xl={12}>
            <Row className={styles.ButtonSpace}>
              <Col xs={6} md={6} lg={6} xl={6}>
                <PrimaryButton
                  clickHandler={rejectclick}
                  title="Reject"
                  buttonStyle={{
                    width: "100%",
                    border: "2px solid #dc3545",
                  }}
                  variant="outline-danger"
                />
              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
                <PrimaryButton
                  title="Accept"
                  buttonStyle={{ width: "100%" }}
                  clickHandler={acceptclick}
                />
              </Col>
            </Row>
          </Col>
        )}
        {showpaybutton && (
          <Col xs={12} md={12} lg={12} xl={12} className={styles.ButtonSpace}>
            <PrimaryButton
              title={`Pay Now (₹${totalAmount})`}
              clickHandler={() => setPaymentOpt(true)}
              buttonStyle={{
                width: "100%",
                background: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        )}
      </Row>
    </div>
  );
}
