import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileSection from "../../../components/ProfileSection";
import Heading from "../../../components/Heading";
import CardList from "../../../components/CardList";
import DropCard from "../../../components/DropCard";

const DUMMY_CARD_DATA = {
  coverImg: process.env.PUBLIC_URL + "/assets/seahawk.png",
  profileImg: process.env.PUBLIC_URL + "/assets/influencer.png",
  name: "Russell Wilson",
  handle: "russellwilson",
  about: "NFL starting QB for the Seattle Seahawks. 2013 Superbowl Champion.",
  follower_count: 1300000,
};

const useStyles = makeStyles((theme) => ({}));

export default function Influencer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ProfileSection {...DUMMY_CARD_DATA}>
        <Heading>Releases</Heading>
        <CardList card={DropCard} />
      </ProfileSection>
    </React.Fragment>
  );
}
