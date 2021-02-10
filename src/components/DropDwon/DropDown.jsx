import React from "react";

const DropDown = ({ lists, value, handleChange, name, label }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select name={name} onChange={handleChange} value={value}>
        {lists &&
          lists.map((list) => <option value={list.value}>{list.value}</option>)}
      </select>
    </div>
  );
};

export default DropDown;
