import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Drops from "./containers/Drops";
import Drop from "./containers/Drops/Drop";
import Influencers from "./containers/Influencers";
import Influencer from "./containers/Influencers/Influencer";
import Artists from "./containers/Artists";
import Artist from "./containers/Artists/Artist";
import Marketplace from "./containers/Marketplace";

import SignIn from "./containers/Public/Auth/SignIn";
import SignUp from "./containers/Public/Auth/SignUp";
import Question from "./containers/Public/Auth/Question";
import Verify from "./containers/Public/Auth/Verify";

const useStyles = makeStyles((theme) => ({
  main: {
    //marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    //maxWidth: theme.breakpoints.values.lg + 300,
    padding: theme.spacing(0),
  },
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Container maxWidth={false} className={classes.main}>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route path="/verify/:userType(influencer|artist)">
              <Verify />
            </Route>
            <Route path="/marketplace">
              <Marketplace />
            </Route>
            <Route path="/drops/:id">
              <Drop />
            </Route>
            <Route path="/drops">
              <Drops />
            </Route>
            <Route path="/influencers/:id">
              <Influencer />
            </Route>
            <Route path="/influencers">
              <Influencers />
            </Route>
            <Route path="/artists/:id">
              <Artist />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
