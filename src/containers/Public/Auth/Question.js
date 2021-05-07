import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import cx from "clsx";

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
  influencer: {
    background: "#3250FE",
    "&:hover": {
      background: "#3250FE",
    },
  },
  artist: {
    background: "#EB2F96",
    "&:hover": {
      background: "#EB2F96",
    },
  },
  text: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Typography variant="h2" className={classes.text}>
          Are you an influencer? Artist? Just looking around?
        </Typography>
        <Container maxWidth="xs">
          <form className={classes.form} noValidate>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={cx(classes.button, classes.influencer)}
              component={Link}
              to="/verify/influencer"
            >
              I AM AN INFLUENCER
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={cx(classes.button, classes.artist)}
              component={Link}
              to="/verify/artist"
            >
              I AM AN ARTIST
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={cx(classes.button)}
              component={Link}
              to="/marketplace"
            >
              NEITHER
            </Button>
          </form>
        </Container>
      </div>
    </Container>
  );
}
