import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section for highlighting (skip on initial load)
      if (window.scrollY > 0) {
        const sections = ["home", "about", "skills", "projects", "contact"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (current) setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <button
        onClick={() => scrollToSection("home")}
        className="logo"
        aria-label="Go to home"
      >
        ZER0
      </button>

      <nav className="nav" aria-label="Main navigation">
        <ul className="nav-list">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`nav-link ${
                  activeSection === section ? "active" : ""
                }`}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
