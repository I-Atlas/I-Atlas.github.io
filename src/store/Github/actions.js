import { Github } from "../../api";

import {
  GET_GITHUB_REPOS,
  GET_GITHUB_REPOS_ERROR,
  GET_GITHUB_REPOS_SUCCESS,
} from "./actionsNames";

export const actionGetGithubRepos = (params) => {
  return (dispatch) => {
    dispatch(getGithubRepos());
    Github.getRepos(params)
      .then((data) => {
        console.log(data);
        dispatch(getGithubSuccess(data));
      })
      .catch((error) => {
        dispatch(getGithubError(error.message));
      });
  };
};

const getGithubRepos = () => ({
  type: GET_GITHUB_REPOS,
});

const getGithubError = (message) => ({
  type: GET_GITHUB_REPOS_ERROR,
  payload: {
    message,
  },
});

const getGithubSuccess = (repos) => ({
  type: GET_GITHUB_REPOS_SUCCESS,
  payload: {
    ...repos,
  },
});
