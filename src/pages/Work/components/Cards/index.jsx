import React from "react";
import Container from "@material-ui/core/Container";
import { Card } from "..";
import Grid from "@material-ui/core/Grid";
import { github } from "../../../../components";

function Cards() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={3}
        >
          <Card
            github="https://github.com/I-Atlas/arkanoid"
            title="Arkanoid"
            homepage="blalba"
            language="JavaScript"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={github}
          />
          <Card
            github="https://github.com/I-Atlas/arkanoid"
            title="Arkanoid"
            homepage=""
            language="JavaScript"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={github}
          />
          <Card
            github="https://github.com/I-Atlas/arkanoid"
            title="Arkanoid"
            homepage=""
            language="JavaScript"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={github}
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Cards;
