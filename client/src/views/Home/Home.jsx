import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css"

const Home = () => {
  return (
    <>
      <h1 className={style.container}>Esta es la vista de Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
