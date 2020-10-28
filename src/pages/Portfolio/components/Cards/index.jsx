import React from "react";
import Container from "@material-ui/core/Container";
import { Card } from "..";
import Grid from "@material-ui/core/Grid";
import { github, Menu } from "../../../../components";

function Cards() {
  return (
    <React.Fragment>
      <Menu items={["contact", "cv"]} />
      <Container maxWidth="sm" className="cards">
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={3}
        >
          <Card
            title="Arkanoid"
            homepage=""
            language="JavaScript"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={github}
          />
          <Card
            title="Arkanoid"
            homepage=""
            language="JavaScript"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={github}
          />
          <Card
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
