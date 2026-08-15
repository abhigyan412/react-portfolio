import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, tag, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrap}>
        {imageSrc ? (
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        ) : (
          <div className={styles.imageFallback} aria-hidden="true">
            <span className={styles.imageFallbackMark}>
              {(tag || title).slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
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
              Source ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
