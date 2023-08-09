import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.title}>
        <Link to={`/detail/${props.id}`}>{props.name}</Link>
      </div>
      <img
        src={props.flag_image ? props.flag_image : "NOT_IMAGE"}
        alt=""
        height={100}
      />
      <p>
        <b>Continent:</b> {props.continent}
      </p>
      <p>
        <b>Population:</b> {props.population}
      </p>
      <a>
        <b>Activities:</b> {props.activities}
      </a>
    </div>
  );
};
export default Card;
