import React from "react";
import { motion } from "framer-motion";

// Optional logo imports later:
// import ibmLogo from "../assets/ibm.png";
// import giantEagleLogo from "../assets/gianteagle.png";
// import uwLogo from "../assets/uw.png";

const experiences = [
  {
    date: "Summer 2026",
    role: "Incoming Software and Cloud Developer Intern",
    company: "IBM",
    location: "Chicago, IL",
    logo: "IBM",
    bullets: [
      "Incoming intern on the Cloud Object Storage team, specializing in cloud infrastructure.",
      "Will be contributing to cloud-based applications, backend services, and technical product development.",
    ],
    tech: ["Java", "Software Engineering", "Enterprise Systems", "Cloud Infrastructure"],
  },
  {
    date: "Summer 2025",
    role: "Software Engineering Intern",
    company: "Giant Eagle",
    location: "Pittsburgh, PA",
    logo: "GE",
    bullets: [
      "Built features for Basket Buddy, an AI-powered shopping assistant integrated into the Giant Eagle mobile app.",
      "Developed backend APIs, React dashboards, MySQL-backed workflows, and AI-assisted shopping experiences.",
      "Helped reduce product search friction and improve real-time retail insights across stores.",
    ],
    tech: ["React", "Python", "Django", "MySQL", "Azure", "REST APIs"],
  },
  {
    date: "October 2024 – Present",
    role: "Software and Data Engineering Research Assistant",
    company: "UW–Madison Computer Sciences",
    location: "Madison, WI",
    logo: "UW",
    bullets: [
      "Contributing to software and data engineering research within the UW–Madison Computer Sciences department.",
      "Developing machine learning and AI models using Java and C++ to detect lane lines for autonomous vehicles.",
    ],
    tech: ["Java", "C++", "AI", "Research"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <div style={styles.header}>
        <p style={styles.label}>Experience</p>
        <h2 style={styles.title}>Professional timeline</h2>
        <p style={styles.subtitle}>
          A snapshot of my software engineering, cloud, AI, and data experience.
        </p>
      </div>

      <div style={styles.timeline}>
        <div style={styles.line}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            style={styles.item}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
          >
            <div style={styles.dotWrapper}>
              <div style={styles.dot}></div>
            </div>

            <div style={styles.card}>
              <div style={styles.topRow}>
                <div style={styles.logo}>{exp.logo}</div>

                <div style={styles.meta}>
                  <p style={styles.date}>{exp.date}</p>
                  <h3 style={styles.role}>{exp.role}</h3>
                  <p style={styles.company}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
              </div>

              <ul style={styles.bullets}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i} style={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div style={styles.techRow}>
                {exp.tech.map((item, i) => (
                  <span key={i} style={styles.tech}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "110px 8%",
    background:
      "radial-gradient(circle at top right, rgba(56,189,248,0.12), transparent 35%), #020617",
    color: "white",
  },
  header: {
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto 70px",
  },
  label: {
    color: "#38bdf8",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "14px",
    fontWeight: "900",
  },
  title: {
    fontSize: "clamp(38px, 5vw, 56px)",
    margin: "12px 0",
    letterSpacing: "-1px",
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: "18px",
    lineHeight: "1.7",
  },
  timeline: {
    position: "relative",
    maxWidth: "980px",
    margin: "0 auto",
  },
  line: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "28px",
    width: "2px",
    background:
      "linear-gradient(to bottom, transparent, #38bdf8, #6366f1, transparent)",
  },
  item: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "56px 1fr",
    gap: "28px",
    marginBottom: "34px",
  },
  dotWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    paddingTop: "32px",
  },
  dot: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#38bdf8",
    boxShadow: "0 0 0 8px rgba(56,189,248,0.12), 0 0 35px rgba(56,189,248,0.7)",
  },
  card: {
    padding: "30px",
    borderRadius: "26px",
    backgroundColor: "rgba(15, 23, 42, 0.78)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
    backdropFilter: "blur(14px)",
  },
  topRow: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  logo: {
    minWidth: "64px",
    height: "64px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, rgba(56,189,248,0.22), rgba(99,102,241,0.18))",
    border: "1px solid rgba(125,211,252,0.25)",
    color: "#e0f2fe",
    fontWeight: "900",
    fontSize: "18px",
  },
  meta: {
    flex: 1,
  },
  date: {
    margin: 0,
    color: "#38bdf8",
    fontWeight: "800",
    fontSize: "14px",
  },
  role: {
    margin: "6px 0 6px",
    fontSize: "25px",
    lineHeight: "1.25",
  },
  company: {
    margin: 0,
    color: "#cbd5e1",
    fontWeight: "700",
  },
  bullets: {
    margin: "22px 0 0",
    paddingLeft: "20px",
  },
  bullet: {
    color: "#cbd5e1",
    lineHeight: "1.75",
    marginBottom: "8px",
  },
  techRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "22px",
  },
  tech: {
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "rgba(30, 41, 59, 0.9)",
    color: "#bae6fd",
    fontSize: "13px",
    border: "1px solid rgba(56,189,248,0.18)",
  },
};