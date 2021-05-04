import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Countdown from "./Countdown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 282,
    borderRadius: theme.spacing(1.25),
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  caption: {
    fontSize: 14,
    color: theme.palette.primary.main,
  },
  footer: {
    padding: theme.spacing(1, 2),
    background: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
  label: {
    fontSize: 18,
    color: "#BFBFBF",
  },
  bid: {
    fontSize: 14,
    marginTop: theme.spacing(0.5),
    fontWeight: 500,
  },
}));

export default function DropCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + "/assets/dummydrop.png"}
        title="Paella dish"
      />
      <CardHeader
        title={<Typography variant="h6">Days with Dad: Art Book</Typography>}
        subheader={
          <Typography variant="caption" className={classes.caption}>
            @russellwilson
          </Typography>
        }
      />
      <CardActions disableSpacing className={classes.footer}>
        <Grid container>
          <Grid xs>
            <Typography className={classes.label}>Current bid</Typography>
            <Typography className={classes.bid}>$2,899</Typography>
          </Grid>
          <Grid xs>
            <Typography className={classes.label}>Ending in</Typography>
            <Countdown />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
