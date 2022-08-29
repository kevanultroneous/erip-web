import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import Container from "../common/Container";

import styles from "@/styles/components/About-Us/AboutTeam.module.css";

function AboutTeam() {
  const teamData = [
    {
      imagesrc: "/assets/images/about-team-box.png",
    },
    {
      imagesrc: "/assets/images/about-team-box.png",
    },
    {
      imagesrc: "/assets/images/about-team-box.png",
    },
    {
      imagesrc: "/assets/images/about-team-box.png",
    },
    {
      imagesrc: "/assets/images/about-team-box.png",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.aboutTeamContainer}>
      <Container>
        <Row className={styles.aboutTeamHeading}>
          <h2>About The Team</h2>
        </Row>
        <Row className={`${styles.aboutTeamBoxes} aboutTeamBoxes`}>
          <Slider {...settings}>
            {teamData.map((teamMember, ind) => {
              return (
                <Col xl={3} md={3} key={ind} className={styles.aboutTeamCont}>
                  <div className={styles.teamImages}>
                    <Image fluid src={teamMember.imagesrc} alt={ind + 1} />
                  </div>
                </Col>
              );
            })}
          </Slider>
        </Row>
      </Container>
    </section>
  );
}

export default AboutTeam;
