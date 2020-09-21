import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Scene, Renders } from "./components";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import gmail from "../../assets/gmail.svg";
import telegram from "../../assets/telegram.svg";
import "./index.css";

function Main() {
  return (
    <div className="main">
      <Canvas
        style={{ background: "#FF4500" }}
        camera={{ position: [0, 0, 10], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 60, -100]} intensity={20} />
        <pointLight position={[-50, 0, -50]} intensity={2} />
        <spotLight
          castShadow
          intensity={8}
          angle={Math.PI / 10}
          position={[10, 10, 10]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Suspense fallback={null}>
          <Renders />
        </Suspense>
        <Scene />
      </Canvas>
      <a
        href="https://github.com/I-Atlas"
        className="top-left"
        children="GitHub"
      >
        <img src={github} alt="GitHub" width="50" heigh="50" />
      </a>
      <a
        href="https://www.linkedin.com/in/bolotov-iliya"
        className="top-right"
        children="LinkedIn"
      >
        <img src={linkedin} alt="LinkedIn" width="50" heigh="50" />
      </a>
      <a
        href="mailto:bolotov.iliya.w@gmail.com"
        className="bottom-right"
        children="Gmail"
      >
        <img src={gmail} alt="Gmail" width="50" heigh="50" />
      </a>
      <a
        href="https://t.me/I_Atlas"
        className="bottom-left"
        children="Telegram"
      >
        <img src={telegram} alt="Telegram" width="50" heigh="50" />
      </a>
      <span className="header">Bolotov Iliya</span>
    </div>
  );
}

export default Main;