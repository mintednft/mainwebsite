import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfluencerList from "./components/InfluencerList";

const useStyles = makeStyles((theme) => ({}));

export default function Influencers() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <InfluencerList />
    </React.Fragment>
  );
}
