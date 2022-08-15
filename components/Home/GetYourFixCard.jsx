import styles from "@/styles/components/Home/FixCard.module.css";
import { Image } from "react-bootstrap";
export default function FixCard({ imgsrc, imgalt, title }) {
  return (
    <div className={styles.ImgCard}>
      <Image src={imgsrc} alt={imgalt} loading="lazy" />
      <div className={styles.ImgTitleWrraper}>
        <p className={styles.ImgTitle}>{title}</p>
      </div>
    </div>
  );
}
