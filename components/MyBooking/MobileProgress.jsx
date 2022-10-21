import { Col, Row } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";
import styles from "@/styles/components/MyBooking/MobileProgress.module.css";
import { BsCheck2, BsCheckLg } from "react-icons/bs";
import { useState } from "react";
export default function MobileProgress({ data, processname }) {
  const [openmenu, setOpenMenu] = useState(true);
  return (
    <div className={styles.NextStepMain}>
      <Row
        className={styles.NextStepRow}
        style={
          openmenu
            ? { height: "fit-content", transition: "0.5s all ease" }
            : null
        }
      >
        <Col xs={6}>
          <p className={styles.NextStepTitle}>Next Steps</p>
        </Col>
        <Col xs={6} className={styles.UpDownLogoWrraper}>
          <IoIosArrowUp
            className={styles.UpDownLogo}
            size={30}
            onClick={() => setOpenMenu(!openmenu)}
            style={
              openmenu
                ? { transform: "rotate(0deg)", transition: "0.5s all ease" }
                : null
            }
          />
        </Col>
        <Col xs={12}>

          {/*  ----------------------------- Process indecator for mobile ----------------------------------------*/}
          {data.map((v, i) => (
            <>
              <div className={styles.StepsCover}>
                <span
                  className={`${styles.NumorCheck} ${
                    v.outd_bg_color == "ffd7bd"
                      ? styles.currentnumber
                      : v.outd_bg_color == "ccfff0"
                      ? styles.completenumber
                      : null
                  }`}
                >
                  {v.outd_bg_color == "ccfff0" ? (
                    <BsCheckLg color="#00B67F" size={10} />
                  ) : (
                    i + 1
                  )}
                </span>{" "}
                <p
                  className={`${
                    v.outd_bg_color == "ffd7bd"
                      ? styles.currentstep
                      : v.outd_bg_color == "ccfff0"
                      ? styles.completestep
                      : null
                  }`}
                >
                  {v.outd_text}
                </p>
              </div>
              {i != 4 && (
                <div className={styles.StepsCover}>
                  <div className={styles.GapeLine}></div>
                </div>
              )}
            </>
          ))}
        </Col>
      </Row>
    </div>
  );
}
