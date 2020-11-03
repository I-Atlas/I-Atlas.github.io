import React from "react";
import { Link } from "react-router-dom";
import { useTrail, animated } from "react-spring";
import styles from "./desktop.module.css";

function Desktop(props) {
  const trails = useTrail(props.items.length, {
    opacity: 1,
    x: 0,
    height: 100,
    from: { opacity: 0, x: 50, height: 0 },
  });

  return (
    <React.Fragment>
      {trails.map(({ x, height, opacity }, index) => (
        <animated.div
          key={index}
          style={{
            opacity,
            transform: x.interpolate((x) => `translate(0,${x}px)`),
          }}
        >
          <animated.div style={{ height }}>
            <Link
              className={styles.menu_text}
              to={`/${props.items[index] === "home" ? "" : props.items[index]}`}
            >
              {props.items[index]}
            </Link>
          </animated.div>
        </animated.div>
      ))}
    </React.Fragment>
  );
}

export default Desktop;
