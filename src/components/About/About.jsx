import "./About.css";
import SkillCards from "./SkillCards";
import { Code2, Server, Database } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: Code2,
    content:
      "Crafting responsive, accessible UIs with React and modern web tooling.",
  },
  {
    name: "Backend",
    icon: Server,
    content:
      "Designing secure, scalable APIs with ASP.NET Core and clean architecture.",
  },
  {
    name: "Database",
    icon: Database,
    content:
      "Modeling data and optimizing queries for reliability and performance.",
  },
];

export default function About() {
  return (
    <div className="about">
      <img
        src="/src/assets/ZER0PFP.jpg"
        alt="ZER0 Profile"
        className="about-img"
      />
      <h1 className="about-title">
        About <span className="accent">Me</span>
      </h1>
      <p className="about-text">
        I build thoughtful, end‑to‑end web experiences. From expressive React
        frontends to resilient ASP.NET Core APIs and tuned PostgreSQL databases,
        I focus on clarity, maintainability, and performance.
      </p>
      <SkillCards skills={skills} />
    </div>
  );
}
