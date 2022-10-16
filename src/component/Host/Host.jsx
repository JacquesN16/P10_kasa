import React from "react";
import "./Host.scss";
import Tag from "../Tag/Tag";
import Profile from "../Profile/Profile";


export default function Host (props){
    console.log(props.title)
  return (
    <div className="detail">
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="location">{props.location}</div>
        <div className="tags">
          {props.tags.map((tag, index) => {
            return <Tag key={`tag-${index}`} name={tag} />;
          })}
        </div>
      </div>
      <div>
        <Profile rating={props.rating} name={props.name} cover={props.cover} />
      </div>
    </div>
  );
};


