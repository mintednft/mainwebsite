import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Container } from "@material-ui/core";
import Countdown from "../../../components/Countdown";
import cx from "clsx";
import Fade from "react-reveal/Fade";

import Heading from "../../../components/Heading";
import BidPrice from "../../../components/BidPrice";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  container: {
    textAlign: "center",
    margin: "auto",
    maxWidth: 1024,
  },
  img: {
    //boxShadow: "2.87957px 2.87957px 2.87957px 7.20781px rgba(0, 0, 0, 0.125)",
    display: "block",
    margin: "auto",
    borderRadius: theme.shape.borderRadius,
  },
  handleButton: {
    marginTop: theme.spacing(4),
    boxShadow:
      "2.48384px 2.48384px 2.48384px 6.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 6.20961px rgba(0, 0, 0, 0.015)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1, 4),
    fontSize: 18,
  },
  h2: {
    fontWeight: 700,
    fontSize: 52,
    marginBottom: theme.spacing(2),
  },
  h5: {
    fontWeight: 400,
    fontSize: 24,
  },
  button: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2, 7),
    fontSize: 20,
    transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s",
    boxShadow:
      "2.72783px 2.72783px 2.72783px 6.81958px rgba(0, 0, 0, 0.015), -2.72783px 2.72783px 0px 6.81958px rgba(0, 0, 0, 0.015)",
    "&:hover": {
      boxShadow:
        "2.72783px 2.72783px 2.72783px 10.81958px rgba(0, 0, 0, 0.015), -2.72783px 2.72783px 0px 10.81958px rgba(0, 0, 0, 0.015)",
      transform: "translateY(-2px)",
    },
  },
  btnDetails: {
    background: theme.palette.background.default,
    //color: theme.palette.background.default,
    "&:hover": {
      background: theme.palette.background.default,
    },
  },
}));

export default function FeaturedDrop() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading live>Featured drop</Heading>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Fade left>
              <img
                src={process.env.PUBLIC_URL + "/assets/palm_spring.png"}
                className={classes.img}
                alt="Featured Drop"
              />
            </Fade>
            <Fade left>
              <Button
                size="large"
                className={classes.handleButton}
                color="secondary"
              >
                @russellwilson
              </Button>
            </Fade>
          </Grid>
          <Grid item md={6}>
            <Fade right>
              <Typography variant="h2" className={classes.h2}>
                Night Universe Sky [Vale of Memory]
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <BidPrice />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" className={classes.h5}>
                    Auction ending in
                  </Typography>
                  <Countdown withText />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    size="large"
                    className={cx(classes.button)}
                    color="secondary"
                    variant="contained"
                  >
                    Place a bid
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="large"
                    className={cx(classes.button, classes.btnDetails)}
                    variant="contained"
                  >
                    View details
                  </Button>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
