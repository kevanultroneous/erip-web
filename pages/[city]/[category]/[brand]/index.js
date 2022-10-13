// react hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { getCategoriesByCity } from "api/categoryByCity";
import { selectCategory } from "redux/actions/issuePageActions/issuePageActions";

function BrandIds({ data }) {
  // states
  const [mobileView, setMobileView] = useState(true);
  const [popupLogin, setPopupLogin] = useState(false);
  const [token, setToken] = useState(false);
  const [information, setInformation] = useState("");
  const [offers, setOffers] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [categoryAvailable, setCategoryAvailable] = useState([]);

  // useSelector
  const cityID = useSelector((state) => state.locationdata.city);

  // category brand model IDs
  const categoryID = useSelector((state) => state.issuePage.categoryID);
  const getBrandID = useSelector((state) => state.issuePage.brandID);
  const getModelID = useSelector((state) => state.issuePage.modelID);

  // declaration
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffects
  useEffect(() => {
    window.innerWidth < 884 ? setMobileView(false) : setMobileView(true);

    if (localStorage.getItem("token")) {
      setToken(true);
      setPopupLogin(false);
    } else {
      setToken(false);
    }
    // getCategoryFromQuery();

    async function getCategoryFromCity() {
      await getCategoriesByCity(cityID)
        .then((resposnse) => {
          setCategoryAvailable(resposnse);
        })
        .catch((e) => console.log(e));
    }
    getCategoryFromCity();
    return;
  }, []);

  useEffect(() => {
    if (router.query.category) getCategoryFromQuery();
    return;
  }, [categoryAvailable]);

  const getCategoryFromQuery = async () => {
    const queryCategoryName = router.query.category
      .substring(0, router.query.category.lastIndexOf("-"))
      .toUpperCase();
    const allCategories = categoryAvailable.filter(
      (cate) => cate.category_title == queryCategoryName
    )[0];
    if (allCategories) dispatch(selectCategory(allCategories.category_id));
  };

  // returned components
  return (
    <Layout title={"Personal Gadgets"}>
      <Header />
      <LoginPopup show={popupLogin} onHide={() => setPopupLogin(false)} />
      <SelectDeviceHero
        token={token}
        quoteaction={() => setPopupLogin(true)}
        categoryAvailable={categoryAvailable}
        // headClass={styles.selectDeviceHero}
        modelSection={styles.selectDeviceSection}
        // homeQuery={router.query.issue}
      />
      <HomeHero offers={offers} />
      <HowItWork />
      <WhyErip />
      <InformationSection paragraph={information} />
      <ContactFAQ faqArray={faqs} />
      <Testimonials data={testimonial} />
      {mobileView ? <Footer /> : <MobileFooter />}
    </Layout>
  );
}

export default BrandIds;
