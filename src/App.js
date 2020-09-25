import React from "react";
import { Main } from "./pages";
import { Loader } from "./components";

function App() {
  return (
    <React.Fragment>
      <Loader />
      <Main />
    </React.Fragment>
  );
}

export default App;
