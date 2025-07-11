
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{image}</span>
          <a
            href={link}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-400 hover:text-cyan-400"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
          <span className="text-xs text-slate-500 font-mono">2024</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
