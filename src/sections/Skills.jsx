import React from "react";

const skills = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "HTML", "CSS", "Expo"],
  },
  {
    title: "Backend",
    items: ["Django", "FastAPI", "REST APIs", "MySQL"],
  },
  {
    title: "AI / Data / Cloud",
    items: ["OpenCV", "RAG", "Azure", "Docker", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <p style={styles.label}>Technical Skills</p>
      <h2 style={styles.title}>Tools I use to build.</h2>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{skill.title}</h3>
            <div style={styles.items}>
              {skill.items.map((item, i) => (
                <span key={i} style={styles.item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 8%",
    backgroundColor: "#0f172a",
    color: "white",
  },
  label: {
    color: "#38bdf8",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "14px",
    fontWeight: "800",
    textAlign: "center",
  },
  title: {
    fontSize: "42px",
    textAlign: "center",
    marginBottom: "42px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "22px",
  },
  card: {
    padding: "26px",
    borderRadius: "20px",
    backgroundColor: "#020617",
    border: "1px solid #1e293b",
  },
  cardTitle: {
    marginTop: 0,
    fontSize: "22px",
  },
  items: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  item: {
    padding: "8px 11px",
    borderRadius: "999px",
    backgroundColor: "#1e293b",
    color: "#cbd5e1",
    fontSize: "14px",
  },
};