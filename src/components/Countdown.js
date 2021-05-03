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
  h4: {
    fontWeight: 700,
    fontSize: 36,
  },
  h5: {
    fontWeight: 400,
    fontSize: 24,
  },
}));

// Random component
const Completionist = () => <span>You are good to go!</span>;

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
