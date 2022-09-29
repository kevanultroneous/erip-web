import Link from "next/link";
import React from "react";
import Container from "../common/Container";

import styles from "@/styles/components/homeAppliances/HomeApplianceDetails.module.css";

function HomeApplianceDetails() {
  return (
    <Container userdefinedclass={styles.homeApplianceDetailsContainer}>
      <h4>Washing Machine Repair</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos...
      </p>
      <h6>
        <Link href={"#"}>
          <a>Know More</a>
        </Link>
      </h6>
    </Container>
  );
}

export default HomeApplianceDetails;
