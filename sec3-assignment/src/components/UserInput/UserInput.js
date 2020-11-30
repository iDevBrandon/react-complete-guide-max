import React from "react";

const userInput = (props) => {
  const style = {
    margin: "10px auto",
    border: "1px solid green",
  };

  return (
    <div>
      <input
        style={style}
        type="text"
        onChange={props.changed}
        value={props.value}
      />
    </div>
  );
};

export default userInput;
