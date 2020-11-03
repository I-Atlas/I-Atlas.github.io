import React from "react";
import Grid from "@material-ui/core/Grid";
import { useDeviceDetect } from "../../utils";
import { Mobile, Desktop } from "./components";

function Menu(props) {
  const { mobile } = useDeviceDetect();

  return (
    <Grid container justify="center">
      {mobile ? <Mobile {...props} /> : <Desktop {...props} />}
    </Grid>
  );
}

export default Menu;
