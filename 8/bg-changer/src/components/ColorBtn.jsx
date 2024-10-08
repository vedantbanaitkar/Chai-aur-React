import React from "react";

const ColorBtn = ({ color }) => {
    function clickHandler(){
        document.body.style.backgroundColor = color;
    }
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
      }}
      className="w-[100px] rounded-3xl"
     onClick={clickHandler}>
      {color}
    </button>
  );
};

export default ColorBtn;
