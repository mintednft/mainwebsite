import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { formatCash, truncateText, getSocialURL } from "../utils/index";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import ExitToApp from "@material-ui/icons/ExitToApp";
import ActionButtons from "./ActionButtons";
import BidPrice from "./BidPrice";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

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
    paddingTop: "25%",
    backgroundSize: "auto",
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
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[700],
  },
  caption: {
    fontSize: 14,
    color: theme.palette.grey[500],
  },
  cardContent: {
    height: 80,
    paddingTop: theme.spacing(0),
  },
  description: {
    fontWeight: 700,
    fontSize: 18,
    color: theme.palette.grey[700],
    maxWidth: 480,
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
  paper: {
    width: 480,
  },
  placeBidButton: {
    background: "#5B33F4",
    color: theme.palette.background.default,
    "&:hover": {
      background: "#5B33F4",
      boxShadow:
        "2.48384px 2.48384px 2.48384px 6.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 6.20961px rgba(0, 0, 0, 0.015)",
    },
  },
  borderRight: {
    borderRight: `2px solid ${theme.palette.grey[200]}`,
  },
  listItem: {
    background: theme.palette.background.default,
    boxShadow:
      "2.59415px 2.59415px 2.59415px 6.48539px rgba(0, 0, 0, 0.015), -2.59415px 2.59415px 0px 6.48539px rgba(0, 0, 0, 0.015)",
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(0, 0, 3, 0),
    padding: theme.spacing(0, 2),
  },
  listRoot: {
    maxWidth: 480,
  },
  listAction: {
    display: "flex",
  },
}));

const HISTORY_DATA = [
  {
    handle: "russellwilson",
    time: "Apr 30, 2021 at 2:20am",
    action: "Listed by",
    image: process.env.PUBLIC_URL + "/assets/influencer.png",
    price: "$2,931.65",
    crypto: "1.0 ETH",
  },
  {
    handle: "russellwilson",
    time: "Apr 30, 2021 at 2:20am",
    action: "Listed by",
    image: process.env.PUBLIC_URL + "/assets/influencer.png",
    price: "$2,931.65",
    crypto: "1.0 ETH",
  },
];

function History({ data = HISTORY_DATA }) {
  const classes = useStyles();
  return (
    <List className={classes.listRoot}>
      {data.map(({ handle, time, action, image, price, crypto }) => (
        <ListItem className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="caption" component="p">
                Listed by{" "}
                <Typography variant="caption" className={classes.caption}>
                  @{handle}
                </Typography>
              </Typography>
            }
            secondary={
              <Typography
                variant="caption"
                component="p"
                className={classes.caption}
              >
                {time}
              </Typography>
            }
          />
          <ListItemSecondaryAction className={classes.listAction}>
            <Box mr={1} fontSize={14} fontWeight={500} lineHeight={0.5}>
              <p>{price}</p>
              <p className={classes.caption}>{crypto}</p>
            </Box>
            <IconButton edge="end" aria-label="comments">
              <ExitToApp />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default function DropSection({}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card} elevation={1}>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + "/assets/dummydrop.png"}
          title="Paella dish"
        />
        <Button size="large" className={classes.handleButton}>
          @russellwilson
        </Button>
        <ActionButtons />
      </Card>
      <Box mt={9}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <div className={classes.details}>
              <Typography variant="h3">Night Universe Sky</Typography>
            </div>

            <div className={classes.section}>
              <Typography className={classes.label} variant="h4">
                Description
              </Typography>
              <Typography className={classes.description} title="">
                'Simulacra' is an approximate recreation of a lost video piece
                from memory. Our memories are in a constant state of flux. They
                change as our frame of reference does; they grow old as we do.
                'Simulacra' is a copy of something that no longer exists: a
                story I have forgotten, remembered and retold as best I can.
              </Typography>
            </div>
            <div className={classes.section}>
              <Typography className={classes.label} variant="h4">
                Edition of
              </Typography>
              <Typography variant="h3">1</Typography>
            </div>
            <Divider />
            <div className={classes.section}>
              <Typography className={classes.label} variant="h4">
                Links
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={5} justify="center">
            <Box marginLeft="auto">
              <Paper elevation={2} className={classes.paper}>
                <Box p={3}>
                  <Grid container={2}>
                    <Grid item xs className={classes.borderRight}>
                      <BidPrice />
                    </Grid>
                    <Grid item xs>
                      <Box pl={3} pr={2}>
                        <Typography variant="caption" component="p">
                          Once the starting bid has been placed, a 72-hour
                          auction for this artwork will begin.
                        </Typography>
                        <Box mt={3}>
                          <Typography
                            variant="caption"
                            component="p"
                            className={classes.caption}
                          >
                            <Link>Learn more</Link>
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box p={2}>
                  <Button fullWidth className={classes.placeBidButton}>
                    Place a bid
                  </Button>
                </Box>
              </Paper>
              <Box mt={3}>
                <Typography className={classes.label} variant="h3">
                  History
                </Typography>
                <History />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
