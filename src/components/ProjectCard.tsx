
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
      <div className="aspect-video bg-slate-700 flex items-center justify-center relative overflow-hidden">
        <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
          {image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{description}</p>
        
        <Button 
          variant="outline" 
          size="sm"
          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
        >
          <ExternalLink size={16} className="mr-2" />
          View Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
