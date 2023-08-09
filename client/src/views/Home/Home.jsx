import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
// prettier-ignore
import { getCountries, filterByContinent, orderByName, orderByPopulation, searchByName, getActivities, filterByActivity} from "../../redux/actions";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  //!PAGINADO
  const allCountries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filtrar por continente
  function handleFilterContinent(event) {
    dispatch(filterByContinent(event.target.value));
  }
  // Filtrar por continente
  function handleFilterActivity(event) {
    dispatch(filterByActivity(event.target.value));
  }
  // Ordenar por nombre
  const [orden, setOrden] = useState("");
  function handleSortName(event) {
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  }
  // Ordenar por poblacion
  const [ordenPop, setOrdenPop] = useState("");
  function handleSortPop(event) {
    dispatch(orderByPopulation(event.target.value));
    setCurrentPage(1);
    setOrdenPop(`Ordenado ${event.target.value}`);
  }
  // Recargar todos los countries
  function handleClick(event) {
    dispatch(getCountries());
  }

  return (
    <div>
      <h1>COUNTRIES DEL MONDO!</h1>

      <div className={style.filters}>
        <div>
          <h3>FilterByContinent</h3>
          <select onChange={(event) => handleFilterContinent(event)}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
        </div>

        <div>
          <h3>FilterByActivity</h3>
          <select onChange={(event) => handleFilterActivity(event)}>
            {activities.map((act) => (
              <option value={act.name}>{act.name}</option>
            ))}
          </select>
        </div>

        <div>
          <h3>OrderByName</h3>
          <select onChange={(event) => handleSortName(event)}>
            <option value="AZ">A to Z</option>
            <option value="ZA">Z to A</option>
          </select>
        </div>

        <div>
          <h3>OrderByPopulation</h3>
          <select onChange={(event) => handleSortPop(event)}>
            <option value="LH">High to Low</option>
            <option value="HL">Low to high</option>
          </select>
        </div>

        <button
          onClick={(event) => {
            handleClick(event);
          }}
        >
          RELOAD
        </button>

        <SearchBar />
      </div>

      <Pagination
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        pagination={pagination}
      />

      <div className={style.container}>
        {currentCountries &&
          currentCountries.map((country) => {
            return (
              <Card
                key={country.id}
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
    </div>
  );
};

export default Home;
