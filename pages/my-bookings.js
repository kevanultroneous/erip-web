import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import AllBookings from "@/components/MyBooking/AllBookings";
import ViewBooking from "@/components/MyBooking/ViewBooking";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function myBookings() {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
  }, []);
  return (
    <Layout title={"My Bookings"}>
      <Header />
      <AllBookings />
      {mobileView ? null : <Footer />}
    </Layout>
  );
}

export default myBookings;
