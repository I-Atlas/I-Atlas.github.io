import React from "react";
import styles from "./button.module.css"
import { Grid } from "@material-ui/core";

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
