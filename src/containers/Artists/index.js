import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArtistsList from "./components/ArtistList";

const useStyles = makeStyles((theme) => ({}));

export default function Artists() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <ArtistsList />
      </Container>
    </React.Fragment>
  );
}
