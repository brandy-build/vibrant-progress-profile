import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Mail, Send, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';

const SinglePagePortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [stats, setStats] = useState({
    technologies: 0,
    categories: 0,
    experience: 0,
    proficiency: 0
  });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const fullText = 'Cybersecurity Specialist';

  // Cursor tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        technologies: 30,
        categories: 6,
        experience: 3,
        proficiency: 81
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

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
    <div className="min-h-screen bg-charcoal-gradient relative">
      {/* Custom Glowing Cursor */}
      <div 
        className="cursor-glow"
        style={{
          left: `${cursorPosition.x - 10}px`,
          top: `${cursorPosition.y - 10}px`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-accent/50"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 glass-dark rounded-lg mt-2 border border-border">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-accent/50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-charcoal-radial" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Profile Circle */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-primary/50 flex items-center justify-center glass-dark animate-fade-in hover:border-primary/80 transition-colors">
            <span className="text-primary text-2xl font-mono">{'{{NAME}}'}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground mb-4 animate-fade-in">
            {'{{NAME}}'}
          </h1>

          {/* Animated Tagline */}
          <div className="h-12 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-mono">
              {'{{'}
              <span className="animate-pulse">{displayedText}</span>
              <span className="animate-pulse">|</span>
              {'}}'}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-transparent to-muted/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Bio</h3>
              <div className="text-muted-foreground font-mono text-sm glass-dark card-hover p-6 rounded-lg border border-border/50">
                {'{{BIO}}'}
              </div>
            </div>

            {/* Skills & Expertise Preview */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Skills & Expertise</h3>
              <div className="text-muted-foreground font-mono text-sm glass-dark card-hover p-6 rounded-lg border border-border/50">
                {'{{SKILLS_LIST}}'}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-16">
            <div className="glass-dark card-hover p-6 rounded-lg border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground text-sm">Technologies</div>
            </div>
            <div className="glass-dark card-hover p-6 rounded-lg border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground text-sm">Categories</div>
            </div>
            <div className="glass-dark card-hover p-6 rounded-lg border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="glass-dark card-hover p-6 rounded-lg border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">81%</div>
              <div className="text-muted-foreground text-sm">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
            <div className="glass-dark card-hover p-8 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">{stats.technologies}+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="glass-dark card-hover p-8 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">{stats.categories}</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div className="glass-dark card-hover p-8 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">{stats.experience}+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass-dark card-hover p-8 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">{stats.proficiency}%</div>
              <div className="text-muted-foreground">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-muted/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss cybersecurity, development projects, or potential collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-dark card-hover border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-primary" size={24} />
                  <h3 className="text-2xl font-semibold text-foreground">Email</h3>
                </div>
                
                <div className="text-muted-foreground font-mono text-sm mb-8 glass p-4 rounded-lg border border-border/50">
                  {'{{EMAIL}}'}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-input border-border/50 text-foreground placeholder-muted-foreground focus:border-primary hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="bg-input border-border/50 text-foreground placeholder-muted-foreground focus:border-primary hover:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="w-full px-3 py-2 bg-input border border-border/50 rounded-md text-foreground placeholder-muted-foreground focus:border-primary hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Connect Online */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect Online</h3>
              
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-4 p-4 glass-dark rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group card-hover"
                >
                  <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                  <div>
                    <div className="text-foreground font-medium">GitHub</div>
                    <div className="text-muted-foreground text-sm">View my repositories</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 glass-dark rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group card-hover"
                >
                  <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                  <div>
                    <div className="text-foreground font-medium">LinkedIn</div>
                    <div className="text-muted-foreground text-sm">Professional network</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 glass-dark rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group card-hover"
                >
                  <Twitter className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                  <div>
                    <div className="text-foreground font-medium">Twitter</div>
                    <div className="text-muted-foreground text-sm">Follow for updates</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 glass-dark rounded-lg border border-border/50 card-hover">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio. Crafted with security in mind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SinglePagePortfolio;
