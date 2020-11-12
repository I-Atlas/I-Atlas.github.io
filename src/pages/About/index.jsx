import React from "react";
import { Grid } from "@material-ui/core";
import { Menu, Footer, iliya } from "../../components";
import { Info } from "./components";
import styles from "./about.module.css";

function About() {
  return (
    <React.Fragment>
      <Menu items={["home", "work", "contact"]} />
      <Grid
        className={styles.about}
        container
        alignItems="center"
        justify="space-between"
      >
        <Info image={iliya} />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default About;
