import React from "react";
import {
  Menu,
  Footer,
  github,
  linkedin,
  telegram,
  gmail,
} from "../../components";
import { Grid } from "@material-ui/core";
import styles from "./contact.module.css";

function Contact() {
  return (
    <React.Fragment>
      <Menu items={["home", "work", "about"]} />
      <Grid container alignItems="center" justify="center" className={styles.contact}>
        <a href="https://github.com/I-Atlas">
          <img className={styles.image} src={github} alt="GitHub" />
        </a>
        <a href="https://github.com/I-Atlas">
          <img className={styles.image} src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/I-Atlas">
          <img className={styles.image} src={telegram} alt="Telegram" />
        </a>
        <a href="https://github.com/I-Atlas">
          <img className={styles.image} src={gmail} alt="Gmail" />
        </a>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
