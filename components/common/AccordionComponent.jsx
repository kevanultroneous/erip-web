import { Accordion } from "react-bootstrap";
import styles from "@/styles/components/common/AccordionComponent.module.css";

const AccordionComponent = ({ arr, customTitleStyle }) => {
  return (
    <div className={`${styles.AccordionContainer} AccordionContainer`}>
      <Accordion className={styles.AccordionMain} defaultActiveKey="0" flush>
        {arr.map((el, ind) => (
          <Accordion.Item key={ind} eventKey={`${ind}`}>
            <Accordion.Header
              className={`${styles.AccordionHeader} ${customTitleStyle}`}
            >
              {el.title || el.faqsection_question}
            </Accordion.Header>
            <Accordion.Body className={styles.AccordionBody}>
              {el.description || el.faqsection_answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
