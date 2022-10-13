import { Accordion, Col, Image, Modal, Row } from "react-bootstrap";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import { HiChevronRight, HiHome } from "react-icons/hi";
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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "utils/data";
import axios from "axios";

export const BottomBar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const router = useRouter();
  const [devices, setDevices] = useState(false);
  const [devicedata, setDeviceData] = useState([]);
  useEffect(() => {
    setDeviceApiData();
  }, []);

  const setDeviceApiData = async () => {
    await axios
      .get(`${API_URL}api/v1/categories_by_cities`, {
        params: {
          city: 1,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setDeviceData(res.data.data);
          // console.log(res.data.data);
        }
      })
      .catch((e) => console.log("get your fix error" + e));
  };
  const dataOfBottombar = [
    {
      icon: HiHome,
      name: "Home",
      link: "/",
      linkable: true,
    },
    {
      icon: MdDevices,
      name: "Devices",
      linkable: false,
    },
    {
      icon: IoIosHelpCircle,
      name: "Help",
      link: "/contact-us",
      linkable: true,
    },
    {
      icon: RiAccountPinCircleLine,
      name: "Account",
      link: "/my-bookings",
      linkable: true,
    },
  ];
  return (
    <>
      <Modal
        show={devices}
        onHide={() => setDevices(false)}
        centered
        size="md"
        className="OfferPopup Searchpopups"
      >
        <Modal.Body>
          {devicedata.map((v, i) => (
            <Row className="mb-3" key={i}>
              <Col xs={2} md={2} lg={2} xl={2}>
                <Image
                  src={v.category_icon_url}
                  alt="coming soon"
                  height={50}
                  width={"100%"}
                />
                {v.coming_soon ? (
                  <p
                    style={{ background: "red", fontSize: "12px" }}
                    className="mt-2 text-center text-white"
                  >
                    coming soon
                  </p>
                ) : null}
              </Col>
              <Col xs={10} md={10} lg={10} xl={10}>
                <Row>
                  <Col
                    xs={9}
                    md={9}
                    lg={9}
                    xl={9}
                    style={{ alignItems: "center", justifyContent: "center" }}
                    className="mt-3 "
                  >
                    {v.category_title}
                  </Col>
                  <Col
                    xs={3}
                    md={3}
                    lg={3}
                    xl={3}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    className="mt-3"
                  >
                    <HiChevronRight size={20} />
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
          <PrimaryButton
            title="Close"
            buttonStyle={{ width: "100%" }}
            clickHandler={() => setDevices(false)}
          />
        </Modal.Body>
      </Modal>
      <div className={styles.BottomNavbar}>
        {dataOfBottombar.map((value, index) => (
          <div
            key={index}
            className={styles.BottomMenu}
            onClick={() => {
              if (!value.linkable) {
                if (value.name == "Devices") {
                  setDevices(true);
                  setSelectedMenu(index);
                }
              } else {
                setSelectedMenu(index);
                router.push(value.linkable ? value.link : "/");
              }
            }}
          >
            <value.icon
              className={styles.BottomIcon}
              style={
                selectedMenu === index
                  ? { color: "#000" }
                  : null || router.pathname == value.link
                  ? { color: "#000" }
                  : null
              }
            />
            <p
              style={
                selectedMenu === index
                  ? { color: "#000" }
                  : null || router.pathname == value.link
                  ? { color: "#000" }
                  : null
              }
            >
              {value.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
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

          <BottomBar />
        </Col>
      </Row>
    </Container>
  );
}
