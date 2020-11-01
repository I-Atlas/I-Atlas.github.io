import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Menu, Footer, iliya } from "../../components";
import { Link } from "react-router-dom"
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
          <div className={styles.left}>
            <h1 className={styles.title}>Iliya Bolotov</h1>
            <h2 className={styles.subtitle}>software & web developer</h2>
            <p>
              Hi, I am a developer, a 2022 graduate with a Computer Science
              degree.
            </p>
            <p>
              I care about the development & design more than anything. I strive
              for creating human-centered experience in my work.
            </p>
            <p>
              I am actively looking for a job, don't hesitate to{" "}
              <Link className={styles.link} to="/contact">
                contact me
              </Link>
               {" "}if
              our goal is aligned.
            </p>
            <p>
              Interested?
            </p>
            <a
              className={styles.download_button}
              href="mailto:bolotov.iliya.w@gmail.com"
            >
              Open CV
            </a>
          </div>
          <div className={styles.right}>
            <img className={styles.image} src={iliya} alt="" />
          </div>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default About;
