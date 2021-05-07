import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  h5: {
    fontWeight: 400,
    fontSize: 24,
  },
  h4: {
    fontWeight: 700,
    fontSize: 36,
    margin: theme.spacing(1, 0),
  },
}));

export default function BidPrice({
  label = "Current Bid",
  price = "$7,998",
  crypto = "2.4 ETH",
}) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" className={classes.h5}>
        {label}
      </Typography>
      <Typography variant="h4" className={classes.h4}>
        {price}
      </Typography>
      <Typography variant="h5" className={classes.h5}>
        {crypto}
      </Typography>
    </div>
  );
}
