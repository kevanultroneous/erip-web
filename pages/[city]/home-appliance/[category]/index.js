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
import { getCategoriesByCity } from "api/categoryByCity";

// styles
// import styles from "@/styles/components/IssuePage/issuepage.module.css";

function HomeappliancesCategory() {
  const [mobileView, setMobileView] = useState(true);
  const [popupLogin, setPopupLogin] = useState(false);
  const [token, setToken] = useState(false);
  const [information, setInformation] = useState("");
  const [offers, setOffers] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  // Brand/ Category/ Segment/ Category
  const categoryID = useSelector((state) => state.issuePage.categoryID);
  const segmentID = useSelector((state) => state.issuePage.segmentID);
  const cityID = useSelector((state) => state.locationdata.city);

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
    // making responsive 
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);

    // setting token
    if (localStorage.getItem("token")) {
      setToken(true);
      setPopupLogin(false);
    } else {
      setToken(false);
    }
  }, []);


  // selected category, get home appliance
  useEffect(() => {
    dispatch(selectCategory(categoryID));
    dispatch(getHomeApplianceModel(categoryID));
    console.log({ homeApplianceSegment });
  }, [categoryID]);

  // set info, faq, offers, testimonial
  useEffect(() => {
    setInformation(categoryInfo.data);
    setFaqs(categoryFaq.data);
    setOffers(categoryOffer.data);
    setTestimonial(categoryTestimonial.data);
  }, [categoryID]);

  // set info,faqs, offers, testimonial
  useEffect(() => {
    setInformation(brandsInfo.data);
    setFaqs(brandsFaq.data);
    setOffers(brandsOffer.data);
    setTestimonial(brandsTestimonial.data);
  }, [segmentID]);

  useEffect(() => {
    // getting category from routes
    if (router.query.category) getCategoryFromQuery();
  }, []);

  const getCategoryFromQuery = async () => {
    const queryCategoryName = router.query.category
      .substring(0, router.query.category.lastIndexOf("-"))
      .replace("-", " ")
      .toUpperCase();
    await getCategoriesByCity(cityID)
      .then(
        (response) =>
          response.filter((cate) => cate.category_title == queryCategoryName)[0]
      )
      .then((selectedsegment) => {
        console.log({ "Jadu teri bajar": selectedsegment });
        if (selectedsegment) {
          dispatch(selectCategory(selectedsegment.category_id));
          dispatch(getHomeApplianceModel(selectedsegment.category_id));
        }
      })
      .catch((e) => console.log(e));
  };

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
      {mobileView && <Testimonials data={testimonial} />}
      {mobileView && <HomeApplianceDetails paragraph={information} />}
      {mobileView && <ContactFAQ faqArray={faqs} />}
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

export default HomeappliancesCategory;
