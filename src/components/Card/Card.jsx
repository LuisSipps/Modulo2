import {ImageStatus} from "../index";
import "./Card.css"

function Card(props) {
  return (
    <div className="cardContainer">
    <ImageStatus isSuperHost={props.isSuperHost} imageUrl={props.imageUrl}/>
      <p>
        {props.texto}
      </p>
    </div>
  );
}

export default Card;
