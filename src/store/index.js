import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRerucer from "./rootReducer";

export default createStore(
  rootRerucer,
  composeWithDevTools(applyMiddleware(thunk))
);
