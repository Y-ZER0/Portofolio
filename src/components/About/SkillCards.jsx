export default function SkillCards({ skills }) {
  return (
    <div className="skill-cards">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="skill-icon" aria-hidden="true">
            {skill.icon ? (
              <skill.icon
                size={28}
                strokeWidth={2}
                className={`icon-${skill.name.toLowerCase()}`}
              />
            ) : null}
          </div>
          <h3 className="skill-title">{skill.name}</h3>
          <p className="skill-content">{skill.content}</p>
        </div>
      ))}
    </div>
  );
}
