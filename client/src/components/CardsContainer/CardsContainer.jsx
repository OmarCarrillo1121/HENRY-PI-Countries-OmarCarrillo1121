import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={style.container}>
      {countries.map((country) => {
        return (
          <Card
            id={country.id}
            name={country.name}
            flag_image={country.flag_image}
            continent={country.continent}
            subregion={country.subregion}
            area={country.area}
            population={country.population}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;