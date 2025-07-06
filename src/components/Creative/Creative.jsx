import React from "react";

import styles from "./C.module.css";

import projects from "../../data/creative.json";
import { ProjectCard } from "./CCard";

export const Creative = () => {
  return (
    <section className={styles.container} id="creative">
      <h2 className={styles.title}>✍️ Personal Writing </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
