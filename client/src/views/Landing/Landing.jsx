import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <h1>Welcome to Countries Page!</h1>
      <Link to="/home">
        <button className={style.button}>LETS GO!</button>
      </Link>
    </div>
  );
};

export default Landing;
