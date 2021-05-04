import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ChatIcon from "@material-ui/icons/Chat";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    height: theme.spacing(12),
    background: theme.palette.grey[100],
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  link: {
    fontSize: 14,
    display: "block",
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  social: {
    color: "#262626",
    "& > .MuiIconButton-root": {
      margin: theme.spacing(0, 1),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  const renderLink = (label, href) => (
    <Typography component={Link} className={classes.link} href={href}>
      {label}
    </Typography>
  );

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <img src={process.env.PUBLIC_URL + "/assets/icon_logo.png"} />
        <div className={classes.grow} />
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              {renderLink("About Us")}
              {renderLink("Create an NFT with us")}
              {renderLink("What is an NFT?")}
            </Grid>
            <Grid item xs={4}>
              {renderLink("FAQ")}
              {renderLink("Team")}
              {renderLink("Letter from the founders")}
            </Grid>
            <Grid item xs={4}>
              {renderLink("Terms fo Service")}
              {renderLink("Privacy Policy")}
              <div className={classes.social}>
                <IconButton size="small">
                  <InstagramIcon />
                </IconButton>
                <IconButton size="small">
                  <TwitterIcon />
                </IconButton>
                <IconButton size="small">
                  <ChatIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Container>

        <div className={classes.grow} />
        <div>&nbsp;</div>
      </Toolbar>
    </AppBar>
  );
}
