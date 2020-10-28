import React from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "@material-ui/core";
import "./styles.css";

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
          className="card"
          style={{ transform: springProps.xy.interpolate(trans1) }}
        >
          <div className="sneaker">
            <div className="circle"></div>
            <animated.img
              src={props.image}
              alt="adidas"
              style={{ transform: springProps.xy.interpolate(trans4) }}
            />
          </div>
          <animated.div
            className="info"
            style={{ transform: springProps.xy.interpolate(trans1) }}
          >
            <h1 className="title">{capitalizeFirstLetter(props.title)}</h1>
            <h3 role="img" aria-label="info">
              {props.description}
            </h3>
            <animated.div
              className="language"
              style={{ transform: springProps.xy.interpolate(trans2) }}
            >
              <h2>{props.language}</h2>
            </animated.div>
            <div className="purchase">
              <a href="https://github.com/I-Atlas/arkanoid">
                <Button className="github">Github</Button>
              </a>
              {/* {props.homepage.length > 0 ? (
                <a href={props.homepage}>
                  <Button className="homepage">Homepage</Button>
                </a>
              ) : (
                <></>
              )} */}
            </div>
          </animated.div>
        </animated.div>
      </div>
    </React.Fragment>
  );
}

export default Card;
