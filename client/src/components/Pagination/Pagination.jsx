import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({countriesPerPage, allCountries, pagination}) => {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <div> 
      <section className={style.pagstyle}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <nav className="number" key={number}>
            <a onClick={() => pagination(number)}>{number}</a>
          </nav>
        ))}
        </section>
    </div>
  );
};
export default Pagination;
