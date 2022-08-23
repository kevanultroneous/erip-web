import Link from "next/link";
import { Carousel, Image } from "react-bootstrap";

export default function HomeHero({ data }) {
  return (
    <Carousel indicators={false} variant="dark">
      {data.map((value, index) => (
        <Carousel.Item key={index} style={{ cursor: "pointer" }}>
          <Link href={value.hsection_click_url} target="_blank">
            <Image
              className="w-100"
              src={value.hsection_image_url}
              alt={value.hsection_title}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
