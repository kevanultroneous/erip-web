import { Header } from "@/components/common/Header";
import IssueComponent from "@/components/IssuePage/IssueComponent";
import { issueData } from "utils/issueData";
import { Col, Row } from "react-bootstrap";
import IssueTotalBill from "@/components/IssuePage/IssueTotalBill";
import SelectDeviceHero from "@/components/SearchByModel/SelectDeviceHero";
import axios from "axios";
import WhyErip from "@/components/common/WhyErip";
import Testimonials from "@/components/common/Testimonials";
import { API_URL, TestimonialData } from "utils/data";
import Footer from "@/components/common/Footer";
import MobileFooter from "@/components/common/MobileFooter";
import styles from "@/styles/components/IssuePage/issuepage.module.css";

import { useRouter } from "next/router";

import Layout from "@/components/common/Layout";
import { useEffect, useState } from "react";
import LoginPopup from "@/components/Popups/LoginPopup";
import HowItWork from "@/components/common/HowItWork";

function IssuePage({ data }) {
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);
  const router = useRouter();
  const [popupLogin, setPopupLogin] = useState(false);
  {
    // console.log(router.query.issue);
  }
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
      setPopupLogin(false);
    } else {
      setToken(false);
    }
  }, []);

  return (
    <Layout title={"Personal Gadgets"}>
      <Header />
      <LoginPopup show={popupLogin} onHide={() => setPopupLogin(false)} />
      <SelectDeviceHero
        token={token}
        quoteaction={() => setPopupLogin(true)}
        // headClass={styles.selectDeviceHero}
        modelSection={styles.selectDeviceSection}
        homeQuery={router.query.issue}
      />
      <HowItWork />
      <WhyErip />
      <Testimonials data={data.hometestimonial} />
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

export async function getServerSideProps() {
  let home_testimonial = await axios
    .get(`${API_URL}api/v1/cms/testimonials`, {
      params: {
        page: "home",
      },
    })
    .then((res) => {
      res.data;
    })
    .catch((e) => console.log("testimonial error" + e));
  return {
    props: {
      data: {
        hometestimonial: home_testimonial ? home_testimonial : TestimonialData,
      },
    },
  };
}

export default IssuePage;
