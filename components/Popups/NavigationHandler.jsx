import { Col, Image, Row } from "react-bootstrap";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import styles from "@/styles/components/Popups/NavigationHandler.module.css";
import { BiArrowBack } from "react-icons/bi";
export default function NavigationHandler({
  backhandler,
  navtitle,
  unique,
  hide = false,
  close,
  oncloseaction,
  closebackstyle,
  blueclosestyle,
  titlestyle,
}) {
  return (
    <Row>
      <Col xs={2} md={2} lg={2} xl={2} className={closebackstyle}>
        <BiArrowBack className={styles.BackArrow} onClick={backhandler} />
      </Col>

      <Col xs={10} md={8} lg={8} xl={8}>
        <h4
          className={`${styles.CheckoutText} ${
            unique && styles.UniqueTitle
          } ${titlestyle}`}
        >
          {navtitle}
        </h4>
      </Col>
      {close && (
        <Col xs={2} md={2} lg={2} xl={2} className={blueclosestyle}>
          <div>
            <Image
              src="/assets/icons/blue-close.png"
              alt="blue-close"
              onClick={oncloseaction}
            />
          </div>
        </Col>
      )}
    </Row>
  );
}
