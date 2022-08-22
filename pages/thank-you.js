import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import ThankYouBill from "@/components/ThankYou/ThankYouBill";
import ThankYouHero from "@/components/ThankYou/ThankYouHero";
import React from "react";

function thankYou() {
  return (
    <>
      <Header />
      <ThankYouHero />
      <ThankYouBill />
      <Footer />
    </>
  );
}

export default thankYou;
