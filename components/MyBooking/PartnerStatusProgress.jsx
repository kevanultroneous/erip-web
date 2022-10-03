import { Col } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/PartnerStatusProgress.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
export default function PartnerStatusProgress({ process, data, processname }) {
  return (
    <Col xs={12} md={12} lg={12} xl={12}>
      <div className={styles.ProgressWrraper}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={`${styles.arrowsteps} ${styles.clearfix}`}>
              {data.map((v, i) => (
                <div
                  key={i}
                  style={{
                    background: "#" + v.outd_bg_color,
                    color: "#" + v.outd_text_color,
                  }}
                  className={`${styles.step} ${
                    data[data.length - 1] ? styles.Laststep : null
                  } ${
                    null
                    // process == 0
                    //   ? styles.current
                    //   : process == 1
                    //   ? styles.complete
                    //   : process == 2
                    //   ? styles.delayed
                    //   : null
                  }`}
                >
                  {v.outd_text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.InfoWrraper}>
        <AiOutlineInfoCircle className={styles.InfoIcon} />{" "}
        <p className={styles.InfoText}>{processname}</p>
      </div>
    </Col>
  );
}
