import { GET_GITHUB_REPOS, GET_GITHUB_REPOS_ERROR, GET_GITHUB_REPOS_SUCCESS } from "./actionsNames";

const initialState = {
  repos: [],
  message: "",
  loading: false,
};

export const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB_REPOS:
      return {
        ...state,
        loading: true,
      };
    case GET_GITHUB_REPOS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case GET_GITHUB_REPOS_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
