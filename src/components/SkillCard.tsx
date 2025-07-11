
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillCardProps {
  title: string;
  skills: { name: string; level: number }[];
  icon: string;
  averageProficiency: number;
}

const SkillCard = ({ title, skills, icon, averageProficiency }: SkillCardProps) => {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, currentLevel: 0 })));
  const [animatedAverage, setAnimatedAverage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map(skill => ({ ...skill, currentLevel: skill.level })));
      setAnimatedAverage(averageProficiency);
    }, 500);

    return () => clearTimeout(timer);
  }, [skills, averageProficiency]);

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <div className="bg-cyan-500 text-slate-900 px-2 py-1 rounded-full text-sm font-bold">
            {skills.length}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {animatedSkills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 text-sm">{skill.name}</span>
              <span className="text-cyan-400 font-bold">{skill.level}%</span>
            </div>
            <Progress 
              value={skill.currentLevel} 
              className="h-2 bg-slate-700"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Average Proficiency</span>
          <span className="text-cyan-400 font-bold text-lg">{animatedAverage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
