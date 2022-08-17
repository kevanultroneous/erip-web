import BrowseOffer from "@/components/common/BrowseOffer";
import ExclusiveService from "@/components/common/ExclusiveService";
import HowItWork from "@/components/common/HowItWork";
import Layout from "@/components/common/Layout";
import NewsAndUpdate from "@/components/common/NewsAndUpdate";
import Testimonials from "@/components/common/Testimonials";
import WhyErip from "@/components/common/WhyErip";
import GetYourFix from "@/components/Home/GetYourFix";
import HomeHero from "@/components/Home/Hero";
import OfferBanner from "@/components/Home/OfferBanner";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <HomeHero imgalt={"home-hero"} imgsrc="/assets/images/home-hero.png" />
      <GetYourFix />
      <OfferBanner />
      <HowItWork />
      <WhyErip />
      <ExclusiveService />
      <BrowseOffer imgsrc={"/assets/images/offer-big-banner.png"} imgalt={"offer-big-banner"} />
      <Testimonials />
      <NewsAndUpdate />
    </Layout>
  )
}