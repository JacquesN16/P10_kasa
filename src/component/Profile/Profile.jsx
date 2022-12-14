import React from "react";
import Rating from "../Rating/Rating";
import "./Profile.scss";

export default function Profile  (props) {

  return (
    <div className="profile">
      <div className="profile-info">
        <div className="profile-name">{props.name}</div>
        <div className="profile-img">
          <img src={props.cover} alt="profil" />
        </div>
      </div>
      <div className="stars">
        <Rating rating={props.rating} />
      </div>
    </div>
  );
};


