import React from "react";
import { FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" style={styles.section}>
      <div style={styles.box}>
        <h2 style={styles.title}>Resume</h2>
        <p style={styles.text}>
          View my resume!
        </p>

        <a href="/resume.pdf" target="_blank" style={styles.button}>
          <FileText size={18} />
          Open Resume
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "90px 8%",
    backgroundColor: "#020617",
    color: "white",
  },
  box: {
    padding: "40px",
    borderRadius: "24px",
    border: "1px solid rgba(56,189,248,0.3)",
    backgroundColor: "rgba(56,189,248,0.08)",
  },
  title: {
    fontSize: "38px",
    margin: 0,
  },
  text: {
    color: "#cbd5e1",
    fontSize: "18px",
  },
  button: {
    marginTop: "18px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 22px",
    backgroundColor: "#38bdf8",
    color: "#020617",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "800",
  },
};