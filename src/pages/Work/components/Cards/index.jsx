import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Card } from "..";
import { cardsData } from "./cardsData";

function Cards() {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" justify="center">
        {cardsData.map((data, index) => {
          return (
            <Card
              key={index}
              github={data.github}
              title={data.name}
              homepage={data.homepage}
              language={data.stack}
              description={data.description}
              image={data.image}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default Cards;
