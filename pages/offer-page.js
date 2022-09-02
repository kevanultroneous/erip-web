import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import Offers from "@/components/OfferPage/Offers";
import { useEffect, useState } from "react";
import MobileFooter from "@/components/common/MobileFooter";
import styles from "@/styles/components/OfferPage/Offers.module.css";

function OfferPage() {
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
  }, []);
  return (
    <>
      <Layout title={"Offer Page"}>
        <Header />
        <Offers />
        {mobileView ? <Footer /> : <MobileFooter />}
      </Layout>
    </>
  );
}

export default OfferPage;
