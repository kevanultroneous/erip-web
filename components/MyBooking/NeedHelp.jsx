import { Accordion, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/NeedHelp.module.css";
export default function NeedHelp({ data }) {
  return (
    <div className={styles.NeedHelpWrraper}>
      <label className={styles.MainLabel}>Need Help?</label>
      <div className="Needhelpaccordian">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          {data.map((v, i) => (
            <Accordion.Item eventKey={i} key={v.need_help_id}>
              <Accordion.Header>{v.need_help_question}</Accordion.Header>
              <Accordion.Body>{v.need_help_answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
