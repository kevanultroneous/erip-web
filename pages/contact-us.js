import React, { useEffect, useState } from "react";
import ContactAddress from "@/components/ContactUs/ContactAddress";
import ContactFAQ from "@/components/ContactUs/ContactFAQ";
import ContactHero from "@/components/ContactUs/ContactHero";
import { Header } from "@/components/common/Header";

function ContactUs() {
  const [mobileView, setMobileView] = useState(true);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(false) : setMobileView(true);
  }, []);
  return (
    <>
      <Header />
      <ContactHero />
      <ContactAddress />
      {mobileView && <ContactFAQ />}
    </>
  );
}

export default ContactUs;
