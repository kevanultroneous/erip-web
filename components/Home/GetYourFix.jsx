import { Col, Row } from "react-bootstrap";
import { GetYourFixCard } from "utils/data";
import Container from "../common/Container";
import FixCard from "./GetYourFixCard";
import styles from "@/styles/components/Home/GetYourFix.module.css";
import Link from "next/link";
export default function GetYourFix({ data = GetYourFixCard }) {
  return (
    <Container userdefinedclass={styles.TablateSpacing}>
      <Row>
        <div className={styles.MainTitleWrraper}>
          <h3 className={styles.MainTitle}>Get Your Fix!</h3>
        </div>
        {data.map((value, index) => (
          <Link
            key={index}
            href={{
              pathname: "personal-gadgets",
              query: { issue: value.category_id },
            }}
          >
            <Col xl={2} lg={2} xs={4} key={index}>
              <FixCard
                imgsrc={value.category_icon_url}
                imgalt={value.category_title}
                title={value.coming_soon ? null : value.category_title}
              />
              {value.coming_soon ? <p>coming soon</p> : null}
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
}
