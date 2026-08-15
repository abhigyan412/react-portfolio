import React from "react";

import styles from "./Contact.module.css";

const contacts = [
  {
    label: "Email",
    value: "Tripathiabhigyan412@gmail.com",
    href: "mailto:Tripathiabhigyan412@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="m3 6 9 7 9-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 85438 74054",
    href: "tel:+918543874054",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4.5c0-.55.45-1 1-1h3.1c.5 0 .92.36.99.85l.6 4.1a1 1 0 0 1-.28.87l-1.8 1.8a15.5 15.5 0 0 0 6.27 6.27l1.8-1.8a1 1 0 0 1 .87-.28l4.1.6c.49.07.85.49.85.99V20c0 .55-.45 1-1 1h-1.5C10.7 21 3 13.3 3 4.5V4.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "abhigyan-tripathi",
    href: "https://www.linkedin.com/in/abhigyan-tripathi-1784481bb/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "abhigyan412",
    href: "https://github.com/abhigyan412",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
];

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container} data-reveal>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Let&apos;s build something</span>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.sub}>
            Have a system to build, a bug to hunt, or an idea worth
            shipping? My inbox is open.
          </p>
        </div>

        <ul className={styles.links}>
          {contacts.map((contact) => (
            <li key={contact.label} className={styles.link}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className={styles.linkIcon}>{contact.icon}</span>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{contact.label}</span>
                  <span className={styles.linkValue}>{contact.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.footNote}>
        © {new Date().getFullYear()} Abhigyan Tripathi. Built with React.
      </p>
    </footer>
  );
};
