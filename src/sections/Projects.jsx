import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 8%",
    backgroundColor: "#020617",
    color: "white",
  },
  title: {
    fontSize: "42px",
    marginBottom: "40px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
  },
};