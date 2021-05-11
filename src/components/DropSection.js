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
import Heading from "./Heading";
import Container from "@material-ui/core/Container";
import { Fade, Zoom } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  card: {
    width: "100%",
    borderRadius: theme.spacing(0),
    background: theme.palette.grey[100],
  },
  media: {
    minHeight: 420,
    //paddingTop: "25%",
    backgroundSize: "auto",
  },
  avatar: {
    width: 104,
    height: 104,
    marginRight: theme.spacing(4),
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
    color: theme.palette.grey[500],
  },
  description: {
    fontWeight: 700,
    fontSize: 18,
    color: theme.palette.grey[700],
    maxWidth: 640,
  },
  handleButton: {
    background: theme.palette.background.paper,
    boxShadow:
      "2.48384px 2.48384px 2.48384px 6.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 6.20961px rgba(0, 0, 0, 0.015)",
    "&:hover": {
      background: theme.palette.background.paper,
      boxShadow:
        "2.48384px 2.48384px 2.48384px 8.20961px rgba(0, 0, 0, 0.015), -2.48384px 2.48384px 0px 8.20961px rgba(0, 0, 0, 0.015)",
    },
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1, 4),
    fontSize: 18,
    marginTop: -24,
    position: "absolute",
    left: theme.spacing(1),
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
    minHeight: 56,
  },
  listRoot: {
    maxWidth: 480,
  },
  listAction: {
    display: "flex",
  },
  relative: {
    position: "relative",
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
      <Fade up cascade>
        {data.map(({ handle, time, action, image, price, crypto }, i) => (
          <ListItem key={i.toString()} className={classes.listItem}>
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
      </Fade>
    </List>
  );
}

const OTHER_VIEWS_DATA = [
  {
    platform: "Etherscan",
    url: "#TODO",
  },
  {
    platform: "Etherscan",
    url: "#TODO",
  },
];

function OtherViews({ data = OTHER_VIEWS_DATA }) {
  const classes = useStyles();
  return (
    <List className={classes.listRoot}>
      <Fade up cascade>
        {data.map(({ platform, url }) => (
          <ListItem key={platform} className={classes.listItem}>
            <ListItemText
              primary={<Typography variant="h5">View on {platform}</Typography>}
            />
            <ListItemSecondaryAction className={classes.listAction}>
              <IconButton
                edge="end"
                aria-label="external-link"
                component="a"
                href={url}
              >
                <ExitToApp />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </Fade>
    </List>
  );
}

const INFLUENCER_ARTIST_DATA = {
  influencer: {
    name: "Russell Wilson",
    handle: "russellwilson",
    image: process.env.PUBLIC_URL + "/assets/influencer.png",
  },
  artist: {
    name: "Andy Warhol",
    handle: "andywarhol",
    image: process.env.PUBLIC_URL + "/assets/artistdp.png",
  },
};

function InfluencerAndArtist({ influencer = {}, artist = {} }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Heading>INFLUENCER x ARTIST</Heading>
      <List>
        <Fade up cascade>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={influencer.image} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h3">{influencer.name}</Typography>}
              secondary={
                <Typography variant="h4" className={classes.caption}>
                  @{influencer.handle}
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={artist.image} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h3">{artist.name}</Typography>}
              secondary={
                <Typography variant="h4" className={classes.caption}>
                  @{artist.handle}
                </Typography>
              }
            />
          </ListItem>
        </Fade>
      </List>
    </React.Fragment>
  );
}

export default function DropSection({}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card} elevation={0}>
        <Zoom>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + "/assets/saturn.png"}
            title={"Drop Name"}
          />
        </Zoom>
      </Card>
      <Container className={classes.relative}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Button size="large" className={classes.handleButton}>
              @russellwilson
            </Button>
            <Box mt={9}>
              <Fade up cascade>
                <div className={classes.details}>
                  <Typography variant="h3">Night Universe Sky</Typography>
                </div>

                <div className={classes.section}>
                  <Typography className={classes.label} variant="h4">
                    Description
                  </Typography>
                  <Typography className={classes.description} title="">
                    'Simulacra' is an approximate recreation of a lost video
                    piece from memory. Our memories are in a constant state of
                    flux. They change as our frame of reference does; they grow
                    old as we do. 'Simulacra' is a copy of something that no
                    longer exists: a story I have forgotten, remembered and
                    retold as best I can.
                  </Typography>
                </div>
                <div className={classes.section}>
                  <Typography className={classes.label} variant="h4">
                    Edition of
                  </Typography>
                  <Typography variant="h3">1</Typography>
                </div>
                <div className={classes.section}>
                  <OtherViews />
                </div>
              </Fade>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <ActionButtons />
            <Box display="flex" mt={9}>
              <Box flexGrow={1}></Box>

              <Box>
                <Fade up cascade>
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
                </Fade>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <InfluencerAndArtist {...INFLUENCER_ARTIST_DATA} />
      </Container>
    </div>
  );
}
