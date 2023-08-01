import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
    if (form.difficulty < 1 || form.difficulty > 5) {
      setErrors({ ...errors, difficulty: "Valores incorrectos" });
    } else {
      setErrors({ ...errors, difficulty: "" });
    }
    if (form.difficulty === "")
      setErrors({ ...errors, difficulty: "Ingresar dificultad" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const response = axios
      .post("http://localhost:3001/activities", form)
      .then((res) => alert(res))
      .catch((err)=>alert(err))
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={changeHandler}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Difficulty: </label>
        <input
          name="difficulty"
          type="number"
          value={form.difficulty}
          onChange={changeHandler}
        />
        {errors.difficulty && <span>{errors.difficulty}</span>}
      </div>
      <div>
        <label>Duration: </label>
        <input
          name="duration"
          type="number"
          value={form.duration}
          onChange={changeHandler}
        />
        {errors.duration && <span>{errors.duration}</span>}
      </div>
      <div>
        <label>Season: </label>
        <input
          name="season"
          type="text"
          value={form.season}
          onChange={changeHandler}
        />
        {errors.season && <span>{errors.season}</span>}
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
