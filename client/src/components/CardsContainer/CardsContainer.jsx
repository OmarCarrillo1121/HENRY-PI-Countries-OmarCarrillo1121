import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const CardsContainer = () => {
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

  return (
    <div>
      <div>
      {currentCountries &&
        currentCountries.map((country) => {
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
    </div>
  );
};
export default CardsContainer;
