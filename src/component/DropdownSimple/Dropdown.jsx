import React, { useState } from "react";
import "./Dropdown.scss";

export default function Dropdown (props) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className={`dropdown br-5 ${props.dropdownClass ? props.dropdownClass : ''}`}>
      <div
        className="dropdown-button br-5"
        onClick={() => setShowDetail(!showDetail)}
      >
        <div className="title-dropdown">{props.title}</div>
        <i
          className={showDetail ?"fas fa-chevron-down":"fas fa-chevron-up"}
        > </i>
      </div>
      <div
        className="content"
        style={{
          display: showDetail ? "block" : "none",
        }}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
};



