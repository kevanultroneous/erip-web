import { Col, Image, Modal, Row } from "react-bootstrap";
import styles from "@/styles/components/homeAppliances/KnowMoreModal.module.css";
export default function KnowMoreModal({
  show,
  onHide,
  knowMoreTitle,
  knowMoreHTMLBody,
}) {
  return (
    <Modal
      show={show}
      centered
      size="md"
      className="OfferPopup"
      onHide={onHide}
    >
      <Modal.Header closeButton className={styles.OfferHeader}>
        <h5>{knowMoreTitle}</h5>
      </Modal.Header>
      <Modal.Body className={styles.OfferHeadModal}>
        <div dangerouslySetInnerHTML={{ __html: knowMoreHTMLBody }} />
      </Modal.Body>
    </Modal>
  );
}
