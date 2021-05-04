import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Heading from "../../../components/Heading";
import CardList from "../../../components/CardList";
import InfluencerCard from "../../../components/InfluencerCard";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
  },
}));

export default function LiveDrops() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading>Influencers</Heading>
      <CardList card={InfluencerCard} />
    </div>
  );
}
