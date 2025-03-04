import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Abhigyan</h1>
        <p className={styles.description}>
         Builder @ ❤️ and a Coder by craft 🛠️
        </p>
        <a href="mailto:Tripathiabhigyan412@gmail.com" className={styles.contactBtn}>
        📧
        </a>
      </div>
      <img
        src={getImageUrl("about/laptop.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
