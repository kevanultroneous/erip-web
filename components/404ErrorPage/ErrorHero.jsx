import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/components/404ErrorPage/ErrorHero.module.css";

function ErrorHero() {
  return (
    <section>
      <Row className={styles.errorHeroContainer}>
        <Col xl={6}>
          <div className={styles.errorHeroImage}>
            <Image
              fluid
              src="assets/images/error-page-image.png"
              alt="error page image"
            />
          </div>
        </Col>
        <Col xl={6}>
          <div className={styles.errorHeroText}>
            <h1>404 Page Not Found!</h1>
            <p>
              Uh oh, we can’t seem to find the page you’re looking for. Try
              going back to the previous page.
            </p>
            <Link href={"/"}>Back to homepage</Link>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ErrorHero;
