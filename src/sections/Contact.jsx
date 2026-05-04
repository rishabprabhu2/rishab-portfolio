import React from "react";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Let’s connect!</h2>

      <p style={styles.text}>
        Feel free to reach out or explore my socials!
      </p>

      <div style={styles.links}>
        <a href="mailto:rishabprabhu2@gmail.com" style={styles.link}>
          Email
        </a>

        <a
          href="https://linkedin.com/in/rishab-prabhu/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 8%",
    textAlign: "center",
    backgroundColor: "#0f172a",
    color: "white",
  },
  title: {
    fontSize: "42px",
    margin: 0,
  },
  text: {
    color: "#cbd5e1",
    fontSize: "18px",
    marginTop: "14px",
  },
  links: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  link: {
    padding: "13px 18px",
    border: "1px solid #334155",
    borderRadius: "12px",
    color: "#e2e8f0",
    textDecoration: "none",
    backgroundColor: "#020617",
  },
};