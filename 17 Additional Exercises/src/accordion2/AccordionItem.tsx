import React from "react";

const AccordionItem = ({faq}: {faq: {question: string; answer: string}}) => {
  // console.log("faq:", faq);
  const {question, answer} = faq;
  return (
    <React.Fragment>
      <li className="accordion_item">
        <button className="button">
          {question}
          <span className="control">—</span>
        </button>
        <div className="answer_wrapper">
          <div className="answer">{answer}</div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default AccordionItem;
