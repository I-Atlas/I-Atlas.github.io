import React from "react";
import { Menu, Footer } from "../../components";
import { Grid, Container } from "@material-ui/core";
import { Form } from "./components";

function Contact() {
  return (
    <React.Fragment>
      <Menu items={["home", "work", "about"]} />
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" justify="center">
          <Form />
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
