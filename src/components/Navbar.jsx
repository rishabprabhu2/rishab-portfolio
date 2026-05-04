import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.logo}>Rishab Prabhu</a>

      <div style={styles.links}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#experience" style={styles.link}>Experience</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#resume" style={styles.link}>Resume</a>
        <a href="#contact" style={styles.link}>Contact</a>
        
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 8%",
    backgroundColor: "rgba(2, 6, 23, 0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #1e293b",
  },
  logo: {
    color: "white",
    fontWeight: "900",
    fontSize: "45px",
    letterSpacing: "-0.5px",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "24px",
  },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "25px",
  },
};