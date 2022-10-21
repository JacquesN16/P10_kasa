import React from "react";
import "./APropos.scss";
import Banner from '../../component/Banner/Banner'

import Dropdown from "../../component/DropdownSimple/Dropdown";

const infos = [
  {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
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
          <Dropdown
            title={info.title}
            description={info.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};


