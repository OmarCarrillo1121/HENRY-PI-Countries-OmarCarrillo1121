import style from "./Card.module.css"

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>Name: {props.name}</p>
      <p>Flag: {props.flag_image}</p>
      <p>Continent: {props.continent}</p>
      <p>Subregion: {props.subregion}</p>
      <p>Area: {props.area}</p>
      <p>Population: {props.population}</p>
    </div>
  );
};
export default Card;
