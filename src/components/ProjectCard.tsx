
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
    <div className="glass rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{image}</span>
          <a
            href={link}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground hover:text-primary"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
          </div>
          <span className="text-xs text-muted-foreground font-mono">2024</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
