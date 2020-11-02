import { combineReducers } from "redux";
import { githubReducer } from "./Github/reducer";

export default combineReducers({
  github: githubReducer,
});
