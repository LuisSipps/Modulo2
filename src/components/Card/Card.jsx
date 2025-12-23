import {ImageStatus} from "../index";

function Card(props) {
  return (
    <div style={{border: "1px red solid"}}>
    <ImageStatus isSuperHost={true}/>
      <p>
        {props.texto}
      </p>
    </div>
  );
}

export default Card;
