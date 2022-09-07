import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import AllBookings from "@/components/MyBooking/AllBookings";
import ViewBooking from "@/components/MyBooking/ViewBooking";
import React from "react";

function myBookings() {
  return (
    <Layout title={"My Bookings"}>
      <Header />
      <AllBookings />
      <Footer />
    </Layout>
  );
}

export default myBookings;
