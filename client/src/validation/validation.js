const validation = (form) => {
  const errors = {};
  if (!form.name) {
    errors.name = "Enter activity name";
  }
  if (form.name.length < 1 || form.name.length > 20) {
    errors.name = "Length must be less than 20 letters";
  }
//   if (/^[a-zA-Z ]*$/.test(form.name)) {
//     errors.name = "Must contain only letters and spaces";
//   }
  if (!form.difficulty) {
    errors.name = "Enter activity difficulty";
  }
  if (form.duration < 1 || form.duration > 8) {
    errors.duration = "Must be between 1 and 8 hours";
  }
  if (!form.season) {
    errors.season = "Enter activity season";
  }
  //   } else if (form.difficulty === "") {
  //     setErrors({ ...errors, difficulty: "Ingresar dificultad" });
  //   } else {
  //     setErrors({ ...errors, difficulty: "" });
  //   }
  return errors;
};
export default validation;
