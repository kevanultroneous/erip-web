// react hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import { Header } from "@/components/common/Header";
import SelectDeviceHero from "@/components/SearchByModel/SelectDeviceHero";
import WhyErip from "@/components/common/WhyErip";
import Testimonials from "@/components/common/Testimonials";
import MobileFooter from "@/components/common/MobileFooter";
import Footer from "@/components/common/Footer";
import Layout from "@/components/common/Layout";
import LoginPopup from "@/components/Popups/LoginPopup";
import HowItWork from "@/components/common/HowItWork";
import ContactFAQ from "@/components/ContactUs/ContactFAQ";

// data
import { API_URL, TestimonialData } from "utils/data";

// external library
import axios from "axios";

// styles
import styles from "@/styles/components/personalGadgets/issuepage.module.css";
import OfferBanner from "@/components/Home/OfferBanner";
import InformationSection from "@/components/PersonalGadgets/informationSection";
import HomeHero from "@/components/Home/Hero";

function IssuePage({ data }) {
  // states
  const [mobileView, setMobileView] = useState(true);
  const [popupLogin, setPopupLogin] = useState(false);
  const [token, setToken] = useState(false);

  // useSelector

  // category brand model IDs
  const categoryID = useSelector((state) => state.issuePage.categoryID);
  const getBrandID = useSelector((state) => state.issuePage.brandID);
  const getModelID = useSelector((state) => state.issuePage.modelID);

  // Arrays of category testimonial hero Offers
  const categoryFaq = useSelector((state) => state.faqCategory);
  const brandsFaq = useSelector((state) => state.faqBrand);
  const modelsFaq = useSelector((state) => state.faqModel);

  // Arrays of category testimonial hero Offers
  const categoryTestimonial = useSelector((state) => state.testimonialCategory);
  const brandsTestimonial = useSelector((state) => state.testimonialBrands);
  const modelTestimonial = useSelector((state) => state.testimonialModels);

  // Arrays of category testimonial hero Offers
  const categoryHero = useSelector((state) => state.heroCategory);
  const brandsHero = useSelector((state) => state.heroBrands);
  const modelHero = useSelector((state) => state.heroModels);

  // Arrays of category testimonial hero Offers
  const categoryInfo = useSelector((state) => state.informationCategory);
  const brandsInfo = useSelector((state) => state.informationBrands);
  const modelInfo = useSelector((state) => state.informationModels);

  // Arrays of category testimonial hero Offers
  const categoryOffer = useSelector((state) => state.offerCategory);
  const brandsOffer = useSelector((state) => state.offerBrands);
  const modelOffer = useSelector((state) => state.offerModels);



  // declaration
  const router = useRouter();

  useEffect(() => {
    console.log(categoryTestimonial.data, "offer");
  }, [categoryTestimonial.data]);



  // useEffects
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);

    if (localStorage.getItem("token")) {
      setToken(true);
      setPopupLogin(false);
    } else {
      setToken(false);
    }
  }, []);

  // returned components
  return (
    <Layout title={"Personal Gadgets"}>
      <Header />
      <LoginPopup show={popupLogin} onHide={() => setPopupLogin(false)} />
      <SelectDeviceHero
        token={token}
        quoteaction={() => setPopupLogin(true)}
        // headClass={styles.selectDeviceHero}
        modelSection={styles.selectDeviceSection}
        homeQuery={router.query.issue}
      />
      <HomeHero offers={categoryOffer.data} />
      <HowItWork />
      <WhyErip />
      <InformationSection paragraph={categoryInfo.data} />
      <ContactFAQ faqArray={categoryFaq.data} />
      <Testimonials data={categoryTestimonial.data} />
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

// Testimonial API Calling
export async function getServerSideProps() {
  let home_testimonial = await axios
    .get(`${API_URL}api/v1/cms/testimonials`, {
      params: {
        page: "home",
      },
    })
    .then((res) => {
      res.data;
    })
    .catch((e) => console.log("testimonial error" + e));
  return {
    props: {
      data: {
        hometestimonial: home_testimonial ? home_testimonial : TestimonialData,
      },
    },
  };
}

export default IssuePage;
