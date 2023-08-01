//Importar Route
import { Route } from "react-router-dom";
// Importar modulos
import { Landing, Home, Form, Detail } from "./views";
import NavBar from "./components/NavBar/NavBar";
// Importar modulos CSS
import "./App.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/form" component={Form} />
      <Route path="/home" render={() => <Home />} />
      {/* <Route path="/home">
        <Home />
      </Route> */}
    </div>
  );
}

export default App;
