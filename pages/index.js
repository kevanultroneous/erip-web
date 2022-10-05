import BrowseOffer from "@/components/common/BrowseOffer";
import ExclusiveService from "@/components/common/ExclusiveService";
import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import HowItWork from "@/components/common/HowItWork";
import Layout from "@/components/common/Layout";
import MobileFooter from "@/components/common/MobileFooter";
import NewsAndUpdate from "@/components/common/NewsAndUpdate";
import Testimonials from "@/components/common/Testimonials";
import WhyErip from "@/components/common/WhyErip";
import GetYourFix from "@/components/Home/GetYourFix";
import HomeHero from "@/components/Home/Hero";
import OfferBanner from "@/components/Home/OfferBanner";
import JobCardPopUp from "@/components/MyBooking/JobCardPopUp";
import OfferadPopup from "@/components/Popups/OfferadPopup";
import { HeroSectionApi } from "api/homeapi";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  API_URL,
  GetYourFixCard,
  HomeHerodata,
  NewsandUpdateData,
  OfferBannerhomedata,
  TestimonialData,
} from "utils/data";


export default function Home({ data }) {
  const [mobileView, setMobileView] = useState(true);
  const [offerad, setOfferAd] = useState(false);
  const router = useRouter()
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);
    if (router.pathname == "/") {
      localStorage.setItem("city", "Bengaluru")
      localStorage.setItem("cityid", 1)
      router.push(`${localStorage.getItem("city")}`, `${localStorage.getItem("city")}`, {shallow: true})
    }
  }, []);

  return (
    <Layout title={"Home"}>
      <Header />
      <OfferadPopup show={offerad} onHide={() => setOfferAd(false)} />
      <HomeHero />
      <GetYourFix />
      <OfferBanner />
      <HowItWork />
      <WhyErip />
      <ExclusiveService />

      <BrowseOffer
        href={"offer-page"}
        imgsrc={"/assets/images/offer-big-banner.png"}
        imgalt={"offer-big-banner"}
      />
      <Testimonials />
      <NewsAndUpdate />
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

