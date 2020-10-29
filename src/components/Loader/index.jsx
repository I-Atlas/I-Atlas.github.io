import React from "react";
import { animated, useTransition } from "@react-spring/web";
import { useProgress } from "drei";
import styles from "./loader.module.css";

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
        <animated.div className={styles.loading} style={{ opacity }}>
          <div className={styles.container}>
            <animated.div
              className={styles.bar}
              style={{ width: progress }}
            ></animated.div>
          </div>
        </animated.div>
      )
  );
}

export default Loader;
