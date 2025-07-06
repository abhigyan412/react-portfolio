import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>📌 About</h2>
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
              <h3>⚙️ Backend & System Architecture</h3>
              <p>
              
              Designed and deployed real-time, production-grade backends using FastAPI, Django, and PostgreSQL.Built scalable microservices, async data pipelines, and rule engines with Redis, Celery, and AST compilers.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>🤖 LLM Integration & AI Workflows</h3>
              <p>
              Implemented end-to-end LLM pipelines using LangChain, Pinecone, and AWS Bedrock.
Delivered intelligent document classification, vector search, and prompt-engineered APIs for real clients.
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

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>📖 Creative Works
              </h3>
              <p>
              In 2025, I also self-published “What Love ?” — a quiet reflection on human emotion and connection.
              </p>
            </div>

            
          </li>
          
          
          
          
        </ul>
      </div>
    </section>
  );
};
