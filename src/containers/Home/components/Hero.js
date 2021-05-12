import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@material-ui/core/CardMedia";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxHeight: 320,
    textAlign: "center",
    maxWidth: theme.breakpoints.values.md,
    margin: "40px auto",
  },
  bannerContent: {
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(6),
    maxWidth: theme.breakpoints.values.md,
    background: "rgba(250, 250, 250, 0.5)",
  },
  h2: {
    fontWeight: 700,
    fontSize: 64,
  },
  h5: {
    fontWeight: 400,
    fontSize: 24,
  },
  media: {
    height: 320,
    display: "flex",
  },
}));

const Banner = ({ image, name }) => {
  const classes = useStyles();
  return (
    <CardMedia className={classes.media} image={image} title={name}>
      <div className={classes.bannerContent}>
        <Fade down>
          <Typography variant="h1">{name}</Typography>
        </Fade>
        <Fade up>
          <Typography variant="h4">
            Minted converts your social media into social impact. Proceeds go
            towards the people and causes you care about.
          </Typography>
        </Fade>
      </div>
    </CardMedia>
  );
};

const CAROUSEL_ITEMS = [
  {
    image: process.env.PUBLIC_URL + "/assets/artistcover.png",
    name: "NFTs for Social Good",
  },
  {
    image: process.env.PUBLIC_URL + "/assets/seahawk.png",
    name: "NFTs for Social Good",
  },
  {
    image: process.env.PUBLIC_URL + "/assets/artistcover.png",
    name: "NFTs for Social Good",
  },
];

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Fade down>
        <Typography variant="h2" className={classes.h2}>
          NFTs for Social Good
        </Typography>
      </Fade>
      <Fade up>
        <Typography variant="h5" className={classes.h5}>
          Minted converts your social media into social impact. Proceeds go
          towards the people and causes you care about.
        </Typography>
      </Fade>
      {/* <Carousel
        className={classes.carousel}
        autoPlay={true}
        animation="fade"
        cycleNavigation={true}
        // fullHeightHover={false}
        // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
        // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
        // indicatorContainerProps={{style: {margin: "20px"}}}
        // NextIcon='next'
        indicatorContainerProps={{
          style: {
            marginTop: "-25px",
            position: "absolute",
          },
        }}
      >
        {CAROUSEL_ITEMS.map((item, i) => {
          return <Banner {...item} key={i.toString()} />;
        })}
      </Carousel> */}
    </div>
  );
}
