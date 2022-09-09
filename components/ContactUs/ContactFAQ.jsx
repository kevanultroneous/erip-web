import React, { useEffect, useState } from "react";
import { AccordionFAQ } from "utils/accordionFAQ";
import AccordionComponent from "../common/AccordionComponent";
import Container from "../common/Container";
import styles from "@/styles/components/ContactUs/ContactFAQ.module.css";

function ContactFAQ({ faqArray }) {
  const [mobileView, setMobileView] = useState(true);
  useEffect(() => {
    window.innerWidth < 600 ? setMobileView(false) : setMobileView(true);
  }, []);

  return (
    <section className={styles.faqContainer}>
      <Container userdefinedclass={styles.faqMainContainer}>
        <div className={styles.faqHeading}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <AccordionComponent
          arr={faqArray || AccordionFAQ}
          customTitleStyle={styles.faqTitleStyles}
        />
      </Container>
    </section>
  );
}

export default ContactFAQ;
