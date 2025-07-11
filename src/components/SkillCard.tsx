
import React, { useEffect, useState } from 'react';

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
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`skill-card-${title}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [title]);

  useEffect(() => {
    if (isVisible) {
      const timers = skills.map((skill, index) => {
        return setTimeout(() => {
          setAnimatedLevels(prev => {
            const newLevels = [...prev];
            newLevels[index] = skill.level;
            return newLevels;
          });
        }, index * 150);
      });

      return () => timers.forEach(clearTimeout);
    }
  }, [isVisible, skills]);

  return (
    <div 
      id={`skill-card-${title}`}
      className="glass card-hover p-8 rounded-xl border border-border/50 group backdrop-blur-xl"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="text-3xl p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      <div className="space-y-4 mb-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded-full">
                {skill.level}%
              </span>
            </div>
            <div className="w-full progress-bar rounded-full h-3 overflow-hidden">
              <div
                className="progress-indicator h-full rounded-full"
                style={{
                  width: `${animatedLevels[index]}%`,
                  transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border/50">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground font-medium">Avg Proficiency</span>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-xl">{averageProficiency}%</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
