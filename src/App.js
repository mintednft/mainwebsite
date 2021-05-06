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
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Drops from "./containers/Drops";
import Influencers from "./containers/Influencers";
import Influencer from "./containers/Influencers/Influencer";
import Artists from "./containers/Artists";
import Artist from "./containers/Artists/Artist";
import Marketplace from "./containers/Marketplace";

import SignIn from "./containers/Public/Auth/SignIn";
import SignUp from "./containers/Public/Auth/SignUp";

const useStyles = makeStyles((theme) => ({
  main: {
    //marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    maxWidth: theme.breakpoints.values.lg + 300,
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
        <Container maxWidth="lg" fixed className={classes.main}>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/marketplace">
              <Marketplace />
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
