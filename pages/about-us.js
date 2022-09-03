import AboutHero from "@/components/About-Us/AboutHero";
import GreenEndevour from "@/components/About-Us/GreenEndevour";
import AboutTeam from "@/components/About-Us/AboutTeam";
import AboutFeature from "@/components/About-Us/AboutFeature";
import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useEffect, useState } from "react";
import MobileFooter from "@/components/common/MobileFooter";
import Layout from "@/components/common/Layout";

function AboutUs() {
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);
  return (
    <>
      <Layout title={"About Us"}>
        <Header />
        <AboutHero />
        <AboutTeam />
        <AboutFeature />
        <GreenEndevour />
        {mobileView ? <Footer /> : <MobileFooter />}
      </Layout>
    </>
  );
}

export default AboutUs;
