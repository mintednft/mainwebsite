import Header from "./components/Header";
import Home from "./containers/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/marketplace"></Route>
          <Route path="/drops"></Route>
          <Route path="/influencers"></Route>
          <Route path="/artists"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
