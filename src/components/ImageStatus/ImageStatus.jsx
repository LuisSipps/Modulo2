import hosp from "../../assets/images/hospedaje.png";
import "./ImageStatus.css"

function ImageStatus(props) {
  return (
    <div>
        {props.isSuperHost === true && (<div className="tip">
            <h6>SuperAnfitrion</h6>
        </div>)}
      <img className="image-div" src={hosp}></img>
    </div>
  );
}

export default ImageStatus;
