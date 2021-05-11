import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Hero from "./components/Hero";
import FeaturedNFT from "./components/FeaturedNFT";
import NFTList from "./components/NFTList";

const useStyles = makeStyles((theme) => ({}));

export default function Marketplace() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hero />
      <Container>
        <FeaturedNFT />
        <NFTList />
      </Container>
    </React.Fragment>
  );
}
