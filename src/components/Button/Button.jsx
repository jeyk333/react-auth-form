import React from "react";

const Button = ({ label, action }) => {
  return (
    <button onClick={action} className="button">
      {label}
    </button>
  );
};

export default Button;
