
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
    <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
      </div>

      <div className="space-y-3 mb-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
              <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
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

      <div className="pt-4 border-t border-slate-700/50">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Avg Proficiency</span>
          <span className="text-cyan-400 font-bold text-lg">{averageProficiency}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
