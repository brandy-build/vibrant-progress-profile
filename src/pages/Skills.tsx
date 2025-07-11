
import { useState, useEffect } from 'react';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const [stats, setStats] = useState({
    technologies: 0,
    categories: 0,
    experience: 0,
    proficiency: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        technologies: 30,
        categories: 6,
        experience: 3,
        proficiency: 81
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 }
      ],
      averageProficiency: 81
    },
    {
      title: 'Frameworks & Libraries',
      icon: '🛠️',
      skills: [
        { name: 'React/Next.js', level: 85 },
        { name: 'FastAPI', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 }
      ],
      averageProficiency: 83
    },
    {
      title: 'Databases & Cloud',
      icon: '☁️',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'AWS Cloud', level: 70 },
        { name: 'Supabase', level: 80 },
        { name: 'Firebase', level: 80 },
        { name: 'MySQL', level: 75 }
      ],
      averageProficiency: 78
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'scikit-learn', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Matplotlib API', level: 80 },
        { name: 'Gemini API', level: 85 },
        { name: 'Hugging Face', level: 80 }
      ],
      averageProficiency: 82
    },
    {
      title: 'Automation & Tools',
      icon: '⚙️',
      skills: [
        { name: 'RMI', level: 85 },
        { name: 'GIS/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Workflow Automation', level: 85 },
        { name: 'API Integration', level: 85 }
      ],
      averageProficiency: 82
    },
    {
      title: 'Data Science',
      icon: '📊',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 85 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Statistical Modeling', level: 75 },
        { name: 'Data Visualization', level: 80 }
      ],
      averageProficiency: 82
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h1>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              averageProficiency={category.averageProficiency}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.technologies}+</div>
            <div className="text-slate-400">Technologies</div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.categories}</div>
            <div className="text-slate-400">Skill Categories</div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.experience}+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.proficiency}%</div>
            <div className="text-slate-400">Avg Proficiency</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
