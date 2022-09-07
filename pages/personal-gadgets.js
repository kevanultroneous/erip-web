// react hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// components
import { Header } from "@/components/common/Header";
import SelectDeviceHero from "@/components/SearchByModel/SelectDeviceHero";
import WhyErip from "@/components/common/WhyErip";
import Testimonials from "@/components/common/Testimonials";
import MobileFooter from "@/components/common/MobileFooter";
import Footer from "@/components/common/Footer";
import Layout from "@/components/common/Layout";
import LoginPopup from "@/components/Popups/LoginPopup";
import HowItWork from "@/components/common/HowItWork";
import ContactFAQ from "@/components/ContactUs/ContactFAQ";

// data
import { API_URL, TestimonialData } from "utils/data";

// external library
import axios from "axios";

// styles
import styles from "@/styles/components/personalGadgets/issuepage.module.css";

function IssuePage({ data }) {
  // states
  const [mobileView, setMobileView] = useState(true);
  const [popupLogin, setPopupLogin] = useState(false);
  const [token, setToken] = useState(false);

  // declaration
  const router = useRouter();

  // useEffects
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);

    if (localStorage.getItem("token")) {
      setToken(true);
      setPopupLogin(false);
    } else {
      setToken(false);
    }
  }, []);

  // returned components
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
      <ContactFAQ />
      <Testimonials data={data.hometestimonial} />
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

// Testimonial API Calling
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
