const validation = (form) => {
  const errors = {};
  if (!form.name) {
    errors.name = "Enter activity name";
  } else if (/[^A-Za-z0-9 ]+/g.test(form.name)) {
    errors.name = "Name must contain only letters or numbers";
  }
  if (!form.difficulty) {
    errors.difficulty = "Enter activity difficulty";
  } else if (form.difficulty < 1 || form.difficulty > 5) {
    errors.difficulty = "Must be between 1 and 5";
  }
  if (!form.duration) {
    errors.duration = "Enter activity duration";
  } else if (form.duration < 1 || form.duration > 8) {
    errors.duration = "Must be between 1 and 8 hours";
  }
  if (!form.season || form.season === "Null") {
    errors.season = "Enter activity season";
  }
  if (!form.countries) {
    errors.countries = "Enter countries!";
  }
  //   } else if (form.difficulty === "") {
  //     setErrors({ ...errors, difficulty: "Ingresar dificultad" });
  //   } else {
  //     setErrors({ ...errors, difficulty: "" });
  //   }
  return errors;
};
export default validation;
