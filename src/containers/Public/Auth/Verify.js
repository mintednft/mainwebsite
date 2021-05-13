import React from "react";
import Button from "@material-ui/core/Button";
import { Link, useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import cx from "clsx";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5, 0),
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(8),
  },
  button: {
    margin: theme.spacing(1, 0),
    color: theme.palette.background.paper,
    minHeight: theme.spacing(5),
  },
  instagram: {
    background: "#DD2A7B",

    "&:hover": {
      background: "#DD2A7B",
    },
  },
  twitter: {
    background: "#08A0E9",
    "&:hover": {
      background: "#08A0E9",
    },
  },
  heading: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  text: {
    fontWeight: 400,
    marginTop: theme.spacing(2),
  },
  link: {
    color: "#3250FE",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { userType } = useParams();

  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Typography variant="h2" className={classes.heading}>
          Verify you are an {userType}
        </Typography>
        <Typography variant="h4" className={classes.text}>
          Other users will be able to see a verified checkmark on your profile
          once you verify your Twitter and/or Instagram account(s). This boosts
          the value of your NFT and helps the community verify its
          chain-of-ownership.
        </Typography>
        <Container maxWidth="xs">
          <form className={classes.form} noValidate>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={cx(classes.button, classes.instagram)}
              component={Link}
              to="/marketplace"
              startIcon={<Instagram />}
            >
              Authorize Instagram
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={cx(classes.button, classes.twitter)}
              component={Link}
              to="/marketplace"
              startIcon={<Twitter />}
            >
              Authorize Twitter
            </Button>
          </form>
          <Link to="/marketplace" className={classes.link}>
            {"Skip this step"}
          </Link>
        </Container>
      </div>
    </Container>
  );
}
