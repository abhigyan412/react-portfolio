import React from "react";

import styles from "./C.module.css";

import projects from "../../data/creative.json";
import { ProjectCard } from "./CCard";

export const Creative = () => {
  return (
    <section className={styles.container} id="creative" data-reveal>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Beyond code</span>
        <h2 className={styles.title}>Personal Writing</h2>
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
