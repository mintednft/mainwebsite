import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Heading from "../../../components/Heading";
import CardList from "../../../components/CardList";
import ProfileCard from "../../../components/ProfileCard";

const DUMMY_CARD_DATA = {
  coverImg: process.env.PUBLIC_URL + "/assets/artistcover.png",
  profileImg: process.env.PUBLIC_URL + "/assets/artistdp.png",
  name: "Andy Warhol",
  handle: "andywarhol",
  about: "Artist",
  follower_count: 1300000,
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
  },
}));

const getLink = ({ handle }) => {
  return `/artists/${handle}`;
};

export default function ArtistList() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading>Artists</Heading>
      <CardList
        card={ProfileCard}
        data={[...new Array(23)].map((i) => DUMMY_CARD_DATA)}
        getLink={getLink}
      />
    </div>
  );
}
