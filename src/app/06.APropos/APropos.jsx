import React from "react";
import "./APropos.scss";
import infos from '../../data/aPropos.json'
import Dropdown from "../../component/DropdownSimple/Dropdown";

export default function APropos (){
  return (
    <div className="about-page center-wrapper">
      <header>
                <div className="header-wrapper br-25">
                    <p id="header-text">Chez vous, partout et ailleurs</p>
                </div>
      </header>
      <div className="about-collapsible">
        {infos && infos.map((info, index) => (
          <Dropdown
            title={info.title}
            description={info.content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};


