import { Col } from "react-bootstrap";
import { process } from "utils/data";
import styles from "@/styles/components/Popups/StatusProcess.module.css";
import { MdEdit } from "react-icons/md";
import { render } from "react-dom";

export function StatusProcess({
  processStatus,
  datetime,
  address,
  datetimeclk,
  addressclk,
}) {
  return (
    <>
      <Col xs={12} md={12} lg={12} xl={12} className={styles.ProcessCol}>
        <div className={styles.Process}>
          {process.map((v, i) => (
            <div className={styles.ProcessGroup} key={i}>
              <span
                className={`${styles.ProcessNumber} ${
                  processStatus.includes(i) && styles.SelectedProcessNumber
                }`}
              >
                {i + 1}
              </span>
              <p
                className={`${styles.ProcessName} ${
                  processStatus.includes(i) && styles.SelectedProcessName
                }`}
              >
                {v}
                <h6 style={{ position: "absolute", width: "20rem" }}>
                  {i == 0 && datetime ? (
                    <>
                      {datetime}
                      <MdEdit color="#0E62CB" onClick={datetimeclk} />
                    </>
                  ) : i == 1 && address ? (
                    <>
                      {address}
                      <MdEdit color="#0E62CB" onClick={addressclk} />
                    </>
                  ) : null}
                </h6>
              </p>
              {i !== 2 && <hr className={styles.ProcessLines} />}
            </div>
          ))}
        </div>
      </Col>

      <Col xs={12}>
        <h6 className={styles.MobileProcessStatus}>
          {process[processStatus.indexOf(processStatus.length - 1)]}
        </h6>
      </Col>
    </>
  );
}
