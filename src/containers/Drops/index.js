import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LiveDrops from "../../components/LiveDrops";

const useStyles = makeStyles((theme) => ({}));

export default function Drops() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <LiveDrops />
      </Container>
    </React.Fragment>
  );
}
