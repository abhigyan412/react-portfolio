import React from "react";

import styles from "./About.module.css";

const highlights = [
  {
    title: "⚙️ Backend & Distributed Systems",
    text: "Architected distributed backend systems for high-concurrency workloads — caching, rate limiting, event-driven workflows, and fault-tolerant service design — using FastAPI, Django, PostgreSQL, and Redis.",
  },
  {
    title: "🤖 AI Platforms & LLM Orchestration",
    text: "Built a distributed AI inference platform integrating OpenAI, Anthropic, and frontier models, with latency-aware routing, streaming, provider failover, and RAG pipelines on AWS Bedrock.",
  },
  {
    title: "💳 Payments Infrastructure",
    text: "Worked deep in the core payment execution path — orchestration across global PSPs, digital wallets, card networks, and bank acquirers, with idempotent flows and reconciliation across US, EU, and LATAM markets.",
  },
  {
    title: "🔧 DevOps & Cloud",
    text: "Hands-on experience with Docker, Kubernetes, AWS, and CI/CD pipelines, ensuring smooth deployments and high availability in production.",
  },
  {
    title: "📖 Creative Works",
    text: "In 2025, I also self-published “What Love?” — a quiet reflection on human emotion and connection. Also “What God?” — a philosophical exploration of faith and belief.",
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about" data-reveal>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Get to know me</span>
        <h2 className={styles.title}>About</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutMonogram}>AT</div>
          <p className={styles.aboutName}>Abhigyan Tripathi</p>
          <p className={styles.aboutRole}>Backend &amp; Systems Engineer</p>
          <div className={styles.aboutDivider} />
          <ul className={styles.aboutFocus}>
            <li>Payments Infrastructure</li>
            <li>AI / LLM Platforms</li>
            <li>Distributed Systems</li>
          </ul>
        </div>

        <ul className={styles.aboutItems}>
          {highlights.map((item) => (
            <li key={item.title} className={styles.aboutItem}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
