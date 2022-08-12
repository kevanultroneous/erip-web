import { Col, Image, Row } from "react-bootstrap";
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
  ];
  return (
    <section className={styles.aboutTeamContainer}>
      <Row className={styles.aboutTeamHeading}>
        <h2>About The Team</h2>
      </Row>
      <Row className={styles.aboutTeamBoxes}>
        {teamData.map((teamMember, ind) => {
          return (
            <Col xl={3} key={ind}>
              <div className={styles.teamImages}>
                <Image src={teamMember.imagesrc} alt={ind + 1} />
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default AboutTeam;
