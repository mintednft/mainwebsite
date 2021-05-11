import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: "center",
    maxWidth: 920,
    margin: "40px auto",
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
      <Fade down>
        <Typography variant="h2" className={classes.h2}>
          Marketplace
        </Typography>
      </Fade>
      <Fade up>
        <Typography variant="h5" className={classes.h5}>
          The Marketplace is where NFTs are traded user-to-user. Go to
          ⚡️Drops⚡️ to buy NFTs directly from Influencers x Artists
        </Typography>
      </Fade>
    </div>
  );
}
