export default function TechCards({ techStack }) {
  return (
    <div>
      {techStack.map((tech) => (
        <div className="tech-card" key={tech.Field}>
          <h2 className="tech-title">{tech.Field}</h2>
          <ul>
            {tech.techs.map((tech) => (
              <li className="tech-item" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
