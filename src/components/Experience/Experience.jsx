import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const iconSkills = skills.filter((skill) => skill.imageSrc);
  const tagSkills = skills.filter((skill) => !skill.imageSrc);

  return (
    <section className={styles.container} id="experience" data-reveal>
      <div className={styles.header}>
        <span className={styles.eyebrow}>What I bring</span>
        <h2 className={styles.title}>Experience</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.skillsCol}>
          <h3 className={styles.colTitle}>Skills &amp; tools</h3>
          <div className={styles.skills}>
            {iconSkills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>

          <h3 className={`${styles.colTitle} ${styles.colTitleSpaced}`}>
            Also working with
          </h3>
          <div className={styles.skillTags}>
            {tagSkills.map((skill, id) => (
              <span key={id} className={styles.skillPill}>
                {skill.title}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.historyCol}>
          <h3 className={styles.colTitle}>Work history</h3>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyBadge} aria-hidden="true">
                    {historyItem.organisation.charAt(0)}
                  </div>
                  <div className={styles.historyItemDetails}>
                    <h4>
                      {historyItem.role}
                      <span className={styles.historyOrg}>
                        {" "}
                        — {historyItem.organisation}
                        {historyItem.location ? ` (${historyItem.location})` : ""}
                      </span>
                    </h4>
                    <p className={styles.dateRange}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
