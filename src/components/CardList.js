import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  item: {
    margin: theme.spacing(1, 1),
    borderRadius: theme.spacing(1.25),
    "&:hover": {
      boxShadow: theme.shadows[2],
    },
  },
}));

export default function CardList({
  card: Card,
  data = [],
  getLink = () => "",
}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {data.map((o, i) => (
        <Link key={i.toString()} className={classes.item} to={getLink(o)}>
          <Card {...o} />
        </Link>
      ))}
    </div>
  );
}
