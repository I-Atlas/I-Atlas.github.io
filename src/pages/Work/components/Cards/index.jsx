import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { Card } from "..";
import { Github } from "../../../../api"
import { arkanoid, covid, sol, mars } from "../../../../components";
import Grid from "@material-ui/core/Grid";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const receivedData = async () => {
      setData(await Github.getRepos(["to-do"]));
    };
    receivedData();
  }, []);

  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" justify="center">
        <Card
          github="https://github.com/I-Atlas/arkanoid"
          title="Arkanoid"
          homepage="blalba"
          language="JavaScript"
          description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
          image={arkanoid}
        />
        <Card
          github="https://github.com/I-Atlas/arkanoid"
          title="Covid-19 Tracker"
          homepage=""
          language="JavaScript"
          description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
          image={covid}
        />
        <Card
          github="https://github.com/I-Atlas/arkanoid"
          title="Sol"
          homepage=""
          language="Python"
          description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
          image={sol}
        />
        <Card
          github="https://github.com/I-Atlas/arkanoid"
          title="Mars Weather"
          homepage=""
          language="Python"
          description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
          image={mars}
        />
      </Grid>
    </Container>
  );
}

export default Cards;
