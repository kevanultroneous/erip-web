import { Col } from "react-bootstrap";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import styles from "@/styles/components/Popups/NavigationHandler.module.css";
import { BiArrowBack } from "react-icons/bi";
export default function NavigationHandler({ backhandler, navtitle, unique }) {
  return (
    <>
      <Col xs={2} md={2} lg={2} xl={2}>
        <BiArrowBack className={styles.BackArrow} onClick={backhandler} />
      </Col>
      <Col xs={8} md={8} lg={8} xl={8}>
        <h4
          className={`${styles.CheckoutText} ${unique && styles.UniqueTitle}`}
        >
          {navtitle}
        </h4>
      </Col>
    </>
  );
}
