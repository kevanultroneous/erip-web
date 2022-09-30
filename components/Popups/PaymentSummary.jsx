import { getOrderReceipt } from "api/ordersAPI";
import { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import NavigationHandler from "./NavigationHandler";

export default function PaymentSummary({ order, back, title, show, onHide }) {
  const [receiptData, setReceiptData] = useState([]);

  useEffect(() => {
    getOrderReceipt(localStorage.getItem("token"), order)
      .then((response) => {
        if (response.data.success) {
          setReceiptData(response.data.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(receiptData);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="LoginPopup"
    >
      <Modal.Body className="p-2 p-xl-5 p-lg-5 p-md-5">
        <NavigationHandler backhandler={back} navtitle={title} unique />
        {receiptData != null && receiptData.length > 0 && (
          <Row className="mt-4">
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Date</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">{receiptData[0].order_joc_completed_date}</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Order ID</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">{receiptData[0].order_id}</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Warranty</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">{receiptData[0].order_warranty} days</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Category</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">{receiptData[0].order_category}</p>
            </Col>
            {receiptData[0].order_issues.map((v) => (
              <>
                <Col xs={6} md={6} lg={6} xl={6}>
                  <p className="fs-18">{v.issue_name}</p>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6} className="text-end">
                  <p className="fs-18">₹ {v.issue_display_price}</p>
                </Col>
              </>
            ))}

            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Extra Charges*</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">
                ₹{receiptData[0].order_issues_extra_price}
              </p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Convenience Fee</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">₹{receiptData[0].convenience_fee}</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Discount</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">₹{receiptData[0].discount}</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">
                <b>Amount Paid</b>
              </p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">
                <b>₹{receiptData[0].order_issues_price}</b>
              </p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6}>
              <p className="fs-18">Payment Mode</p>
            </Col>
            <Col xs={6} md={6} lg={6} xl={6} className="text-end">
              <p className="fs-18">{receiptData[0].order_payment_method}</p>
            </Col>
            <Col xs={12} md={12} lg={12} xl={12}>
              <div>
                <p className="m-0 fs-20">Terms and Conditions</p>
                {receiptData[0].terms_conditions_1.map((v) => (
                  <p className="m-0 mb-1 fs-18">{v}</p>
                ))}
              </div>
              <div>
                <p className="m-0 fs-20">What is Not Covered Under Warranty</p>
                {receiptData[0].terms_conditions_2.map((v) => (
                  <p className="m-0 fs-18">{v}</p>
                ))}
              </div>
            </Col>
          </Row>
        )}
      </Modal.Body>
    </Modal>
  );
}
