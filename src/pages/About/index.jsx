import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Menu, Footer, iliya } from "../../components";
import { Info } from "./components";
import styles from "./about.module.css";

function About() {
  return (
    <React.Fragment>
      <Menu items={["home", "work", "contact"]} />
      <Container maxWidth="lg">
        <Grid
          className={styles.about}
          container
          alignItems="center"
          justify="space-between"
        >
          <Info image={iliya} />
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default About;
