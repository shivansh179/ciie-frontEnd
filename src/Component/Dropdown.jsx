import React, { useState } from "react";

const Dropdown = ({ id }) => {
  return (
    <div>
      <select id={id} className="custom-dropdown">
        <option value="Done" className="option1">
          Done
        </option>
        <option value="Stuck" className="option2">
          Stuck
        </option>
        <option value="Working" className="option3">
          Working
        </option>
        <option value="Not Active" className="option3">
          Not Active
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
