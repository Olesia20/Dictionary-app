import React from "react";
export default function Exampl(props) {
  console.log(props.exampl);
  if (props.exampl) {
    return (
      <div>
        <strong className="example">Example:</strong>
        {props.exampl}
      </div>
    );
  } else {
    return null;
  }
}
