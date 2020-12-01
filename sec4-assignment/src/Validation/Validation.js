import React from "react";

const validation = (props) => {
  let caption = "Text too short";
  if (props.length <= 5) {
    caption = "text too short";
  } else {
    caption = "Text long enough";
  }

  return <div>{caption}</div>;
};

export default validation;
