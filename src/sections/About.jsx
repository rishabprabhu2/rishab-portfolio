import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <motion.div
        style={styles.wrapper}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p style={styles.label}>About Me</p>
          <h2 style={styles.title}>
            I am passionate about building products to address real-world problem solving. 
          </h2>
        </div>

        <div>
          <p style={styles.text}>
            I’m a Computer Science and Data Science student at the University of
            Wisconsin–Madison with experience in full-stack development,
            backend APIs, AI-powered applications, and computer vision.
          </p>

          <p style={styles.text}>
            My work includes grocery assistant tooling, autonomous vehicle
            perception, trajectory visualization, and React-based web projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "110px 8%",
    backgroundColor: "#020617",
    color: "white",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: "60px",
    alignItems: "start",
  },
  label: {
    color: "#38bdf8",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "14px",
    fontWeight: "800",
  },
  title: {
    fontSize: "42px",
    lineHeight: "1.15",
    margin: "12px 0 0",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#cbd5e1",
    marginTop: 0,
  },
};