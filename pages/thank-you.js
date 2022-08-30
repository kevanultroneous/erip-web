import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import ThankYouBill from "@/components/ThankYou/ThankYouBill";
import ThankYouHero from "@/components/ThankYou/ThankYouHero";
import React from "react";

function thankYou() {
  return (
    <>
      <Layout title={"Thank you"}>
        <Header />
        <ThankYouHero />
        <ThankYouBill />
        <Footer />
      </Layout>
    </>
  );
}

export default thankYou;
