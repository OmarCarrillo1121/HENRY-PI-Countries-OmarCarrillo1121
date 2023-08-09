import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);

  return (
    <div className={style.mainContainer}>
      <Link to="/home">HOME</Link>
      <Link to="/form">FORM</Link>
    </div>
  );
};
export default NavBar;
