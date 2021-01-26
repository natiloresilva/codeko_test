import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Facts from "./pages/Facts/Facts";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/facts">
          <Facts />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
