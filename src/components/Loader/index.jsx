import React from "react";
import { animated, useTransition } from "@react-spring/web";
import { useProgress } from "drei";
import "./index.css";

function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <animated.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <animated.div
              className="loading-bar"
              style={{ width: progress }}
            ></animated.div>
          </div>
        </animated.div>
      )
  );
}

export default Loader;
