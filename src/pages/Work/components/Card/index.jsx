import React from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "@material-ui/core";
import styles from "./card.module.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Card(props) {
  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <React.Fragment>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className={styles.card}
          style={{ transform: springProps.xy.interpolate(trans1) }}
        >
          <div className={styles.sneaker}>
            <div className={styles.circle}></div>
            <animated.img
              src={props.image}
              alt="adidas"
              style={{ transform: springProps.xy.interpolate(trans4) }}
            />
          </div>
          <animated.div
            className={styles.info}
            style={{ transform: springProps.xy.interpolate(trans1) }}
          >
            <h1 className={styles.title}>
              {capitalizeFirstLetter(props.title)}
            </h1>
            <h3 role="img" aria-label="info">
              {props.description}
            </h3>
            <animated.div
              className={styles.language}
              style={{ transform: springProps.xy.interpolate(trans2) }}
            >
              <h2>{props.language}</h2>
            </animated.div>
            <div className={styles.purchase}>
              <Button
                href={props.github}
                className={styles.github}
                style={{ borderRadius: 20, margin: 10 }}
              >
                Github
              </Button>
              {props.homepage.length > 0 ? (
                <Button
                  href={props.homepage}
                  className={styles.homepage}
                  style={{ borderRadius: 20, margin: 10 }}
                >
                  View
                </Button>
              ) : (
                <></>
              )}
            </div>
          </animated.div>
        </animated.div>
      </div>
    </React.Fragment>
  );
}

export default Card;
