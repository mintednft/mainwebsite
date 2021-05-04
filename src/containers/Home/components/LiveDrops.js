import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Heading from "../../../components/Heading";
import DropList from "../../../components/DropList";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "auto",
  },
}));

export default function LiveDrops() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Heading live action={{ href: "/drops", label: "View all drops" }}>
        Live drops
      </Heading>
      <DropList />
    </div>
  );
}
