import Link from "next/link";
import { Carousel, Image } from "react-bootstrap";
import styles from "@/styles/components/Home/Hero.module.css";
import { HomeHerodata } from "utils/data";
export default function HomeHero({ data = HomeHerodata }) {
  return (
    <Carousel indicators={false} variant="dark">
      {data.map((value, index) => (
        <Carousel.Item key={index} className={styles.CarouselSlide}>
          <Link href={value.hsection_click_url} target="_blank">
            <Image
              src={value.hsection_image_url}
              alt={value.hsection_title}
              className={styles.CarouselImage}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
