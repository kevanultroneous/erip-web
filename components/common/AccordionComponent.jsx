import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "@/styles/components/common/AccordionComponent.module.css";

const AccordionComponent = () => {
  const arr = [
    {
      title: "Accordion Item #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Accordion Item #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className={`${styles.AccordionContainer} AccordionContainer`}>
      <Accordion className={styles.AccordionMain} defaultActiveKey="0" flush>
        {arr.map((el, ind) => (
          <Accordion.Item key={ind} eventKey={`${ind}`}>
            <Accordion.Header className={styles.AccordionHeader}>
              {el.title}
            </Accordion.Header>
            <Accordion.Body className={styles.AccordionBody}>
              {el.description}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
