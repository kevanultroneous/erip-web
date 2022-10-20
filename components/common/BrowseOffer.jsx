import { Image } from "react-bootstrap";
import styles from "@/styles/components/common/BrowseOffer.module.css";
import Link from "next/link";

//  export function for with props
export default function BrowseOffer({ imgsrc, imgalt, href }) {
  return (
    <div>
      <Link href={href}>
        <Image
          src={imgsrc}
          alt={imgalt}
          loading="lazy"
          className={styles.BrowseImage}
        />
      </Link>
    </div>
  );
}
