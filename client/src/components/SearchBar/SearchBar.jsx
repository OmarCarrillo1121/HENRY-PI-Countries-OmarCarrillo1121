import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchByName(name));
    setName({
      name: "",
    });
  };

  return (
    <div>
      <input
        className={style.input}
        type="text"
        placeholder="Search..."
        onChange={(event) => handleInputChange(event)}
      />
      <button
        className={style.button}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        SEARCH
      </button>
    </div>
  );
}
