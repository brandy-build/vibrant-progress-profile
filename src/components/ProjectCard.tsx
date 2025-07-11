
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
    <div className="glass card-hover rounded-xl border border-border/50 group overflow-hidden project-card-square flex flex-col backdrop-blur-xl">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            {image}
          </div>
          <a
            href={link}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-primary/10"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full group-hover:animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-primary/40 rounded-full group-hover:animate-pulse delay-150"></div>
          </div>
          <span className="text-xs text-muted-foreground font-mono bg-muted/30 px-2 py-1 rounded-full">
            2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
