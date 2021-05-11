import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import cx from "clsx";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  actions: {
    position: "absolute",
    right: theme.spacing(1),
    marginTop: -24,
  },
  actionButton: {
    background: theme.palette.background.paper,
    margin: theme.spacing(0, 0, 0, 2),
    boxShadow:
      "2.48384px 2.48384px 2.48384px 6.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 6.20961px rgba(0, 0, 0, 0.015)",
    "&:hover": {
      background: theme.palette.background.paper,
      boxShadow:
        "2.48384px 2.48384px 2.48384px 8.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 8.20961px rgba(0, 0, 0, 0.015)",
    },
  },
  shareButton: {
    padding: theme.spacing(1.5, 4),
    borderRadius: theme.spacing(3),
  },
}));

export default function ActionButtons() {
  const classes = useStyles();

  return (
    <Fade up>
      <div className={classes.actions}>
        <IconButton className={classes.actionButton}>
          <MoreHoriz color="primary" />
        </IconButton>
        <Button
          className={cx(classes.actionButton, classes.shareButton)}
          startIcon={<ShareIcon />}
        >
          Share
        </Button>
      </div>
    </Fade>
  );
}
