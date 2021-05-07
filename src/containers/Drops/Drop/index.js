import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DropSection from "../../../components/DropSection";

const useStyles = makeStyles((theme) => ({}));

export default function Drop() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DropSection />
    </React.Fragment>
  );
}
