import React from "react";

import styles from "./Why.module.css";
import { getImageUrl } from "../../utils";

export const Why = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>📌 WHY ME ?</h2>
      <div className={styles.content}>
        
        
        <ul className={styles.aboutItems}>
          
          
          
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>🔥 I build and ship production systems across stacks — Python, JS, ML, DevOps, LLMs — fast.
              </h3>
              <p>
              I’m not your average developer who waits for tasks and sticks to one stack. I’m a system builder — drop me into a broken codebase, an undefined architecture, or a domain I’ve never touched, and I’ll deliver something real, fast. I don’t need hand-holding. I care about outcomes — about building systems that scale, survive, and make impact. I move across Python, JavaScript, DevOps, ML, and now Spring Boot — not because I’m a generalist, but because I’m obsessed with solving problems, not staying comfortable. Even if the stack isn’t mentioned in my resume, I’m ready to dive in, learn it overnight, and execute under fire. If the mission matters and pressure is high, I perform — relentlessly.
              </p>
            </div>

            
          </li>

          
          
          
          
          
        </ul>
      </div>
    </section>
  );
};
