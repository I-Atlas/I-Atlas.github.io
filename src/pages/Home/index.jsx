import React from "react";
import { Scene } from "./components";
import { Link } from "react-router-dom";
import { github, linkedin, gmail, telegram } from "../../components";
import "./styles.css";

function Home() {
  return (
    <React.Fragment>
      <Scene />
      <Link to="/portfolio" className="header">
        Iliya Bolotov
      </Link>
      <a href="https://github.com/I-Atlas" className="top-left">
        <img className="image" src={github} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/bolotov-iliya" className="top-right">
        <img className="image" src={linkedin} alt="LinkedIn" />
      </a>
      <a href="mailto:bolotov.iliya.w@gmail.com" className="bottom-right">
        <img className="image" src={gmail} alt="Gmail" />
      </a>
      <a href="https://t.me/I_Atlas" className="bottom-left">
        <img className="image" src={telegram} alt="Telegram" />
      </a>
    </React.Fragment>
  );
}

export default Home;
