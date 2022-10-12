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
          {data.map((v, i) => (
            <>
              <div className={styles.StepsCover}>
                <span
                  className={`${styles.NumorCheck} ${
                    f1 == 0
                      ? styles.currentnumber
                      : f1 == 1
                      ? styles.completenumber
                      : f1 == 2
                      ? styles.delayednumber
                      : null
                  }`}
                >
                  {f1 == 1 ? <BsCheckLg color="#00B67F" size={10} /> : "1"}
                </span>{" "}
                <p
                  className={`${
                    f1 == 0
                      ? styles.currentstep
                      : f1 == 1
                      ? styles.completestep
                      : f1 == 2
                      ? styles.delayedstep
                      : null
                  }`}
                >
                  Assigning Proffesional
                </p>
              </div>

              <div className={styles.StepsCover}>
                <div className={styles.GapeLine}></div>
              </div>
            </>
          ))}
          {/* 1 */}

          {/* 2 */}
          {/* <div className={styles.StepsCover}>
            <span
              className={`${styles.NumorCheck} ${
                f2 == 0
                  ? styles.currentnumber
                  : f2 == 1
                  ? styles.completenumber
                  : f2 == 2
                  ? styles.delayednumber
                  : null
              }`}
            >
              {f2 == 1 ? <BsCheckLg color="#00B67F" size={10} /> : "2"}
            </span>{" "}
            <p
              className={`${
                f2 == 0
                  ? styles.currentstep
                  : f2 == 1
                  ? styles.completestep
                  : f2 == 2
                  ? styles.delayedstep
                  : null
              }`}
            >
              Partner Assigned
            </p>
          </div>
          <div className={styles.StepsCover}>
            <div className={styles.GapeLine}></div>
          </div> */}
          {/* 3 */}
          {/* <div className={styles.StepsCover}>
            <span
              className={`${styles.NumorCheck} ${
                f3 == 0
                  ? styles.currentnumber
                  : f3 == 1
                  ? styles.completenumber
                  : f3 == 2
                  ? styles.delayednumber
                  : null
              }`}
            >
              {f3 == 1 ? <BsCheckLg color="#00B67F" size={10} /> : "3"}
            </span>
            <p
              className={`${
                f3 == 0
                  ? styles.currentstep
                  : f3 == 1
                  ? styles.completestep
                  : f3 == 2
                  ? styles.delayedstep
                  : null
              }`}
            >
              Men At Work
            </p>
          </div>
          <div className={styles.StepsCover}>
            <div className={styles.GapeLine}></div>
          </div> */}
          {/* 4 */}
          {/* <div className={styles.StepsCover}>
            <span
              className={`${styles.NumorCheck} ${
                f4 == 0
                  ? styles.currentnumber
                  : f4 == 1
                  ? styles.completenumber
                  : f4 == 2
                  ? styles.delayednumber
                  : null
              }`}
            >
              {f4 == 1 ? <BsCheckLg color="#00B67F" size={10} /> : "4"}
            </span>{" "}
            <p
              className={`${
                f4 == 0
                  ? styles.currentstep
                  : f4 == 1
                  ? styles.completestep
                  : f4 == 2
                  ? styles.delayedstep
                  : null
              }`}
            >
              Payment & Receipt
            </p>
          </div> */}
          {/* <div className={styles.StepsCover}>
            <div className={styles.GapeLine}></div>
          </div> */}
          {/* 5 */}
          {/* <div className={styles.StepsCover}>
            <span
              className={`${styles.NumorCheck} ${
                f5 == 0
                  ? styles.currentnumber
                  : f5 == 1
                  ? styles.completenumber
                  : f5 == 2
                  ? styles.delayednumber
                  : null
              }`}
            >
              {f5 == 1 ? <BsCheckLg color="#00B67F" size={10} /> : "5"}
            </span>
            <p
              className={`${
                f5 == 0
                  ? styles.currentstep
                  : f5 == 1
                  ? styles.completestep
                  : f5 == 2
                  ? styles.delayedstep
                  : null
              }`}
            >
              Rating & Review
            </p>
          </div> */}
        </Col>
      </Row>
    </div>
  );
}
