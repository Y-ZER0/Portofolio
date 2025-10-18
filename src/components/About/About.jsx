import "./About.css";
import SkillCards from "./SkillCards";
import { Code2, Server, Database } from "lucide-react";
import profileImage from "../../assets/ZER0PFP.jpg";

const skills = [
  {
    name: "Frontend",
    icon: Code2,
    content:
      "Crafting responsive and interactive user interfaces with React.js and modern web technologies",
  },
  {
    name: "Backend",
    icon: Server,
    content:
      "Building secure and scalable APIs with ASP.NET Core and implementing robust business logic",
  },
  {
    name: "Database",
    icon: Database,
    content:
      "Designing efficient database schemas and optimizing queries with PostgreSQL",
  },
];

export default function About() {
  return (
    <div className="about">
      <img src={profileImage} alt="ZER0 Profile" className="about-img" />
      <h1 className="about-title">
        About <span className="accent">Me</span>
      </h1>

      <p className="about-text">
        I'm a passionate full-stack developer specializing in building modern,
        scalable web applications. With expertise in React.js for dynamic
        frontends, ASP.NET Core for robust backends, and PostgreSQL for reliable
        data management, I create end-to-end solutions that deliver exceptional
        user experiences.
      </p>
      <SkillCards skills={skills} />
    </div>
  );
}
