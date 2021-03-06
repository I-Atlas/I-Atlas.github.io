import React from "react";
import styles from "./info.module.css";
import { Link } from "react-router-dom";

function Info(props) {
  return (
    <React.Fragment>
      <div className={styles.left}>
        <h1 className={styles.title}>Iliya Bolotov</h1>
        <h2 className={styles.subtitle}>software & web developer</h2>
        <p>
          Hi, I am a software engineer, a 2022 graduate with a Computer Science
          degree.
        </p>
        <p>
          I care about the development & design more than anything. I strive for
          creating human-centered experience in my work.
        </p>
        <p>
          Don't hesitate to{" "}
          <Link className={styles.link} to="/contact">
            contact me
          </Link>{" "}
          if our goal is aligned.
        </p>
        <p>Interested? Want to ask about my experience?</p>
        <a
          className={styles.download_button}
          href="https://career.habr.com/iliya-bolotov"
        >
          Open CV
        </a>
      </div>
      <div className={styles.right}>
        <img className={styles.image} src={props.image} alt="" />
      </div>
    </React.Fragment>
  );
}

export default Info;
