import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/o.gif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>⚡ Full-Stack Developer</h3>
              <p>
              Skilled in Django, Flask, FastAPI, and modern frontend frameworks like React.js & Vue.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>⚡ Backend & API Development</h3>
              <p>
              Expert in designing RESTful APIs, microservices, and optimizing PostgreSQL, MySQL, and Firestore for high-performance applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>🤖 Automation & Web Scraping</h3>
              <p>
              Built custom Python scripts for data extraction, automation, and real-time data processing using Selenium & BeautifulSoup.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>🔧 DevOps & Cloud</h3>
              <p>
              Hands-on experience with Docker, Kubernetes, AWS, and CI/CD pipelines, ensuring smooth deployments and high availability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>📊 Machine Learning & System Design
              </h3>
              <p>
              Implemented ML algorithms for predictive analytics, ranking systems, and intelligent search mechanisms. Enthusiastic about scalable architectures & performance optimization.
              </p>
            </div>
          </li>
          
          
          
        </ul>
      </div>
    </section>
  );
};
