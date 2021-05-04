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
}));

export default function InfluencerCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + "/assets/seahawk.png"}
        title="Paella dish"
      />
      <Avatar
        className={classes.avatar}
        src={process.env.PUBLIC_URL + "/assets/influencer.png"}
      />
      <CardHeader
        title={<Typography variant="h5">Russell Wilson</Typography>}
        subheader={
          <Typography className={classes.handle}>@russellwilson</Typography>
        }
      />
      <CardContent>
        <Typography className={classes.content}>
          NFL starting QB for the Seattle Seahawks. 2013 Superbowl Champion.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing className={classes.footer}>
        <Grid container>
          <Grid xs>
            <Typography className={classes.label}>1.3m</Typography>
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
