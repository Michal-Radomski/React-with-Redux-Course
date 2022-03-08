import React from "react";

import faqs from "./data";
import AccordionItem from "./AccordionItem";

const Accordion = (): JSX.Element => {
  const [clicked, setClicked] = React.useState<number | null>(0);

  // console.log("clicked:", clicked);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem onToggle={() => handleToggle(index)} active={clicked === index} key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default Accordion;
