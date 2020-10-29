import axios from "axios";
export default class Github {
  constructor() {
    this.url = "https://api.github.com/repos/I-Atlas/";
  }

  getRepos = async (repo) => {
    const response = await axios.get(this.url + `${repo}`, {});

    if (response.data) {
      return response.data;
    }

    if (response.data.message) {
      console.log(response.data.message);
    }
  };
}
