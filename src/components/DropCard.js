import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Countdown from "./Countdown";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    borderRadius: theme.spacing(1.25),
    transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s",
    "&:hover": {
      transform: `translateY(-2px)`,
    },
    "&:hover > $header, &:hover > $caption": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.paper,
    },
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  header: {},
  caption: {
    fontSize: 14,
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

export default function DropCard({
  image,
  name,
  handle,
  current_bid,
  ending_in,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardHeader
        title={<Typography variant="h6">{name}</Typography>}
        subheader={
          <Typography variant="caption" className={classes.caption}>
            @{handle}
          </Typography>
        }
        className={classes.header}
      />
      <Divider light />
      <CardActions disableSpacing className={classes.footer}>
        <Grid container>
          <Grid xs>
            <Typography className={classes.label}>Current bid</Typography>
            <Typography className={classes.bid}>${current_bid}</Typography>
          </Grid>
          <Grid xs>
            <Typography className={classes.label}>Ending in</Typography>
            <Countdown time={ending_in} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
