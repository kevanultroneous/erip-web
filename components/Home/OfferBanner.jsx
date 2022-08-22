import { Col, Image, Row } from "react-bootstrap";
import Container from "../common/Container";

export default function OfferBanner() {
  return (
    <Container>
      <Row className="justify-content-center">
        {[1, 2, 3].map((value, index) => (
          <Col xl={4}>
            <Image
              src="/assets/images/banner-wrraper.png"
              alt="offer-banner"
              loading="lazy"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
