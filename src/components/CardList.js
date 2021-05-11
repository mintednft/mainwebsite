import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Zoom from "react-reveal/Zoom";
import { getMockDrops } from "../mocks";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    //justifyContent: "center",
    overflow: "hidden",
  },
  item: {
    margin: "4px auto",
    borderRadius: theme.spacing(1.25),
    width: "min-content",
  },
}));

export default function CardList({
  card: Card,
  data = getMockDrops(3),
  getLink = () => "",
}) {
  const classes = useStyles();

  /* xs={12} sm={6} md={4} lg={3} xl={2} */
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={1} justify="flex-start">
        {data.map((o, i) => (
          <Grid item xs key={i.toString()}>
            <Zoom>
              <div className={classes.item}>
                <Link to={getLink(o)}>
                  <Card {...o} />
                </Link>
              </div>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
