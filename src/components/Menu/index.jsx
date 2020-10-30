import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useTrail, animated } from "react-spring";
import styles from "./menu.module.css";

function Menu(props) {
  const trails = useTrail(props.items.length, {
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
      <Grid
        container
        justify="center"
        spacing={3}
        className={styles.menu}
      >
        {trails.map(({ x, height, opacity }, index) => (
          <animated.div
            key={index}
            style={{
              opacity,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>
              <NavLink className={styles.text} to={`/${props.items[index] === "home" ? "" : props.items[index]}`}>
                {props.items[index]}
              </NavLink>
            </animated.div>
          </animated.div>
        ))}
      </Grid>
  );
}

export default Menu;
