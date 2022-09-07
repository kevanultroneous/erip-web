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

// data
import { API_URL, TestimonialData } from "utils/data";

// external library
import axios from "axios";

// styles
// import styles from "@/styles/components/IssuePage/issuepage.module.css";

function Homeappliances() {
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);
  return (
    <Layout title={"Home Appliances"}>
      <Header />
      <WhyErip />
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

export default Homeappliances;
