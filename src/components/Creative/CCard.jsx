import React from "react";

import styles from "./CCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrap}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {skills.length > 0 && (
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
        )}
        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Demo
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className={styles.linkGhost}
            >
              Read on Amazon ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
