import Link from "next/link";
import { Carousel, Image } from "react-bootstrap";
import styles from "@/styles/components/Home/Hero.module.css";
import { HomeHerodata } from "utils/data";
import { useEffect } from "react";
import { HeroSectionApi } from "api/homeapi";
import { useState } from "react";
import axios from "axios";

export default function HomeHero() {
  const [HomeHerod, setHomeHeroD] = useState(HomeHerodata);

  //  Hero section slider 
  useEffect(() => {
    HeroSectionApi()
      .then((r) => setHomeHeroD(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Carousel indicators={false} variant="dark">
      {HomeHerod.map((value, index) => (
        <Carousel.Item key={index} className={styles.CarouselSlide}>
          <Link href={value.hsection_click_url} target="_blank">
            <div className={styles.CarouselImage}>
              <Image
                src={value.hsection_image_url}
                alt={value.hsection_title}
                loading="lazy"
              />
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
