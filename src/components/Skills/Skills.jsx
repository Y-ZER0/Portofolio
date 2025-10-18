import TechCards from "./TechCards";
import "./Skills.css";

const techStack = [
  {
    Field: "Frontend",
    techs: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Vite",
      "TypeScript",
    ],
  },
  {
    Field: "Backend",
    techs: [
      "ASP.NET Core",
      "C#",
      "Entity Framework",
      "REST API",
      "SQL Server",
      "JWT Authentication",
      "Clean Architecture",
    ],
  },
  {
    Field: "Database",
    techs: ["PostgreSQL", "SQL Server", "Migrations", "Database Design"],
  },
  {
    Field: "Tools & Deployment",
    techs: ["Git", "GitHub", "VS Code", "Postman", "Neltify", "Supabase"],
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-title">
        <span style={{ color: "hsl(348 83% 47%)" }}>Skills</span> & Technologies
      </h1>
      <div className="decorative-divider" />
      <div className="skills-cards">
        <TechCards techStack={techStack} />
      </div>
    </div>
  );
}
