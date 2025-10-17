import "./Hero.css";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-logo">ZER0</h1>
        <h2 className="hero-title">Full Stack Developer</h2>
        <p className="hero-text">
          Building powerful web applications with React.js, ASP.NET Core, and
          PostgreSQL
        </p>

        <div className="hero-buttons">
          <button
            className="button button-primary"
            onClick={scrollToProjects}
            aria-label="View my projects"
          >
            View Projects
          </button>
          <button
            className="button button-secondary"
            onClick={scrollToContact}
            aria-label="Get in touch with me"
          >
            Get In Touch
          </button>
        </div>

        <div className="hero-social">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="social-link"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="social-link"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Send me an email"
            className="social-link"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
