import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  followButton: {
    fontSize: 12,
    fontWeight: 400,
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    margin: theme.spacing(2),
    padding: theme.spacing(0.25, 6),
    lineHeight: "20px",
  },
}));

export default function FollowButton() {
  const classes = useStyles();

  return (
    <Button size="small" className={classes.followButton}>
      Follow
    </Button>
  );
}
