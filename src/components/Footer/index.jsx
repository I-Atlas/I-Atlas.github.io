import React from "react";
import styles from "./footer.module.css";
import {
  github_white,
  instagram_white,
  linkedin_white,
  telegram_white,
} from "../";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <p>refresh your brand identity with me.</p>
        <a
          className={styles.hire_button}
          href="mailto:bolotov.iliya.w@gmail.com"
        >
          hire me
        </a>
        <div className={styles.footer_icons}>
          <a href="https://github.com/I-Atlas">
            <img className={styles.icon_link} src={github_white} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/bolotov-iliya">
            <img className={styles.icon_link} src={linkedin_white} alt="" />
          </a>
          <a href="https://t.me/I_Atlas">
            <img className={styles.icon_link} src={telegram_white} alt="" />
          </a>
          <a href="https://www.instagram.com/iatlas1/">
            <img className={styles.icon_link} src={instagram_white} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
