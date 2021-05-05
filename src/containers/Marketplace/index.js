import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "./components/Hero";
import FeaturedNFT from "./components/FeaturedNFT";
import NFTList from "./components/NFTList";

const useStyles = makeStyles((theme) => ({}));

export default function Marketplace() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hero />
      <FeaturedNFT />
      <NFTList />
    </React.Fragment>
  );
}
