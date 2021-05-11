import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DropCard from "../../../components/DropCard";
import Heading from "../../../components/Heading";
import CardList from "../../../components/CardList";
import { getMockDrops } from "../../../mocks";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
  },
}));

export default function NFTList() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading live action={{ href: "/drops", label: "View all NFTs" }}>
        NFTs for Sale
      </Heading>
      <CardList card={DropCard} data={getMockDrops()} />
    </div>
  );
}
