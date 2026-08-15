import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      <div className={styles.content} data-reveal>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Backend &amp; Systems Engineer
        </span>

        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.highlight}>Abhigyan</span>
        </h1>

        <p className={styles.description}>
          Builder at heart and a coder by craft — I build production AI
          platforms, payment infrastructure, and distributed backend
          systems for US startups.
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:Tripathiabhigyan412@gmail.com"
            className={styles.primaryBtn}
          >
            Get in touch
          </a>
          <a
            href="https://github.com/abhigyan412"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abhigyan-tripathi-1784481bb/"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.imageWrap} data-reveal>
        <div className={styles.imageGlow} />
        <svg
          className={styles.networkSvg}
          viewBox="0 0 400 400"
          role="img"
          aria-label="Abstract network of connected nodes, representing distributed AI/LLM systems"
        >
          <defs>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <radialGradient id="coreGrad" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#a78bff" />
              <stop offset="55%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </radialGradient>
          </defs>

          <g className={styles.constellation}>
            {/* outer ring connections */}
            <polygon
              className={styles.edge}
              points="200,66 322,118 352,232 288,342 148,352 58,258 68,128 132,58"
            />
            {/* spokes back to the core */}
            <line className={styles.edge} x1="200" y1="200" x2="200" y2="66" />
            <line className={styles.edge} x1="200" y1="200" x2="352" y2="232" />
            <line className={styles.edge} x1="200" y1="200" x2="148" y2="352" />
            <line className={styles.edge} x1="200" y1="200" x2="68" y2="128" />

            <circle className={`${styles.node} ${styles.nodeLg}`} cx="200" cy="66" r="9" style={{ animationDelay: "0s" }} />
            <circle className={styles.node} cx="322" cy="118" r="6.5" style={{ animationDelay: "0.6s" }} />
            <circle className={`${styles.node} ${styles.nodeLg}`} cx="352" cy="232" r="8" style={{ animationDelay: "1.2s" }} />
            <circle className={styles.node} cx="288" cy="342" r="5.5" style={{ animationDelay: "1.8s" }} />
            <circle className={`${styles.node} ${styles.nodeLg}`} cx="148" cy="352" r="7" style={{ animationDelay: "2.4s" }} />
            <circle className={styles.node} cx="58" cy="258" r="6" style={{ animationDelay: "3s" }} />
            <circle className={`${styles.node} ${styles.nodeLg}`} cx="68" cy="128" r="8" style={{ animationDelay: "0.9s" }} />
            <circle className={styles.node} cx="132" cy="58" r="5.5" style={{ animationDelay: "1.5s" }} />
          </g>

          <circle className={styles.core} cx="200" cy="200" r="30" fill="url(#coreGrad)" />
        </svg>
      </div>
    </section>
  );
};
