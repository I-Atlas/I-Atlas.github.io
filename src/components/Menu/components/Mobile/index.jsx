import React, { useState } from "react";
import { animated, useSpring, useTrail } from "react-spring";
import { Link } from "react-router-dom";
import styles from "./mobile.module.css";
import { Button } from "..";

function Mobile(props) {
  const [open, setOpen] = useState(false);

  const springs = useSpring({
    transform: open ? `translateY(0)` : `translateY(-100%)`,
    opacity: open ? 1 : 0,
  });

  const trails = useTrail(props.items.length, {
    opacity: 1,
    x: 0,
    height: 100,
    from: { opacity: 0, x: 50, height: 0 },
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Button handleOpen={handleOpen} />
      <animated.div className={styles.mobile_menu} style={{ ...springs }}>
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
                to={`/${
                  props.items[index] === "home" ? "" : props.items[index]
                }`}
              >
                {props.items[index]}
              </Link>
            </animated.div>
          </animated.div>
        ))}
      </animated.div>
    </React.Fragment>
  );
}

export default Mobile;
