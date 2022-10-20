import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import MobileFooter from "@/components/common/MobileFooter";
import AllBookings from "@/components/MyBooking/AllBookings";
import ViewBooking from "@/components/MyBooking/ViewBooking";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function MyBookings() {
  const [mobileView, setMobileView] = useState(false);
  const router = useRouter();

  // login token for Mybooking process
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <Layout title={"My Bookings"}>
      <Header />
      <AllBookings />
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

export default MyBookings;
