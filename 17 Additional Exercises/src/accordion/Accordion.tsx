import React from "react";
import PropTypes from "prop-types";

import AccordionSection from "./AccordionSection";

class Accordion extends React.Component<{allowMultipleOpen: boolean}, {openSections: any}> {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props: {label: string; isOpen: boolean; onClick(label: string): void; allowMultipleOpen: boolean}) {
    super(props);

    const openSections = {};

    // @ts-ignore
    this?.props?.children?.forEach((child: {props: {isOpen: boolean; label: string}}) => {
      if (child.props.isOpen) {
        // @ts-ignore
        openSections[child.props.label] = true;
      }
    });

    this.state = {openSections};
    // console.log("openSections:", openSections);
  }

  onClick = (label: string) => {
    const {
      props: {allowMultipleOpen},
      state: {openSections},
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen,
        },
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen,
        },
      });
    }
  };

  render() {
    const {
      onClick,
      props: {children},
      state: {openSections},
    } = this as any;
    // console.log("this:", this); //* this -> Object
    return (
      <div style={{border: "2px solid #008f68"}}>
        {children?.map((child: any) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
            key={child.props.label}
          >
            {child.props.children}
            {/* {console.log("child:", child)} */}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
