// react hooks
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef, useMemo } from "react";

// components
import { Header } from "@/components/common/Header";
import WhyErip from "@/components/common/WhyErip";
import Testimonials from "@/components/common/Testimonials";
import MobileFooter from "@/components/common/MobileFooter";
import Footer from "@/components/common/Footer";
import Layout from "@/components/common/Layout";
import LoginPopup from "@/components/Popups/LoginPopup";
import HowItWork from "@/components/common/HowItWork";
import InformationSection from "@/components/PersonalGadgets/informationSection";
import ContactFAQ from "@/components/ContactUs/ContactFAQ";

// data
import { API_URL, TestimonialData } from "utils/data";
import { AccordionFAQ } from "utils/accordionFAQ";

// external library
import axios from "axios";
import ModelSelect from "@/components/HomeAppliances/ModelSelect";
import HomeApplianceIssues from "@/components/HomeAppliances/HomeApplianceIssues";
import HomeApplianceHero from "@/components/HomeAppliances/HomeApplianceHero";
import HomeApplianceDetails from "@/components/HomeAppliances/HomeApplianceDetails";
import { getSegmentByCategory } from "api/homeAppliances";
import { getHomeApplianceModel } from "redux/actions/homeApplianceActions/homeAppliances";
import { selectCategory } from "redux/actions/issuePageActions/issuePageActions";

// styles
// import styles from "@/styles/components/IssuePage/issuepage.module.css";

function Homeappliances() {
  const [mobileView, setMobileView] = useState(true);
  const [popupLogin, setPopupLogin] = useState(false);
  const [token, setToken] = useState(false);

  // Brand/ Category/ Segment/ Category
  const categoryID = useSelector((state) => state.issuePage.categoryID);

  const homeApplianceSegment = useSelector(
    (state) => state.homeAppliancesModel.data
  );

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

  const dispatch = useDispatch();

  // declaration
  const router = useRouter();

  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);

    if (localStorage.getItem("token")) {
      setToken(true);
      setPopupLogin(false);
    } else {
      setToken(false);
    }
  }, []);

  useEffect(() => {
    dispatch(selectCategory(2));
    dispatch(getHomeApplianceModel(categoryID));
  }, []);

  // useEffect(() => {}, [homeApplianceSegment]);
  console.log({ homeApplianceSegment });

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    // const observer = useMemo(
    //   () =>
    //     new IntersectionObserver(([entry]) =>
    //       setIsIntersecting(entry.isIntersecting)
    //     ),
    //   []
    // );

    // console.log(observer, "observer");

    // useEffect(() => {
    //   observer.observe(ref.current);

    //   return () => {
    //     observer.disconnect();
    //   };
    // }, [ref, observer]);

    return isIntersecting;
  }

  return (
    <Layout title={"Home Appliances"}>
      <Header />
      <LoginPopup show={popupLogin} onHide={() => setPopupLogin(false)} />
      <HomeApplianceHero />
      <ModelSelect segmentArray={homeApplianceSegment} />
      <HomeApplianceIssues
        token={token}
        quoteaction={() => setPopupLogin(true)}
      />
      {mobileView && <WhyErip />}
      {mobileView && <Testimonials data={TestimonialData} />}
      {mobileView && <HomeApplianceDetails />}
      {mobileView && <ContactFAQ faqArray={AccordionFAQ} />}
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

export default Homeappliances;
