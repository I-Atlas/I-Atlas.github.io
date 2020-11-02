import axios from "axios";
class Github {
  constructor() {
    this.reposArray = [];
    this.url = "https://api.github.com/repos/I-Atlas/";
  }

  getRepos = async (repos) => {
    try {
      await Promise.all(
        repos.map(async (repoName) => {
          const {
            data: { name, url, homepage },
          } = await axios.get(`${this.url}${repoName}`);
          this.reposArray.push({ name, url, homepage });
        })
      );
      console.log(this.reposArray[0]);
      return this.reposArray;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new Github();
