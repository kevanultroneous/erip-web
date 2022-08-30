import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import Offers from "@/components/OfferPage/Offers";
import React from "react";
import styles from "@/styles/components/OfferPage/Offers.module.css";

function offerPage() {
  return (
    <>
      <Layout title={"Offer Page"}>
        <Header />
        <Offers />
        <Footer />
      </Layout>
    </>
  );
}

export default offerPage;
