import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Heading from "./Heading";
import CardList from "./CardList";
import DropCard from "./DropCard";
import { DROPS, getMockDrops } from "../mocks";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
  },
}));

const getLink = (o) => {
  return `/drops/1`;
};

export default function LiveDrops() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading live action={{ href: "/drops", label: "View all drops" }}>
        Live drops
      </Heading>
      <CardList card={DropCard} data={getMockDrops()} getLink={getLink} />
    </div>
  );
}
