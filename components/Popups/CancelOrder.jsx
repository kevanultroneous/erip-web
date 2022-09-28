import { Col, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";
import NavigationHandler from "./NavigationHandler";
import styles from "@/styles/components/Popups/CancelOrder.module.css";
import { useState } from "react";
import { postOrdersCancel } from "api/ordersAPI";
export default function CancelOrder({ show, onHide, order, backhandler }) {
  const checkboxdata = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing?",
    "Other",
  ];
  const [reasons, setReasons] = useState([]);
  const [err, setErr] = useState(false);
  const [reasonInp, setReasonInp] = useState("");
  const submitHandler = () => {
    if (!reasons.length > 0) {
      setErr(true);
    } else {
      setErr(false);
      postOrdersCancel(localStorage.getItem("token"), {
        order: order,
        cancelOrderReason: reasons[0],
        cancelOrderDescription: reasonInp,
      })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            onHide();
            backhandler();
          } else {
            alert(response.data.message);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CancelOrder"
    >
      <Modal.Body>
        <Row className={styles.MainRow}>
          <NavigationHandler
            navtitle={"Cancel"}
            unique
            backhandler={onHide}
            close
            oncloseaction={onHide}
            closebackstyle={styles.MobileHide}
            blueclosestyle={styles.BlueClose}
            titlestyle={styles.TitleInMob}
          />
          <Col xs={12} md={12} lg={12} xl={12}>
            <p className={styles.TitleOfPopup}>
              Please give a reason for cancelling
            </p>
            {err && (
              <b style={{ color: "red" }}>Please select one or more reasons</b>
            )}
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            {checkboxdata.map((value, index) => (
              <div className={styles.CheckBox}>
                <input
                  type={"checkbox"}
                  key={index}
                  name="chk_rsn"
                  onChange={(e) => {
                    reasons.includes(index + 1)
                      ? setReasons(reasons.filter((i) => i !== index + 1))
                      : setReasons(reasons.concat(index + 1));
                  }}
                />
                <label className={styles.CheckBoxLabel}>{value}</label>
              </div>
            ))}
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <textarea
              onChange={(e) => setReasonInp(e.target.value)}
              rows={4}
              placeholder="Enter reason here"
              className={styles.TextArea}
            ></textarea>
          </Col>
          <Col xs={12} md={12} lg={12} xl={12}>
            <PrimaryButton
              clickHandler={() => submitHandler()}
              title="Submit"
              buttonStyle={{
                width: "100%",
                background: "#0E62CB",
                color: "#fff",
              }}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
