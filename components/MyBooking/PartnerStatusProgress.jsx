import { Col } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/PartnerStatusProgress.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
export default function PartnerStatusProgress({
  f1 = {},
  f2 = {},
  f3 = {},
  f4 = {},
  f5 = {},
}) {
  return (
    <Col xs={12} md={12} lg={12} xl={12}>
      <div className={styles.ProgressWrraper}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={`${styles.arrowsteps} ${styles.clearfix}`}>
              <div
                className={`${styles.step} ${
                  f1 == 0
                    ? styles.current
                    : f1 == 1
                    ? styles.complete
                    : f1 == 2
                    ? styles.delayed
                    : null
                }`}
              >
                <span>Assigning Professional</span>
              </div>
              <div
                className={`${styles.step} ${
                  f2 == 0
                    ? styles.current
                    : f2 == 1
                    ? styles.complete
                    : f2 == 2
                    ? styles.delayed
                    : null
                }`}
              >
                <span>Partner Assigned</span>
              </div>
              <div
                className={`${styles.step} ${
                  f3 == 0
                    ? styles.current
                    : f3 == 1
                    ? styles.complete
                    : f3 == 2
                    ? styles.delayed
                    : null
                }`}
              >
                <span>Men At Work</span>
              </div>
              <div
                className={`${styles.step} ${
                  f4 == 0
                    ? styles.current
                    : f4 == 1
                    ? styles.complete
                    : f4 == 2
                    ? styles.delayed
                    : null
                }`}
              >
                <span>Payment </span>
              </div>
              <div
                className={`${styles.step} ${styles.Laststep} ${
                  f5 == 0
                    ? styles.current
                    : f5 == 1
                    ? styles.complete
                    : f5 == 2
                    ? styles.delayed
                    : null
                }`}
              >
                Review & Rating
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.InfoWrraper}>
        {f1 == 0 ? (
          <>
            <AiOutlineInfoCircle className={styles.InfoIcon} />{" "}
            <p className={styles.InfoText}>Partner assignment in progress</p>
          </>
        ) : f2 == 0 ? (
          <>
            <AiOutlineInfoCircle className={styles.InfoIcon} />{" "}
            <p className={styles.InfoText}>Partner assign - complete</p>
          </>
        ) : f3 == 0 ? (
          <>
            <AiOutlineInfoCircle className={styles.InfoIcon} />{" "}
            <p className={styles.InfoText}>
              Partner has accepted the order and is arriving at the location
            </p>
          </>
        ) : f3 == 1 ? (
          <>
            <AiOutlineInfoCircle className={styles.InfoIcon} />{" "}
            <p className={styles.InfoText}>Job started</p>
          </>
        ) : f4 == 0 ? (
          <>
            <AiOutlineInfoCircle className={styles.InfoIcon} />{" "}
            <p className={styles.InfoText}>Job complete - payment pending</p>
          </>
        ) : (
          ""
        )}
      </div>
    </Col>
  );
}
