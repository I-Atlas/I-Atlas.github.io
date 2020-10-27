import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Grid container spacing={3}></Grid>
      </Container>
    </React.Fragment>
  );
}
