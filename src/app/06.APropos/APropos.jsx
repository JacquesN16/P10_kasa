import React from "react";
import "./APropos.scss";
import Banner from '../../component/Banner/Banner'

import DropdownSimple from "../../component/DropdownSimple/DropdownSimple";

const infos = [
  {
    title: "Fiabilité",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Responsabilité",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
];

export default function APropos (){
  return (
    <div className="about-page">
      <header>
                <div className="header-wrapper br-25">
                    <p id="header-text">Chez vous, partout et ailleurs</p>
                </div>
      </header>
      <div className="about-collapsible">
        {infos.map((info, index) => (
          <DropdownSimple
            title={info.title}
            description={info.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};


