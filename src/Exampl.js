import React from "react";
export default function Exampl(props) {
  if (props.exampl) {
    return (
      <div>
        <strong className="example">Example: </strong>

        {props.exampl}
      </div>
    );
  } else {
    return null;
  }
}
