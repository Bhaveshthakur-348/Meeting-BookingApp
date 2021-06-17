import "./styles.css";
import Header from "./Header";
import Home from "./Home.js";
import InfoPage from "./InfoPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/InfoPage">
            <InfoPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
