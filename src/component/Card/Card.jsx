import "./Card.scss";


export default function Card (props)  {
  return (
    <div className="card-location">
      <img className="img-location" src={props.cover} alt=" location "></img>
      <h3 className="title-location">{props.title}</h3>
    </div>
  );
};



