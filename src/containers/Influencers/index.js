import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfluencerList from "./components/InfluencerList";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({}));

export default function Influencers() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <InfluencerList />
      </Container>
    </React.Fragment>
  );
}
