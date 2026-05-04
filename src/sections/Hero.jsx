import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import headshot from "../assets/headshot.jpeg";

const titles = [
  "Software Engineer",
  "Data Analyst",
  "AI Enthusiast",
  "Backend Developer",
  "Cloud Developer",
  "Full-Stack Builder",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const speed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText((prev) =>
          isDeleting
            ? currentTitle.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p style={styles.badge}>Open to SWE Internships</p>

          <h1 style={styles.title}>
            Building scalable software and AI-powered systems that solve real
            problems.
          </h1>

          <p style={styles.description}>
            Hi, I’m Rishab — a Computer Science and Data Science student at
            UW–Madison. I’ve built full-stack applications, AI-driven tools, and
            backend systems used in real-world environments.
          </p>

          <div style={styles.buttons}>
            <a href="#projects" style={styles.primaryButton}>
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryButton}
            >
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          style={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div style={styles.imageCard}>
            <img src={headshot} alt="Rishab" style={styles.image} />
          </div>

          <div style={styles.typingBox}>
            <span style={styles.typingText}>{displayText}</span>
            <span style={styles.cursor}>|</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "92vh",
    padding: "100px 8%",
    display: "flex",
    alignItems: "center",
    background:
      "radial-gradient(circle at 15% 20%, rgba(56,189,248,0.2), transparent 30%), #020617",
    color: "white",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    alignItems: "center",
    gap: "100px",
    width: "100%",
  },

  left: {
    maxWidth: "650px",
  },

  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  imageCard: {
    width: "420px",
    height: "500px",
    borderRadius: "28px",
    overflow: "hidden",
    border: "1px solid rgba(148,163,184,0.2)",
    backgroundColor: "#0f172a",
    boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  typingBox: {
    marginTop: "24px",
    minHeight: "48px",
    padding: "14px 22px",
    borderRadius: "999px",
    backgroundColor: "rgba(15, 23, 42, 0.85)",
    border: "1px solid rgba(56,189,248,0.25)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
    color: "#7dd3fc",
    fontWeight: "800",
    fontSize: "20px",
    letterSpacing: "0.2px",
  },

  typingText: {
    color: "#e0f2fe",
  },

  cursor: {
    color: "#38bdf8",
    marginLeft: "3px",
    animation: "blink 1s infinite",
  },

  badge: {
    display: "inline-block",
    padding: "10px 16px",
    border: "1px solid #38bdf8",
    borderRadius: "999px",
    color: "#7dd3fc",
    marginBottom: "20px",
  },

  title: {
    fontSize: "clamp(44px, 6vw, 70px)",
    lineHeight: "1.05",
  },

  description: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#cbd5e1",
    lineHeight: "1.6",
  },

  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "15px",
  },

  primaryButton: {
    padding: "14px 20px",
    backgroundColor: "#38bdf8",
    color: "#020617",
    borderRadius: "10px",
    fontWeight: "bold",
    textDecoration: "none",
  },

  secondaryButton: {
    padding: "14px 20px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    borderRadius: "10px",
    textDecoration: "none",
  },
};