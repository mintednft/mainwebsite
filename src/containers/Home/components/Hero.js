import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxHeight: 320,
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
  },
}));

const Banner = ({ image, name }) => {
  const classes = useStyles();
  return (
    <CardMedia className={classes.media} image={image} title={name}>
      <Typography variant="h2">{name}</Typography>
    </CardMedia>
  );
};

const CAROUSEL_ITEMS = [
  {
    image: process.env.PUBLIC_URL + "/assets/artistcover.png",
    name: "Banner 1",
  },
  {
    image: process.env.PUBLIC_URL + "/assets/seahawk.png",
    name: "Banner 2",
  },
  {
    image: process.env.PUBLIC_URL + "/assets/artistcover.png",
    name: "Banner 3",
  },
];

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {/* <Typography variant="h2" className={classes.h2}>
        NFTs for Social Good
      </Typography>
      <Typography variant="h5" className={classes.h5}>
        Minted converts your social media into social impact. Proceeds go
        towards the people and causes you care about.
      </Typography> */}
      <Carousel
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
      </Carousel>
    </div>
  );
}
