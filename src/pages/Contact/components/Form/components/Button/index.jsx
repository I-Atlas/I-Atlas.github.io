import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./button.module.css";

function Button() {
  return (
    <Grid container alignItems="center" justify="center">
      <button className={styles.form_button} type="submit">
        Send
        <span className={styles.button_background}></span>
      </button>
    </Grid>
  );
}

export default Button;
