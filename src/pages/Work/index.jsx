import React from "react";
import { Card } from "./components";
import { Container, Grid } from "@material-ui/core";
import { Menu, Footer } from "../../components";
import { personalProjects, commercialProjects } from "../../utils";
import styles from "./work.module.css";

function Work() {
  return (
    <React.Fragment>
      <Menu items={["home", "contact", "about"]} />
      <Container maxWidth="lg">
        <h1 className={styles.type}>Commercial projects</h1>
        <Grid container alignItems="center" justify="center">
          {commercialProjects.map((data, index) => {
            return (
              <Card
                key={index}
                github={data.github}
                title={data.name}
                homepage={data.homepage}
                language={data.stack}
                description={data.description}
                emoji={data.emoji}
              />
            );
          })}
        </Grid>
        <h1 className={styles.type}>My projects</h1>
        <Grid container alignItems="center" justify="center">
          {personalProjects.map((data, index) => {
            return (
              <Card
                key={index}
                github={data.github}
                title={data.name}
                homepage={data.homepage}
                language={data.stack}
                description={data.description}
                emoji={data.emoji}
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
