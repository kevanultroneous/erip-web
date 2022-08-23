import { Col, Row } from "react-bootstrap";
import { GetYourFixCard } from "utils/data";
import Container from "../common/Container";
import FixCard from "./GetYourFixCard";
import styles from "@/styles/components/Home/GetYourFix.module.css";
export default function GetYourFix() {
  return (
    <Container>
      <Row>
        <div className={styles.MainTitleWrraper}>
          <h3 className={styles.MainTitle}>Get Your Fix!</h3>
        </div>
        {GetYourFixCard.map((value, index) => (
          <Col xl={2} lg={2} xs={4} key={index}>
            <FixCard
              imgsrc={value.img}
              imgalt={value.title}
              title={value.title}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
