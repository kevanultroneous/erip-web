import { Accordion, Col, Row } from "react-bootstrap";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import { HiHome } from "react-icons/hi";
import { MdDevices } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { RiAccountPinCircleLine } from "react-icons/ri";
import styles from "@/styles/components/common/BottomNavbar.module.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { footerMenuList } from "utils/menudata";
import Link from "next/link";
export default function MobileFooter() {
  return (
    <Container userdefinedclass={"MobileFooter"}>
      <Row>
        <Col xs={12}>
          <div className={styles.SocialIconsWrraper}>
            <TiSocialFacebook className={styles.SocialIcon} />
            <FaInstagram className={styles.SocialIcon} />
            <AiOutlineTwitter className={styles.SocialIcon} />
            <RiLinkedinBoxFill className={styles.SocialIcon} />
          </div>
        </Col>
        <Col xs={12}>
          <div className={styles.FooterAccordian}>
            <Accordion className={"AccordionMobileFooter"}>
              {footerMenuList.map((value, index) => (
                <Accordion.Item
                  eventKey={index}
                  className={styles.AccordionBorder}
                >
                  <Accordion.Header>{value.title}</Accordion.Header>
                  <Accordion.Body>
                    {value.menu.map((v, i) => (
                      <Link href={v.link} target="_blank">
                        <p>{v.name}</p>
                      </Link>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <PrimaryButton
            title="Request a Call Back"
            buttonStyle={{
              border: "2px solid #0E62CB",
              color: "#0E62CB",
              width: "100%",
              justifyContent: "center",
            }}
          />
          <div className={styles.BottomNavbar}>
            <div className={styles.BottomMenu}>
              <HiHome className={styles.BottomIcon} />
              <p>Home</p>
            </div>
            <div className={styles.BottomMenu}>
              <MdDevices className={styles.BottomIcon} />
              <p>Devices</p>
            </div>
            <div className={styles.BottomMenu}>
              <IoIosHelpCircle className={styles.BottomIcon} />
              <p>Help</p>
            </div>
            <div className={styles.BottomMenu}>
              <RiAccountPinCircleLine className={styles.BottomIcon} />
              <p>Account</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
