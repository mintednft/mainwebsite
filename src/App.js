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
import Artists from "./containers/Artists";
import Marketplace from "./containers/Marketplace";
import ProfileSection from "./components/ProfileSection";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    maxWidth: theme.breakpoints.values.lg + 300,
  },
  app: {
    minHeight: "100%",
  },
}));

const DUMMY_CARD_DATA = {
  coverImg: process.env.PUBLIC_URL + "/assets/seahawk.png",
  profileImg: process.env.PUBLIC_URL + "/assets/influencer.png",
  name: "Russell Wilson",
  handle: "russellwilson",
  about: "NFL starting QB for the Seattle Seahawks. 2013 Superbowl Champion.",
  follower_count: 1300000,
};

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Container maxWidth="lg" fixed className={classes.main}>
          <ProfileSection {...DUMMY_CARD_DATA} />
          {/* <Switch>
            <Route path="/marketplace">
              <Marketplace />
            </Route>
            <Route path="/drops">
              <Drops />
            </Route>
            <Route path="/influencers">
              <Influencers />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
