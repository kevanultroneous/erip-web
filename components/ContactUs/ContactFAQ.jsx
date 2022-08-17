import React from "react";
import { AccordionFAQ } from "utils/accordionFAQ";
import AccordionComponent from "../common/AccordionComponent";
import styles from "@/styles/components/ContactUs/ContactFAQ.module.css";

function ContactFAQ() {
  return (
    <section className={styles.faqContainer}>
      <div className={styles.faqHeading}>
        <h2>Frequently Asked Questions</h2>
      </div>
      <AccordionComponent
        arr={AccordionFAQ}
        customTitleStyle={styles.faqTitleStyles}
      />
    </section>
  );
}

export default ContactFAQ;
