import { Accordion, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/NeedHelp.module.css";
import PrimaryButton from "../common/PrimaryButton";
export default function FeedbackQue() {
  return (
    <>
      <div className={styles.NeedHelpWrraper}>
        <label className={styles.MainLabel}>Feedback Questions</label>
        <div className="Needhelpaccordian">

          {/*  ---------- Feedback data ----------  */}
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {[
              "How was the technician’s behaviour?",
              "Was the technician dressed appropriately?",
              "How was the technician on time?",
            ].map((v, i) => (
              <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>{v}</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <input type="radio" name={`ans${i}`} /> Lorem Ipsum
                  </div>
                  <div>
                    <input type="radio" name={`ans${i}`} /> Lorem Ipsum
                  </div>
                  <div>
                    <input type="radio" name={`ans${i}`} /> Lorem Ipsum
                  </div>
                  <div>
                    <input type="radio" name={`ans${i}`} /> Lorem Ipsum
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
      <PrimaryButton
        title="Submit"
        buttonStyle={{
          width: "98%",
          background: "#0E62CB",
          color: "#fff",
          marginRight: "2.5rem",
          marginLeft: "0.5rem",
          marginTop: "1.5rem",
        }}
      />
    </>
  );
}
