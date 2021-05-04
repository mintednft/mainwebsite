import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfluencersList from "./components/InfluencersList";

const useStyles = makeStyles((theme) => ({}));

export default function Influencers() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <InfluencersList />
    </React.Fragment>
  );
}
