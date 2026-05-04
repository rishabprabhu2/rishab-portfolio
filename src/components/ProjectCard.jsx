export default function ProjectCard({ project }) {
    return (
      <div
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <h3 style={styles.title}>{project.title}</h3>
  
        <p style={styles.desc}>{project.description}</p>
  
        <div style={styles.tags}>
          {project.tags.map((tag, i) => (
            <span key={i} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
  
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          View Project →
        </a>
      </div>
    );
  }
  
  const styles = {
    card: {
      backgroundColor: "#0f172a",
      padding: "24px",
      borderRadius: "16px",
      border: "1px solid #1e293b",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    title: {
      margin: 0,
      fontSize: "22px",
    },
    desc: {
      marginTop: "10px",
      color: "#cbd5e1",
      lineHeight: "1.5",
    },
    tags: {
      marginTop: "14px",
    },
    tag: {
      backgroundColor: "#1e293b",
      padding: "6px 10px",
      marginRight: "6px",
      borderRadius: "8px",
      fontSize: "12px",
    },
    link: {
      display: "inline-block",
      marginTop: "16px",
      color: "#38bdf8",
      textDecoration: "none",
      fontWeight: "600",
    },
  };