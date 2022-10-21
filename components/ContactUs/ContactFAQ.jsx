import React, { useEffect, useState } from "react";
import { AccordionFAQ } from "utils/accordionFAQ";
import AccordionComponent from "../common/AccordionComponent";
import Container from "../common/Container";
import styles from "@/styles/components/ContactUs/ContactFAQ.module.css";
import axios from "axios";
import { API_URL } from "utils/data";

function ContactFAQ({ faqArray }) {
  const [mobileView, setMobileView] = useState(true);

  //  FAQ UI for different chnages
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(false) : setMobileView(true);
  }, []);

  if (faqArray.length < 1) {
    faqArray = AccordionFAQ;
  }
  return (
    <section className={styles.faqContainer}>
      {faqArray.length > 0 && (
        <Container userdefinedclass={styles.faqMainContainer}>
          <div className={styles.faqHeading}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <AccordionComponent
            arr={faqArray}
            customTitleStyle={styles.faqTitleStyles}
          />
        </Container>
      )}
    </section>
  );
}

export default ContactFAQ;
