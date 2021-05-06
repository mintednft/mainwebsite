import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  wrapper: {
    borderBottom: `2px solid ${theme.palette.text.primary}`,
    margin: theme.spacing(6, 0),
    display: "flex",
    paddingBottom: theme.spacing(1),
  },
  live: {
    margin: "auto",
    marginRight: theme.spacing(1.5),
    animation: "blinker 1s cubic-bezier(.5, 0, 1, 1) infinite alternate",
  },
  heading: {
    fontWeight: 500,
  },
  action: {
    fontWeight: 500,
    color: theme.palette.grey[500],
  },
  "@global": {
    "@keyframes blinker": {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    },
  },
}));

export default function Heading({
  children,
  live = false,
  action: { href, label } = {},
}) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {live && (
        <FiberManualRecordIcon fontSize="small" className={classes.live} />
      )}
      <Typography variant="h4" className={classes.heading}>
        {children}
      </Typography>
      <div className={classes.grow}></div>
      {label && (
        <Typography
          variant="h5"
          component={Link}
          to={href}
          className={classes.action}
        >
          {label}
        </Typography>
      )}
    </div>
  );
}
