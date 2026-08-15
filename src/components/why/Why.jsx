import React from "react";

import styles from "./Why.module.css";

export const Why = () => {
  return (
    <section className={styles.container} data-reveal>
      <div className={styles.card}>
        <span className={styles.eyebrow}>Why work with me</span>
        <h3 className={styles.headline}>
          Backend &amp; founding engineer building distributed systems, AI
          infrastructure, and payment platforms — and founder of two
          companies of my own.
        </h3>
        <p className={styles.body}>
          I specialize in designing and operating production-grade backend
          systems where correctness, scalability, latency, reliability, and
          fault tolerance directly impact customers and business outcomes.
          As a founding engineer, I&apos;ve owned backend architecture
          end-to-end — multi-provider LLM orchestration, streaming
          inference, authentication, billing, observability, and developer
          platforms — partnering directly with founders to turn product
          ideas into scalable production systems. Previously, I worked on
          global payment infrastructure, building payment orchestration
          systems integrating PayPal, Apple Pay, Google Pay, Visa,
          Mastercard, Stripe, Adyen, and Worldpay across the US, Europe, and
          LATAM — focused on routing, retries, idempotency, reconciliation,
          and resilient money movement under real-world constraints. Beyond
          employee roles, I&apos;ve founded two companies of my own — A-Y
          Labs, a fractional CTO studio shipping production software for
          startups, and Jyotish Darshan, an AI-powered Vedic astrology
          platform — because I&apos;d rather own outcomes than just
          implement features. Beyond fintech and founding, I&apos;ve
          engineered AI inference platforms, low-latency trading systems,
          event-driven architectures, high-throughput APIs, and search
          infrastructure with OpenSearch. If the mission matters and
          pressure is high, I perform — relentlessly.
        </p>
      </div>
    </section>
  );
};
