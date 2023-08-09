import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getActivities, getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./Form.module.css";
import validation from "../../validation/validation";

const Form = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.allCountries);

  // Estado local para validar la info del form
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  // Estado local para setear los errores
  const [errors, setErrors] = useState({});

  // Guarda la info que escribimos en el form dentro del estado form
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    //validate({ ...form, [property]: value });
    setForm({
      ...form,
      [property]: value,
    });
    setErrors(
      validation({
        ...form,
        [property]: value,
      })
    );
  };
  // Guarda la info de los paises seleccionados en el estado local (en la prop countries)
  const handleAddCountry = (event) => {
    const countryToAdd = event.target.value;
    if (!form.countries.includes(countryToAdd))
      setForm({
        ...form,
        countries: [...form.countries, countryToAdd],
      });
  };
  // Postea la actividad y la guarda en la BDD
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !form.name ||
      !form.difficulty ||
      !form.duration ||
      !form.season ||
      !form.countries
    ) {
      return alert("Complete mandatory fields");
    }
    if (
      errors.name ||
      errors.difficulty ||
      errors.duration ||
      errors.season ||
      errors.countries
    ) {
      return alert("Wrong input, please fill only with valid data");
    }
    // console.log(errors);
    // if (errors.name) return alert("Please complete mandatory fields!");
    // else if (errors.difficulty)
    //   return alert("Please complete mandatory fields!");
    // else if (errors.duration) return alert("Please complete mandatory fields!");
    // else if (errors.season) return alert("Please complete mandatory fields!");
    // else if (errors.countries)
    //   return alert("Please complete mandatory fields!");

    dispatch(postActivity(form));
    alert("Activity created succesfully!");
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    // const response = axios
    //   .post("http://localhost:3001/activities", form)
    //   .then((res) => alert("Actividad creada correctamente!"))
    //   .catch((err) => alert("Error al crear actividad!"));
  };

  function handleDelete(event) {
    setForm({
      ...form,
      countries: form.countries.filter((country) => country !== event),
    });
  }

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className={style.formContainer}>
      <h1>Create your own activities!</h1>

      <form onSubmit={(event) => handleSubmit(event)} className={style.form}>
        <label className={style.inputLabel}>Name*: </label>
        <input
          className={style.input}
          name="name"
          type="text"
          placeholder="Activity name..."
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className={style.errors}>{errors.name}</span>}

        <label className={style.inputLabel}>Difficulty*: </label>
        <input
          className={style.input}
          name="difficulty"
          type="number"
          placeholder="Difficulty (1 to 5)..."
          value={form.difficulty}
          onChange={handleChange}
        />
        {errors.difficulty && (
          <span className={style.errors}>{errors.difficulty}</span>
        )}

        <label className={style.inputLabel}>Duration(hours): </label>
        <input
          className={style.input}
          name="duration"
          type="number"
          placeholder=" Duration hours (1 to 8)..."
          value={form.duration}
          onChange={handleChange}
        />
        {errors.duration && (
          <span className={style.errors}>{errors.duration}</span>
        )}

        <label className={style.inputLabel}>Season*: </label>
        <select
          className={style.input}
          name="season"
          type="text"
          placeholder="Season (Primavera, Verano, Otoño, Invierno"
          value={form.season}
          onChange={handleChange}
        >
          <option value="Null"></option>
          <option value="Primavera">Primavera</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
        </select>
        {errors.season && <span className={style.errors}>{errors.season}</span>}

        <label className={style.inputLabel}>Select countries*: </label>
        <select
          className={style.input}
          onChange={(event) => handleAddCountry(event)}
        >
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>

        {form.countries.map((el) => (
          <div className={style.selectedCountriesContainer}>
            <p className={style.selectedCountries}>{el}</p>
            <button
              className={style.deleteButton}
              onClick={() => handleDelete(el)}
            >
              X
            </button>
          </div>
        ))}

        {errors.countries && (
          <span className={style.errors}>{errors.countries}</span>
        )}

        <button className={style.buttonSubmit} type="submit">
          CREATE ACTIVITY
        </button>
      </form>
    </div>
  );
};

export default Form;
