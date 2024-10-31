import React from "react";
import "../assets/styles/components/Button.css";

const Button = ({ btnName, onClick, icon }) => {
  return (
    <div className="box">
      <button className="button" onClick={() => onClick()}>
        {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;
