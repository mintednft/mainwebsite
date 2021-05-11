import React from "react";
import CountdownLib from "react-countdown";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1, 0),
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 320,
  },
  miniWrapper: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 80,
    padding: theme.spacing(0.5, 0),
  },
  h4: {
    fontWeight: 700,
    fontSize: 36,
  },
  h5: {
    fontWeight: 400,
    fontSize: 20,
  },
  span: {
    fontWeight: 500,
    fontSize: 14,
  },
}));

// Random component
const Completionist = () => <span>Bid is expired!</span>;

export default function Countdown({
  time = Date.now() + 100000,
  withText = false,
}) {
  const classes = useStyles();

  const timeComponent = (time, label) => (
    <span>
      <Typography variant="h5" className={classes.h4}>
        {time}
      </Typography>
      <Typography variant="h5" className={classes.h5}>
        {label}
      </Typography>
    </span>
  );

  const countdownRenderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      if (!withText) {
        return (
          <div className={classes.miniWrapper}>
            <Typography component="span" className={classes.span}>
              {hours}h
            </Typography>
            <Typography component="span" className={classes.span}>
              {minutes}m
            </Typography>
            <Typography component="span" className={classes.span}>
              {seconds}s
            </Typography>
          </div>
        );
      }
      return (
        <div className={classes.wrapper}>
          {timeComponent(hours, "Hours")}
          {timeComponent(minutes, "Minutes")}
          {timeComponent(seconds, "Seconds")}
        </div>
      );
    }
  };

  return <CountdownLib date={time} renderer={countdownRenderer} />;
}
