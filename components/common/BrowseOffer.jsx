import { Image } from "react-bootstrap";
import styles from "@/styles/components/common/BrowseOffer.module.css";
export default function BrowseOffer({ imgsrc, imgalt }) {
  return (
    <div>
      <Image src={imgsrc} alt={imgalt} loading="lazy" fluid />
    </div>
  );
}
