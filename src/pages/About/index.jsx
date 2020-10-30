import React from "react";
import { Menu } from "../../components";

function About() {
  return (
    <React.Fragment>
      <Menu items={["home", "work", "contact"]} />
      <h1>Resume</h1>
    </React.Fragment>
  );
}

export default About;
