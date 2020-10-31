import React from "react";
import { Cards } from "./components";
import { Menu, Footer } from "../../components";

function Work() {
  return (
    <React.Fragment>
      <Menu items={["home", "contact", "about"]} />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Work;
