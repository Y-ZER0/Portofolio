import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-label">
        <h2 className="logo">ZER0</h2>
        <p className="job">Full Stack Developer</p>
      </div>

      <div className="social-icons">
        <a href="https://github.com/zer0-dev">github Icon</a>
        <a href="https://linkedin.com/in/zer0-dev">LinkedIN Icon</a>
        <a href="mailto:zer0@zer0.com">email Icon</a>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2025 Made with ❤️ by ZER0</p>
      </div>
    </div>
  );
}
