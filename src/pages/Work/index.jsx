import React from "react";
import { Cards } from "./components";
import { Menu } from "../../components";

function Work() {
  return (
    <React.Fragment>
      <Menu items={["home", "contact", "about"]} />
      <Cards />
    </React.Fragment>
  );
}

export default Work;
