import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getActivities, getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./Form.module.css";
import validation from "../../validation/validation";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

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
    if (form.countries)
      setForm({
        ...form,
        countries: [...form.countries, event.target.value],
      });
  };
  // Postea la actividad y la guarda en la BDD
  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.name) {
      return alert("Please enter a valid name");
    }
    if (errors.difficulty) {
      return alert("Please enter a valid difficulty");
    }
    if (errors.season) {
      return alert("Please enter a valid season");
    }
    dispatch(postActivity(form));
    alert("Actividad creada con éxito");
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

  // Valida la info que escribimos en el form
  // const validate = (form) => {
  //   const errors = {};
  //   if (form.difficulty < 1 || form.difficulty > 5) {
  //     setErrors({ ...errors, difficulty: "Valores incorrectos" });
  //   } else if (
  //     form.season !== "Primavera" ||
  //     form.season !== "Verano" ||
  //     form.season !== "Otoño" ||
  //     form.season !== "Invierno"
  //   ) {
  //     setErrors({
  //       ...errors,
  //       season: "Ingresar Primavera, Verano, Otoño o Invierno",
  //     });
  //   }
  //   return errors;
  // };
  // const validate = (form) => {
  //   if (form.difficulty < 1 || form.difficulty > 5) {
  //     setErrors({ ...errors, difficulty: "Valores incorrectos" });
  //   } else if (form.difficulty === "") {
  //     setErrors({ ...errors, difficulty: "Ingresar dificultad" });
  //   } else {
  //     setErrors({ ...errors, difficulty: "" });
  //   }
  // };

  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>
        <p>Create your own activities!</p>
      </h1>
      <form onSubmit={(event) => handleSubmit(event)} className={style.form}>
        <label>Name*: </label>
        <input
          className={style.input}
          name="name"
          type="text"
          placeholder="Activity name..."
          value={form.name}
          onChange={handleChange}
        />
        <div>{errors.name && <span>{errors.name}</span>}</div>

        <label>Difficulty*: </label>
        <input
          className={style.input}
          name="difficulty"
          type="number"
          placeholder="Difficulty (1 to 5)..."
          value={form.difficulty}
          onChange={handleChange}
        />
        <div>{errors.difficulty && <span>{errors.difficulty}</span>}</div>

        <label>Duration(hours): </label>
        <input
          className={style.input}
          name="duration"
          type="number"
          placeholder=" Duration in hours (0 to 8)"
          value={form.duration}
          onChange={handleChange}
        />
        <div>{errors.duration && <span>{errors.duration}</span>}</div>

        <label>Season*: </label>
        <input
          className={style.input}
          name="season"
          type="text"
          placeholder="Season (Primavera, Verano, Otoño, Invierno"
          value={form.season}
          onChange={handleChange}
        />
        {errors.season && <span>{errors.season}</span>}

        <label>Select countries*: </label>
        <select
          className={style.input}
          onChange={(event) => handleAddCountry(event)}
        >
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.id}
            </option>
          ))}
        </select>
        <ul>
          <li>{form.countries.map((el) => el + " ,")}</li>
        </ul>

        <button type="submit">SUBMIT</button>
      </form>

      <div></div>
    </div>
  );
};

export default Form;
