import React, { useEffect, useState } from "react";
import ContactAddress from "@/components/ContactUs/ContactAddress";
import ContactFAQ from "@/components/ContactUs/ContactFAQ";
import ContactHero from "@/components/ContactUs/ContactHero";
import { Header } from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Layout from "@/components/common/Layout";

function ContactUs() {
  //  State for Dynamic Media Query
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    // Dynamic Media query for Contact Faq section
    window.innerWidth < 600 ? setMobileView(false) : setMobileView(true);
  }, []);
  const ary = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];
  return (
    <>
      <Layout title={"Contact Us"}>
        <Header />
        <ContactHero />
        <ContactAddress />
        {/* Dynamic FAQ condition */}
        {mobileView && <ContactFAQ faqArray={ary} />}
        <Footer />
      </Layout>
    </>
  );
}

export default ContactUs;
