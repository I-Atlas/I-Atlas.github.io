import React from "react";
import { Card } from "./components";
import { Container, Grid } from "@material-ui/core";
import { Menu, Footer } from "../../components";
import { cardsData } from "../../utils";

function Work() {
  return (
    <React.Fragment>
      <Menu items={["home", "contact", "about"]} />
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
      <Footer />
    </React.Fragment>
  );
}

export default Work;
