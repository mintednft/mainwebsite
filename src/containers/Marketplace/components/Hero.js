import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: "center",
    maxWidth: 920,
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

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h2" className={classes.h2}>
        Marketplace
      </Typography>
      <Typography variant="h5" className={classes.h5}>
        The Marketplace is where NFTs are traded user-to-user. Go to ⚡️Drops⚡️
        to buy NFTs directly from Influencers x Artists
      </Typography>
    </div>
  );
}
