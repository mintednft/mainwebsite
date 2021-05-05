import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FollowButton from "./FollowButton";
import { formatCash, truncateText } from "../utils/index";

const useStyles = makeStyles((theme) => ({
  root: {
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
    marginTop: theme.spacing(4),
    boxShadow:
      "2.48384px 2.48384px 2.48384px 6.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 6.20961px rgba(0, 0, 0, 0.015)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1, 4),
    fontSize: 18,
    marginBottom: theme.spacing(2),
  },
}));

export default function ProfileSection({
  coverImg,
  profileImg,
  name,
  handle,
  about,
  follower_count,
  social_links = [],
}) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={coverImg}
          title="Paella dish"
        />
      </Card>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Avatar className={classes.avatar} src={profileImg} />
          <Typography variant="h3">{name}</Typography>
          <Button size="large" className={classes.handleButton}>
            @{handle}
          </Button>
          <Divider />
          <Typography className={classes.label} variant="h4">
            Bio
          </Typography>
          <Typography className={classes.about} title={about}>
            {truncateText(about, 250)}
          </Typography>
          <Divider />
        </Grid>
        <Grid item md={9}></Grid>
      </Grid>
      <CardContent className={classes.cardContent}></CardContent>
      <Divider />
      <CardActions disableSpacing className={classes.footer}>
        <Grid container>
          <Grid xs>
            <Typography className={classes.label}>
              {formatCash(follower_count)}
            </Typography>
            <Typography className={classes.caption}>Followers</Typography>
          </Grid>
          <Grid xs>
            <FollowButton />
          </Grid>
        </Grid>
      </CardActions>
    </div>
  );
}
