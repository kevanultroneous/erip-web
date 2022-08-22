import ContactAddress from "@/components/ContactUs/ContactAddress";
import ContactFAQ from "@/components/ContactUs/ContactFAQ";
import ContactHero from "@/components/ContactUs/ContactHero";
import React from "react";

function contactUs() {
  return (
    <>
      <ContactHero />
      <ContactAddress />
      <ContactFAQ />
    </>
  );
}

export default contactUs;
