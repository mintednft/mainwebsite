import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Heading from "../../../components/Heading";
import DropList from "../../../components/DropList";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
  },
  h2: {
    fontWeight: 700,
    fontSize: 64,
  },
  h5: {
    fontWeight: 400,
    fontSize: 24,
  },
}));

export default function LiveDrops() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading>Live drops</Heading>
      <DropList />
    </div>
  );
}
