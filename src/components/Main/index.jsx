import React from "react";
import { useSpring, animated } from "react-spring";
import { Scene, github, linkedin, gmail, telegram } from "./components";
import "./index.css";

function Main() {
  const header = useSpring({ opacity: 0.9, from: { opacity: -1 } });
  return (
    <div className="main">
      <Scene />
      <a href="https://github.com/I-Atlas" className="top-left">
        <img src={github} alt="GitHub" width="50" heigh="50" />
      </a>
      <a href="https://www.linkedin.com/in/bolotov-iliya" className="top-right">
        <img src={linkedin} alt="LinkedIn" width="50" heigh="50" />
      </a>
      <a href="mailto:bolotov.iliya.w@gmail.com" className="bottom-right">
        <img src={gmail} alt="Gmail" width="50" heigh="50" />
      </a>
      <a href="https://t.me/I_Atlas" className="bottom-left">
        <img src={telegram} alt="Telegram" width="50" heigh="50" />
      </a>
      <animated.div className="header" style={header}>
        Iliya Bolotov
      </animated.div>
    </div>
  );
}

export default Main;
