import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FollowButton from "./FollowButton";
import { formatCash } from "../utils/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 282,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    width: 72,
    height: 72,
    margin: `-36px 16px 0`,
    "& > img": {
      margin: 0,
    },
  },
  handle: {
    fontSize: 18,
    color: theme.palette.grey[500],
    fontWeight: 700,
  },
  footer: {
    padding: theme.spacing(1, 2),
  },
  label: {
    fontSize: 18,
    fontWeight: 700,
  },
  caption: {
    fontSize: 14,
    color: theme.palette.grey[500],
  },
  content: {
    fontSize: 14,
  },
}));

export default function ProfileCard({
  coverImg,
  profileImg,
  name,
  handle,
  about,
  follower_count,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={coverImg}
        title="Paella dish"
      />
      <Avatar className={classes.avatar} src={profileImg} />
      <CardHeader
        title={<Typography variant="h5">{name}</Typography>}
        subheader={
          <Typography className={classes.handle}>@{handle}</Typography>
        }
      />
      <CardContent>
        <Typography className={classes.content}>{about}</Typography>
      </CardContent>
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
    </Card>
  );
}
