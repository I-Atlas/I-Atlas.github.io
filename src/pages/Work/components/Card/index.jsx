import React from "react";
import { useSpring, animated } from "react-spring";
import { useCapitalizeFirstLetter } from "../../../../utils";
import styles from "./card.module.css";

function Card(props) {
  const [springProps, setSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate(${x / 20}px,${y / 20}px)`;
  const trans2 = (x, y) => `translate(${x / 15}px,${y / 15}px)`;
  const trans4 = (x, y) => `translate(${x / 3.5}px,${y / 3.5}px)`;

  return (
    <div
      onMouseMove={({ clientX: x, clientY: y }) =>
        setSpring({ xy: calc(x, y) })
      }
    >
      <animated.div
        className={styles.card}
        style={{ transform: springProps.xy.interpolate(trans1) }}
      >
        <div className={styles.sneaker}>
          <div className={styles.circle}></div>
          <animated.img
            src={props.image}
            alt="image"
            style={{ transform: springProps.xy.interpolate(trans4) }}
          />
        </div>
        <animated.div
          className={styles.info}
          style={{ transform: springProps.xy.interpolate(trans1) }}
        >
          <h1 className={styles.title}>
            {useCapitalizeFirstLetter(props.title)}
          </h1>
          <h3>{props.description}</h3>
          <animated.div
            className={styles.language}
            style={{ transform: springProps.xy.interpolate(trans2) }}
          >
            <h2>{props.language}</h2>
          </animated.div>
          <div className={styles.purchase}>
            {props.github.length > 0 ? (
              <a className={styles.github_button} href={props.github}>
                github
              </a>
            ) : (
              <></>
            )}
            {props.homepage.length > 0 ? (
              <a className={styles.homepage_button} href={props.homepage}>
                view
              </a>
            ) : (
              <></>
            )}
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
}

export default Card;
