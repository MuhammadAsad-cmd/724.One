import React from "react";
import CustomButton from "./CustomButton";

const ButtonBtn = () => {
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <>
      <h1>Reusable button</h1>
      <CustomButton
        style={buttonStyle}
        title="Click Me"
        onClick={() => alert("Button clicked!")}
      />
      <CustomButton
        style={{ ...buttonStyle, backgroundColor: "red" }}
        title="Also Click Me"
        onClick={() => alert("Another button clicked!")}
      />
    </>
  );
};

export default ButtonBtn;
