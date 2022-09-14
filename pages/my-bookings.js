import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import AllBookings from "@/components/MyBooking/AllBookings";
import ViewBooking from "@/components/MyBooking/ViewBooking";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function myBookings() {
  const [mobileView, setMobileView] = useState(false);
  const router = useRouter()
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
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
