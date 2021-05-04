import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LiveDrops from "../../components/LiveDrops";

const useStyles = makeStyles((theme) => ({}));

export default function Drops() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <LiveDrops />
    </React.Fragment>
  );
}
