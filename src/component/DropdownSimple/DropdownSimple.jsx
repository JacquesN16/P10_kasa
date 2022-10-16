import React, { useState } from "react";
import "./DropdownSimple.scss";

export default function DropdownSimple (props) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="collapsible br-10">
      <div
        className="collapsible-button br-10"
        onClick={() => setShowDetail(!showDetail)}
      >
        <div className="title-collapsible">{props.title}</div>
        <i
          className={showDetail ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          style={{}}
        ></i>
      </div>
      <div
        className="content br-10"
        style={{
          display: showDetail ? "block" : "none",
        }}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
};



