import React from "react";

interface CustomDivElem {
  current: HTMLDivElement;
  scrollHeight: number;
}

const AccordionItem = ({
  faq,
  active,
  onToggle,
}: {
  faq: {question: string; answer: string};
  active: boolean;
  onToggle(): void;
}) => {
  // console.log("faq:", faq);
  const {question, answer} = faq;

  const [Style, setStyle] = React.useState({});

  React.useEffect(() => {
    active ? setStyle({height: contentEl?.current?.scrollHeight}) : setStyle({height: "0px"});
  }, [active]);

  const contentEl = React.useRef<CustomDivElem>();
  // console.log("contentEl:", contentEl);
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? "—" : "+"} </span>
      </button>
      {/* @ts-ignore */}
      <div ref={contentEl} className="answer_wrapper" style={Style}>
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
