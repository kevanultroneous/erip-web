import Link from "next/link";
import React from "react";
import Container from "../common/Container";

import styles from "@/styles/components/homeAppliances/HomeApplianceDetails.module.css";

function HomeApplianceDetails({ paragraph }) {
  return (
    <Container userdefinedclass={styles.homeApplianceDetailsContainer}>
      {/*  pass props bcz detail changes on differnt url & section */}
      <p>{paragraph}</p>
      <h6>
        <Link href={"#"}>
          <a>Know More</a>
        </Link>
      </h6>
    </Container>
  );
}

export default HomeApplianceDetails;
