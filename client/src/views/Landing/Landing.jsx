import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Countries Page!</h1>
      <Link to="/home">
        <button>LETS GO!</button>
      </Link>
    </div>
  );
};

export default Landing;
