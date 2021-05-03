import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderBottom: `2px solid ${theme.palette.text.primary}`,
    margin: theme.spacing(6, 0),
  },
  heading: {
    fontWeight: 500,
    "&::before": {
      content: "'•'",
      fontSize: 40,
      paddingRight: theme.spacing(1.5),
      verticalAlign: "middle",
    },
  },
}));

export default function Heading({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" className={classes.heading}>
        {children}
      </Typography>
    </div>
  );
}
