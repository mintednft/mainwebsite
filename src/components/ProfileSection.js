import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { formatCash, truncateText, getSocialURL } from "../utils/index";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import ActionButtons from "./ActionButtons";
import Container from "@material-ui/core/Container";
import { Fade, Zoom } from "react-reveal";

const SOCIAL_ICONS = {
  instagram: Instagram,
  twitter: Twitter,
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  card: {
    width: "100%",
    borderRadius: theme.spacing(0),
  },
  media: {
    height: 0,
    paddingTop: "18.25%", // 16:9
  },
  avatar: {
    width: 200,
    height: 200,
    margin: `-100px auto 16px`,
    "& > img": {
      margin: 0,
    },
  },
  footer: {
    padding: theme.spacing(1, 2),
  },
  label: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  caption: {
    fontSize: 14,
    color: theme.palette.grey[500],
  },
  cardContent: {
    height: 80,
    paddingTop: theme.spacing(0),
  },
  about: {
    fontWeight: 700,
    fontSize: 18,
    color: theme.palette.grey[700],
  },
  handleButton: {
    boxShadow:
      "2.48384px 2.48384px 2.48384px 6.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 6.20961px rgba(0, 0, 0, 0.015)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1, 4),
    fontSize: 18,
    margin: theme.spacing(2, 0),
  },
  details: {
    textAlign: "center",
    margin: theme.spacing(2, 0),
  },
  section: {
    padding: theme.spacing(2, 0),
    margin: theme.spacing(2, 0),
  },
  socialButton: {
    fontSize: 24,
    fontWeight: 700,
    textTransform: "capitalize",
    color: theme.palette.grey[500],
    padding: theme.spacing(0, 1),
  },
  socialIcon: {
    color: theme.palette.grey[900],
  },
  main: {
    position: "relative",
  },
}));

function SocialLinks({ links = [] }) {
  const classes = useStyles();
  return links.map((o) => {
    const Icon = SOCIAL_ICONS[o.platform];
    return (
      <div key={o.platform}>
        <Fade up>
          <Button
            startIcon={<Icon className={classes.socialIcon} />}
            component="a"
            href={getSocialURL(o.platform, o.handle)}
            className={classes.socialButton}
          >
            {o.platform}
          </Button>
        </Fade>
      </div>
    );
  });
}

export default function ProfileSection({
  children,
  coverImg,
  profileImg,
  name,
  handle,
  about,
  follower_count,
  social_links = [
    { platform: "instagram", handle: "handle1" },
    { platform: "twitter", handle: "handle2" },
  ],
}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Fade big>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={coverImg}
            title="Paella dish"
          />
        </Card>
      </Fade>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Zoom>
              <Avatar className={classes.avatar} src={profileImg} />
            </Zoom>
            <div className={classes.details}>
              <Fade up cascade>
                <Typography variant="h3">{name}</Typography>
                <Button size="large" className={classes.handleButton}>
                  @{handle}
                </Button>
              </Fade>
            </div>
            <Divider />
            <div className={classes.section}>
              <Fade up cascade>
                <Typography className={classes.label} variant="h4">
                  Bio
                </Typography>
                <Typography className={classes.about} title={about}>
                  {truncateText(about, 250)}
                </Typography>
              </Fade>
            </div>
            <Divider />
            <div className={classes.section}>
              <Fade up cascade>
                <Typography className={classes.label} variant="h4">
                  Links
                </Typography>
                <SocialLinks links={social_links} />
              </Fade>
            </div>
          </Grid>
          <Grid item md={9} className={classes.main}>
            <ActionButtons />
            {children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
