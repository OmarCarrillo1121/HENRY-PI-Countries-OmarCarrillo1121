import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <>
      <h1>Countries del mondo!</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
