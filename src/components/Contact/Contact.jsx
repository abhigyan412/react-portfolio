import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/contact.gif")} alt="Email icon" />
          
        </li>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:Tripathiabhigyan412@gmail.com">Tripathiabhigyan412@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abhigyan-tripathi-1784481bb/">https://www.linkedin.com/in/abhigyan-tripathi-1784481bb/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/abhigyan412">https://github.com/abhigyan412</a>
        </li>
      </ul>
    </footer>
  );
};
