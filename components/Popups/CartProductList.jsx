import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Popups/CartProductList.module.css";

export default function CartProductList({ productname, price, clickHandler }) {
  return (
    <Row className={styles.AlignItemsCenter}>
      <Col xs={9} md={9} lg={9} xl={9}>
        <p className={styles.ProductName}>{productname}</p>
      </Col>
      <Col xs={3} md={3} lg={3} xl={3} className={styles.PriceActions}>
        <label className={styles.ProductPrice}>₹ {price}</label>
        <Image
          src="/assets/icons/delete-icon.png"
          alt="delete-icon"
          loading="lazy"
          className={styles.DeleteImg}
          onClick={clickHandler}
        />
      </Col>
    </Row>
  );
}
