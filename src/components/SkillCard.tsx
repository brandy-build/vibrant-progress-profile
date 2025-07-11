
import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  icon: string;
  averageProficiency: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
  icon,
  averageProficiency,
}) => {
  return (
    <div className="glass p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      <div className="space-y-3 mb-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground text-sm font-medium">{skill.name}</span>
              <span className="text-primary text-sm font-bold">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="progress-indicator h-2 rounded-full"
                style={{
                  width: `${skill.level}%`,
                  transform: 'translateX(0%)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">Avg Proficiency</span>
          <span className="text-primary font-bold text-lg">{averageProficiency}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
