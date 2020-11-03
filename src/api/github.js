import axios from "axios";
class Github {
  constructor() {
    this.url = "https://api.github.com/repos/I-Atlas/";
  }

  getRepos = async (repos) => {
    try {
      const reposArray = []
      await Promise.all(
        repos.map(async (repoName) => {
          const {
            data: { name, url, homepage },
          } = await axios.get(`${this.url}${repoName}`);
          reposArray.push({ name, url, homepage });
        })
      );
      return reposArray;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new Github();
