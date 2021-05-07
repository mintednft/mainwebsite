import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    //justifyContent: "center",
    overflow: "hidden",
  },
  item: {
    margin: "8px auto",
    borderRadius: theme.spacing(1.25),
    "&:hover": {
      boxShadow: theme.shadows[2],
    },
    width: "min-content",
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
      <Grid container spacing={1} justify="flex-start">
        {data.map((o, i) => (
          <Grid item xs key={i.toString()}>
            <div className={classes.item}>
              <Link to={getLink(o)}>
                <Card {...o} />
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
