import Link from "next/link";
import React from "react";
import styles from "@/styles/components/common/MainButtonCommon.module.css";

function MainButtonCommon({ linkhref, text, showIcon, Icon }) {
  return (
    <div className={styles.mainBtnContainer}>
      <Link href={linkhref}>
        <a className={styles.mainBtnLink}>
          {showIcon && <span>{Icon}</span>} {text}
        </a>
      </Link>
    </div>
  );
}

export default MainButtonCommon;
