import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Heading from "../../../components/Heading";
import CardList from "../../../components/CardList";
import ProfileCard from "../../../components/ProfileCard";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
  },
}));

const DUMMY_CARD_DATA = {
  coverImg: process.env.PUBLIC_URL + "/assets/seahawk.png",
  profileImg: process.env.PUBLIC_URL + "/assets/influencer.png",
  name: "Russell Wilson",
  handle: "russellwilson",
  about: "NFL starting QB for the Seattle Seahawks. 2013 Superbowl Champion.",
  follower_count: 1300000,
};

export default function InfluencerList() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading>Influencers</Heading>
      <CardList
        card={ProfileCard}
        data={[...new Array(23)].map((i) => DUMMY_CARD_DATA)}
      />
    </div>
  );
}
