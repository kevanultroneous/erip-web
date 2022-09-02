import { Col, Modal, Row } from "react-bootstrap";
import PrimaryButton from "../common/PrimaryButton";

export default function Logout({ show, noaction, yesaction }) {
  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CartandOfferPopup"
    >
      <Modal.Body className="ps-4 pe-3">
        <h5>Are you sure you want to logout?</h5>
        <Row className={"pt-4"}>
          <Col xs={4} md={5} lg={4} xl={6}>
            <PrimaryButton
              clickHandler={yesaction}
              buttonStyle={{ padding: "0.2rem 2rem" }}
              title={"Yes"}
            />
          </Col>
          <Col xs={4} md={5} lg={4} xl={6}>
            <PrimaryButton
              buttonStyle={{
                padding: "0.2rem 2rem",
                background: "#CF283C",
                color: "#ffffff",
                border: "2px solid #CF283C",
              }}
              title={"No"}
              clickHandler={noaction}
            />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
