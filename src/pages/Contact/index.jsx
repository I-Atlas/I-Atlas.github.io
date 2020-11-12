import React from "react";
import { Menu, Footer } from "../../components";
import { Grid } from "@material-ui/core";
import { Form } from "./components";

function Contact() {
  return (
    <React.Fragment>
      <Menu items={["home", "work", "about"]} />
      <Grid container direction="column" alignItems="center" justify="center">
        <Form />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
