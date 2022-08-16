import { Image } from "react-bootstrap";

export default function BrowseOffer({ imgsrc, imgalt }) {
  return <Image src={imgsrc} alt={imgalt} loading="lazy" width={"100%"} />;
}
