import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(5),
    maxWidth: theme.breakpoints.values.lg + 300,
  },
  app: {},
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Container maxWidth="lg" fixed className={classes.main}>
          <Switch>
            <Route path="/marketplace"></Route>
            <Route path="/drops"></Route>
            <Route path="/influencers"></Route>
            <Route path="/artists"></Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
