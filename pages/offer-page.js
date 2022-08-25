import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Offers from "@/components/OfferPage/Offers";
import React from "react";

function offerPage() {
  return (
    <>
      <Header />
      <Container>
        <Offers />
      </Container>
      <Footer />
    </>
  );
}

export default offerPage;
