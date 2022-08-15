import { Col, Image, Row } from "react-bootstrap";
import { WhyEripData } from "utils/menudata";
import styles from "@/styles/components/common/WhyErip.module.css";
import Container from "./Container";
export default function WhyErip() {
  return (
    <Container innerstyle={{ backgroundColor: "#EAF4FF" }}>
      <Row>
        {WhyEripData.map((value, index) => (
          <Col xl={2} lg={2} key={index}>
            <Image src={value.img} alt={value.title} loading="lazy" fluid />
            <p className={styles.ImageTitle}>{value.title}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
