import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "./components/Hero";
import FeaturedDrop from "./components/FeaturedDrop";
import LiveDrops from "../../components/LiveDrops";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hero />
      <Container>
        <FeaturedDrop />
        <LiveDrops />
      </Container>
    </React.Fragment>
  );
}
