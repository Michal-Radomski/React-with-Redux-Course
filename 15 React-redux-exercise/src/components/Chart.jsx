import React from "react";
import {Sparklines, SparklinesLine} from "react-sparklines";

const Chart = (props) => {
  return (
    <div>
      <Sparklines data={props.temps}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};

export default Chart;
