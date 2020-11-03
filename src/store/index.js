import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootRerucer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootRerucer,
  // composeWithDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
);
