
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: '{{PROJECT_TITLE}}',
      description: '{{PROJECT_DESCRIPTION}}',
      image: '🔐',
      link: '#'
    },
    {
      title: '{{PROJECT_TITLE}}',
      description: '{{PROJECT_DESCRIPTION}}',
      image: '🛡️',
      link: '#'
    },
    {
      title: '{{PROJECT_TITLE}}',
      description: '{{PROJECT_DESCRIPTION}}',
      image: '⚡',
      link: '#'
    },
    {
      title: '{{PROJECT_TITLE}}',
      description: '{{PROJECT_DESCRIPTION}}',
      image: '🤖',
      link: '#'
    },
    {
      title: '{{PROJECT_TITLE}}',
      description: '{{PROJECT_DESCRIPTION}}',
      image: '📊',
      link: '#'
    },
    {
      title: '{{PROJECT_TITLE}}',
      description: '{{PROJECT_DESCRIPTION}}',
      image: '🌐',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my cybersecurity and software development work
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
