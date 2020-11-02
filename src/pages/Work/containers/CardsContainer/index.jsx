import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Cards, Card } from "../../components";
import { arkanoid, covid, sol, mars } from "../../../../components";
import { actionGetGithubRepos } from "../../../../store/Github/actions";

function CardsContainer() {
  const [data, setData] = useState({});

  useEffect(() => {
    const receivedData = () => {
      setData(actionGetGithubRepos(["arkanoid"]));
    };
    receivedData();
  }, []);
  console.log(data);

  return (
    <Cards
      cards={
        <React.Fragment>
          <Card
            github="https://github.com/I-Atlas/arkanoid"
            title="Arkanoid"
            homepage="blalba"
            language="JavaScript"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={arkanoid}
          />
          <Card
            github="https://github.com/I-Atlas/arkanoid"
            title="Covid-19 Tracker"
            homepage=""
            language="JavaScript"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={covid}
          />
          <Card
            github="https://github.com/I-Atlas/arkanoid"
            title="Sol"
            homepage=""
            language="Python"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={sol}
          />
          <Card
            github="https://github.com/I-Atlas/arkanoid"
            title="Mars Weather"
            homepage=""
            language="Python"
            description="Pure JS Arkanoid game inspired by Breakout (1976) and Super Breakout (1978) created by Atari."
            image={mars}
          />
        </React.Fragment>
      }
    />
  );
}

const mapDispatchToProps = {
  actionGetGithubRepos,
};

export default connect(null, mapDispatchToProps)(CardsContainer);
