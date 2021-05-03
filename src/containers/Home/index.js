import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "./components/Hero";
import FeaturedDrop from "./components/FeaturedDrop";
import Heading from "../../components/Heading";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hero />
      <Heading>Featured drop</Heading>
      <FeaturedDrop />
    </React.Fragment>
  );
}
