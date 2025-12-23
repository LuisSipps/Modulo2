import hosp from "../../assets/images/hospedaje.png";
import "./ImageStatus.css"
import ImageDefault from "../../assets/images/ImageDefault.jpg"

function ImageStatus(props) {
  return (
    <div>
      {props.isSuperHost === true && (
        <div className="tip">
          <h6>SuperAnfitrion</h6>
        </div>
      )}
      {props.imageUrl ? (
        <img className="image-div" src={props.imageUrl}></img>
      ) : (
        <img className="image-div" src={ImageDefault}></img>
      )}
    </div>
  );
}

export default ImageStatus;
