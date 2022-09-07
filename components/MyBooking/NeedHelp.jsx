import { Accordion, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/MyBooking/NeedHelp.module.css";
export default function NeedHelp() {
  return (
    <Col xs={12} md={6} lg={6} xl={6}>
      <div className={styles.NeedHelpWrraper}>
        <label className={styles.MainLabel}>Need Help?</label>
        <div className="Needhelpaccordian">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {[0, 1, 2, 3].map((v, i) => (
              <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>
                  Lorem ipsum dolor sit amet, consectetur adipiscing?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </Col>
  );
}
