import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import DropCard from "./DropCard";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  item: {
    margin: theme.spacing(1, 1),
  },
}));

export default function DropList() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {[...new Array(27)].map((o, i) => (
        <div key={i.toString()} className={classes.item}>
          <DropCard />
        </div>
      ))}
    </div>
  );
}
