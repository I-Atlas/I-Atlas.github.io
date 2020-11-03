import React from "react";
import { Loader, Routes, Toast } from "./components";

function App() {
  return (
    <React.Fragment>
      <Loader />
      <Routes />
      <Toast />
    </React.Fragment>
  );
}

export default App;
