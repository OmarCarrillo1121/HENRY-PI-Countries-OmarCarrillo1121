import axios from "axios";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(useParams());
  const country = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  // const [country, setCountry] = useState({});
  // useEffect(() => {
  //   axios.get("http://localhost:3001/countries/"+id).then(({ data }) => {
  //     if (data.continent) {
  //       setCountry(data);
  //     } else {
  //       window.alert("No hay paises con ese ID");
  //     }
  //   });
  //   return setCountry({});
  // }, [id]);

  return (
    <div className={style.detContainer}>
      {country.name ? (
        <div className={style.detail}>
          <div className={style.title}>{country.name}</div>
          <img src={country.flag_image} alt="" width={200} />
          <p>
            <b>Continent</b>: {country.continent}
          </p>
          <p>
            <b>Capital</b>: {country.capital}
          </p>
          <p>
            <b>Subregion</b>: {country.subregion}
          </p>
          <p>
            <b>Area</b>: {country.area} m2
          </p>
          <p>
            <b>Population</b>: {country.population}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
