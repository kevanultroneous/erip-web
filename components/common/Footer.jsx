import { Col, Image, Row } from "react-bootstrap";
import Container from "./Container";
import styles from "@/styles/components/common/Footer.module.css";
import { footerMenuList } from "utils/menudata";
import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedin,
  GrTwitter,
} from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import PrimaryButton from "./PrimaryButton";
export default function Footer() {
  return (
    <Container innerstyle={{ backgroundColor: "#0E62CB" }}>
      <Row>
        <Col xl={3} lg={3}>
          <div className={styles.footerLogo}>
            <Image src="/assets/icons/white-erip.png" alt="footer-icon" />
            <p className={styles.RepairSmallTitle}>Repair In Peace</p>
          </div>
          <div className={styles.footerPaymentSection}>
            <small className={styles.Copyright}>
              2020-2022 &copy; All Rights Reserved
            </small>
            <div className={styles.PaymentSection}>
              <p className={styles.PaymentSmallTitle}>Secure Payment</p>
              <div>
                <Image
                  src="/assets/images/visa.png"
                  alt="visa"
                  className={styles.PaymentImage}
                />
                <Image
                  src="/assets/images/master-card.png"
                  alt="master-card"
                  className={styles.PaymentImage}
                />
                <Image
                  src="/assets/images/maestro.png"
                  alt="maestro"
                  className={styles.PaymentImage}
                />
                <Image
                  src="/assets/images/american-express.png"
                  alt="american-express"
                  className={styles.PaymentImage}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6}>
          <Row>
            {footerMenuList.map((value, index) => (
              <Col xl={4} lg={2} xs={6} key={index}>
                <h6 className={styles.MenuTitle}>{value.title}</h6>
                <div className={styles.MenuList}>
                  {value.menu.map((menu, index) => (
                    <Link href={menu.link} key={index}>
                      <p className={styles.MenuName}>{menu.name}</p>
                    </Link>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={3} lg={3}>
          <div className={styles.LastColumn}>
            <p className={styles.LastColumnTitle}>We are just a call away</p>
            <p className={styles.LastColumnNumber}>
              <span className={styles.ContactIcon}>
                <BiPhone style={{ color: "#fff" }} />
              </span>
              000-000-1111
            </p>
            <PrimaryButton
              title={"Request a Call Back"}
              customClass={styles.footerBtn}
              variant={"outline-light"}
            />
            <div className={styles.IconListWrraper}>
              <div className={styles.IconWrraper}>
                <GrFacebookOption />
              </div>
              <div className={styles.IconWrraper}>
                <GrInstagram />
              </div>
              <div className={styles.IconWrraper}>
                <GrTwitter />
              </div>
              <div className={styles.IconWrraper}>
                <GrLinkedin />
              </div>
            </div>
          </div>
        </Col>
        <div className={styles.mobileFooterPay}>
          <div className={styles.PaymentSection}>
            <p className={styles.PaymentSmallTitle}>Secure Payment</p>
            <div>
              <Image
                src="/assets/images/visa.png"
                alt="visa"
                className={styles.PaymentImage}
              />
              <Image
                src="/assets/images/master-card.png"
                alt="master-card"
                className={styles.PaymentImage}
              />
              <Image
                src="/assets/images/maestro.png"
                alt="maestro"
                className={styles.PaymentImage}
              />
              <Image
                src="/assets/images/american-express.png"
                alt="american-express"
                className={styles.PaymentImage}
              />
            </div>
          </div>
          <small className={styles.Copyright}>
            2020-2022 &copy; All Rights Reserved
          </small>
        </div>
      </Row>
    </Container>
  );
}
