import { Image } from "react-bootstrap";

export default function HomeHero({ imgsrc, imgalt }) {
  return <Image src={imgsrc} alt={imgalt} loading="lazy" width={"100%"} />;
}
