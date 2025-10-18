import "./Projects.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with React.js frontend and ASP.NET Core backend.",
    technologies: ["React.js", "ASP.NET Core", "PostgreSQL", "Stripe", "Redux"],
    githubUrl: "#",
    image:
      "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=E-Commerce+Platform",
  },
  {
    title: "Project Management System",
    description:
      "Collaborative project management tool with real-time updates, task tracking, team collaboration features, and reporting dashboards.",
    technologies: [
      "React.js",
      "ASP.NET Core",
      "PostgreSQL",
      "SignalR",
      "Docker",
    ],
    githubUrl: "#",
    image:
      "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Project+Management",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization, post scheduling, and performance tracking across multiple platforms.",
    technologies: [
      "React.js",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Chart.js",
    ],
    githubUrl: "#",
    image:
      "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Social+Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-title">
            Featured <span className="projects-title-accent">Projects</span>
          </h2>

          <div className="decorative-divider" />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
