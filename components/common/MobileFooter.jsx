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
import { useState } from "react";
export default function MobileFooter() {
  const [selectedMenu, setSelectedMenu] = useState(false);
  const dataOfBottombar = [
    {
      icon: HiHome,
      name: "Home",
    },
    {
      icon: MdDevices,
      name: "Devices",
    },
    {
      icon: IoIosHelpCircle,
      name: "Help",
    },
    {
      icon: RiAccountPinCircleLine,
      name: "Account",
    },
  ];
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
                  key={index}
                  eventKey={index}
                  className={styles.AccordionBorder}
                >
                  <Accordion.Header>{value.title}</Accordion.Header>
                  <Accordion.Body>
                    {value.menu.map((v, i) => (
                      <Link href={v.link} target="_blank" key={i}>
                        <p>{v.name}</p>
                      </Link>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className={styles.PrimaryButtonWrraper}>
            <PrimaryButton
              title="Request a Call Back"
              buttonStyle={{ width: "100%" }}
            />
          </div>
          <div className={styles.BottomNavbar}>
            {dataOfBottombar.map((value, index) => (
              <div
                key={index}
                className={styles.BottomMenu}
                onClick={() => setSelectedMenu(index)}
              >
                <value.icon
                  className={styles.BottomIcon}
                  style={selectedMenu === index ? { color: "#000" } : null}
                />
                <p style={selectedMenu === index ? { color: "#000" } : null}>
                  {value.name}
                </p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
