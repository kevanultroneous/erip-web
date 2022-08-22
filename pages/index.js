import BrowseOffer from "@/components/common/BrowseOffer";
import ExclusiveService from "@/components/common/ExclusiveService";
import HowItWork from "@/components/common/HowItWork";
import Layout from "@/components/common/Layout";
import MobileFooter from "@/components/common/MobileFooter";
import NewsAndUpdate from "@/components/common/NewsAndUpdate";
import Testimonials from "@/components/common/Testimonials";
import WhyErip from "@/components/common/WhyErip";
import GetYourFix from "@/components/Home/GetYourFix";
import HomeHero from "@/components/Home/Hero";
import OfferBanner from "@/components/Home/OfferBanner";
import axios from "axios";
import { API_URL, HomeHerodata, homeHerodata, NewsandUpdateData, OfferBannerhomedata, TestimonialData } from "utils/data";
export default function Home({ data }) {

  return (
    <Layout title={"Home"}>
      <HomeHero data={data.herosection.data} />
      <GetYourFix />
      <OfferBanner data={data.offersection.data} />
      <HowItWork />
      <WhyErip />
      <ExclusiveService />
      <BrowseOffer imgsrc={"/assets/images/offer-big-banner.png"} imgalt={"offer-big-banner"} />
      <Testimonials data={data.hometestimonial.data} />
      <NewsAndUpdate data={data.blogdata.data} />
      <MobileFooter />
    </Layout>
  )
}

export async function getServerSideProps() {
  // hero section api 
  let hero_section_home = await axios.get(`http://43.204.87.153/api/v1/cms/hero_section_home`)
    .then((res) => res.data).catch((e) => console.log(e))
  // blog section api
  let blog_response = await axios.get(`${API_URL}api/v1/cms/latest_blogs`)
    .then((res) => res.data).catch((e) => console.log("blog api error " + e))
  // testimonial home api
  let home_testimonial = await axios.get(`${API_URL}api/v1/cms/testimonials`, {
    params: {
      page: 'home'
    }
  }).then((res) => res.data).catch((e) => console.log("testimonial error" + e))
  // offersection home api
  let offersection_home = await axios.get(`${API_URL}api/v1/cms/offers_section_home`).then((res) => res.data).catch((e) => console.log("home offer error" + e))

  return {
    props: {
      data: {
        herosection: hero_section_home ? hero_section_home : HomeHerodata,
        blogdata: blog_response ? blog_response : NewsandUpdateData,
        hometestimonial: home_testimonial ? home_testimonial : TestimonialData,
        offersection: offersection_home ? offersection_home : OfferBannerhomedata,
      }
    }
  }
}