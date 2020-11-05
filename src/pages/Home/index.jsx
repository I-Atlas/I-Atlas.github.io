import React from "react";
import { Scene } from "./components";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <React.Fragment>
      <div className={styles.home}>
        <div className={styles.top}>Software & Web Developer</div>
        <div className={styles.center}>Iliya Bolotov</div>
        <div className={styles.bottom}>
          <Link className={styles.link} to="/about">
            About
          </Link>
          |
          <Link className={styles.link} to="/work">
            Work
          </Link>
          |
          <Link className={styles.link} to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <Scene />
    </React.Fragment>
  );
}

export default Home;
