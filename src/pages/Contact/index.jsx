import React from "react";
import { Menu } from "../../components";

function Contact() {
  return (
    <React.Fragment>
      <Menu items={["home", "work", "about"]} />
      <h1>Contact</h1>
    </React.Fragment>
  );
}

export default Contact;