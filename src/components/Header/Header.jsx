import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
                className="nav-link"
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
