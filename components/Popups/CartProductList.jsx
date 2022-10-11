import { Col, Image, Row, Spinner } from "react-bootstrap";
import styles from "@/styles/components/Popups/CartProductList.module.css";

export default function CartProductList({
  productname,
  price,
  clickHandler,
  spinner,
}) {
  return (
    <Row className={styles.AlignItemsCenter}>
      <Col xs={8} md={8} lg={9} xl={9}>
        <p className={styles.ProductName}>{productname}</p>
      </Col>
      <Col xs={4} md={4} lg={3} xl={3} className={styles.PriceActions}>
        <label className={styles.ProductPrice}>₹ {price}</label>
        {spinner ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <Image
            src="/assets/icons/delete-icon.png"
            alt="delete-icon"
            loading="lazy"
            className={styles.DeleteImg}
            onClick={clickHandler}
          />
        )}
      </Col>
    </Row>
  );
}
