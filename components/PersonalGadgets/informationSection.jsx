import React from "react";
import Container from "../common/Container";

function InformationSection({ title, paragraph }) {
  return (
    <Container>
      {paragraph.length > 0 && (
        <>
          <h2>{title}</h2>
          {paragraph.map((para, index) => {
            return <p key={index}>{para.infosection_content}</p>;
          })}
        </>
      )}
    </Container>
  );
}

export default InformationSection;
