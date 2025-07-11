
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Mail, Send, Github, Linkedin, Twitter, Menu, X, Database, Server, Key, CheckCircle, AlertCircle } from 'lucide-react';
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
  const [activeDbTab, setActiveDbTab] = useState('supabase');
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'success' | 'error'>('idle');

  const fullText = 'Cybersecurity Specialist';

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

  const handleConnect = () => {
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('success');
    }, 2000);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'database', label: 'Database' },
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

  const supabaseCode = `// Install Supabase client
npm install @supabase/supabase-js

// Create supabase client
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Example: Insert data
const { data, error } = await supabase
  .from('portfolio_contacts')
  .insert([
    { name: 'John Doe', email: 'john@example.com', message: 'Hello!' }
  ])

// Example: Fetch data
const { data, error } = await supabase
  .from('portfolio_projects')
  .select('*')
  .order('created_at', { ascending: false })`;

  const mongoCode = `// Install MongoDB driver
npm install mongodb

// Connect to MongoDB
import { MongoClient } from 'mongodb'

const uri = 'YOUR_MONGODB_CONNECTION_STRING'
const client = new MongoClient(uri)

async function connectDB() {
  try {
    await client.connect()
    const db = client.db('portfolio')
    return db
  } catch (error) {
    console.error('Connection failed:', error)
  }
}

// Example: Insert document
const db = await connectDB()
const result = await db.collection('contacts').insertOne({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!',
  timestamp: new Date()
})

// Example: Find documents
const projects = await db.collection('projects').find({}).toArray()`;

  const postgresCode = `// Install pg (PostgreSQL driver)
npm install pg @types/pg

// Create connection
import { Pool } from 'pg'

const pool = new Pool({
  host: 'YOUR_HOST',
  port: 5432,
  database: 'YOUR_DATABASE',
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
})

// Example: Create table
await pool.query(\`
  CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
\`)

// Example: Insert data
const result = await pool.query(
  'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
  ['John Doe', 'john@example.com', 'Hello!']
)

// Example: Select data
const { rows } = await pool.query('SELECT * FROM projects ORDER BY created_at DESC')`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/30 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/90 backdrop-blur-xl rounded-lg mt-2 border border-slate-800/50">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Profile Circle */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-cyan-400/50 flex items-center justify-center bg-slate-800/30 backdrop-blur-sm animate-fade-in">
            <span className="text-cyan-400 text-2xl font-mono">{'{{NAME}}'}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            {'{{NAME}}'}
          </h1>

          {/* Animated Tagline */}
          <div className="h-12 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-mono">
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
              className="bg-cyan-500/90 hover:bg-cyan-600 text-slate-900 font-semibold px-8 backdrop-blur-sm"
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Bio</h3>
              <div className="text-slate-400 font-mono text-sm bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
                {'{{BIO}}'}
              </div>
            </div>

            {/* Skills & Expertise Preview */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Skills & Expertise</h3>
              <div className="text-slate-400 font-mono text-sm bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
                {'{{SKILLS_LIST}}'}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-16">
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-slate-400 text-sm">Categories</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">81%</div>
              <div className="text-slate-400 text-sm">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
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
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.technologies}+</div>
              <div className="text-slate-400">Technologies</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.categories}</div>
              <div className="text-slate-400">Categories</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.experience}+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stats.proficiency}%</div>
              <div className="text-slate-400">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Projects
            </h2>
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Let's discuss cybersecurity, development projects, or potential collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-cyan-400" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Email</h3>
                </div>
                
                <div className="text-slate-400 font-mono text-sm mb-8 bg-slate-700/30 backdrop-blur-sm p-4 rounded-lg">
                  {'{{EMAIL}}'}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="w-full px-3 py-2 bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-md text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-cyan-500/90 hover:bg-cyan-600 text-slate-900 font-semibold backdrop-blur-sm"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Connect Online */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Connect Online</h3>
              
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <Github className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  <div>
                    <div className="text-white font-medium">GitHub</div>
                    <div className="text-slate-400 text-sm">View my repositories</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <Linkedin className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <div className="text-slate-400 text-sm">Professional network</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <Twitter className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  <div>
                    <div className="text-white font-medium">Twitter</div>
                    <div className="text-slate-400 text-sm">Follow for updates</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/50">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-cyan-500/90 hover:bg-cyan-600 text-slate-900 font-semibold backdrop-blur-sm"
                >
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section id="database" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Database Setup
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Choose and configure your preferred database solution
            </p>
          </div>

          {/* Database Options */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/30 backdrop-blur-sm p-1 rounded-lg border border-slate-700/50 inline-flex">
              <button
                onClick={() => setActiveDbTab('supabase')}
                className={`px-4 sm:px-6 py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                  activeDbTab === 'supabase'
                    ? 'bg-cyan-500 text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Database className="inline mr-2" size={18} />
                Supabase
              </button>
              <button
                onClick={() => setActiveDbTab('mongodb')}
                className={`px-4 sm:px-6 py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                  activeDbTab === 'mongodb'
                    ? 'bg-cyan-500 text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Server className="inline mr-2" size={18} />
                MongoDB
              </button>
              <button
                onClick={() => setActiveDbTab('postgres')}
                className={`px-4 sm:px-6 py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                  activeDbTab === 'postgres'
                    ? 'bg-cyan-500 text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Key className="inline mr-2" size={18} />
                PostgreSQL
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  {activeDbTab === 'supabase' && <Database className="text-cyan-400" size={24} />}
                  {activeDbTab === 'mongodb' && <Server className="text-cyan-400" size={24} />}
                  {activeDbTab === 'postgres' && <Key className="text-cyan-400" size={24} />}
                  
                  <h3 className="text-xl font-semibold text-white">
                    {activeDbTab === 'supabase' && 'Supabase Configuration'}
                    {activeDbTab === 'mongodb' && 'MongoDB Configuration'}
                    {activeDbTab === 'postgres' && 'PostgreSQL Configuration'}
                  </h3>
                </div>

                <div className="space-y-6">
                  {activeDbTab === 'supabase' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="supabase-url" className="text-slate-300">Supabase URL</Label>
                        <Input
                          id="supabase-url"
                          placeholder="https://your-project.supabase.co"
                          className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="supabase-key" className="text-slate-300">Anon Key</Label>
                        <Input
                          id="supabase-key"
                          type="password"
                          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                          className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                        />
                      </div>
                    </>
                  )}

                  {activeDbTab === 'mongodb' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="mongo-url" className="text-slate-300">Connection String</Label>
                        <Input
                          id="mongo-url"
                          placeholder="mongodb+srv://username:password@cluster.mongodb.net/database"
                          className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mongo-db" className="text-slate-300">Database Name</Label>
                        <Input
                          id="mongo-db"
                          placeholder="portfolio"
                          className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                        />
                      </div>
                    </>
                  )}

                  {activeDbTab === 'postgres' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pg-host" className="text-slate-300">Host</Label>
                          <Input
                            id="pg-host"
                            placeholder="localhost"
                            className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pg-port" className="text-slate-300">Port</Label>
                          <Input
                            id="pg-port"
                            placeholder="5432"
                            className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pg-database" className="text-slate-300">Database</Label>
                        <Input
                          id="pg-database"
                          placeholder="portfolio"
                          className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="pg-user" className="text-slate-300">Username</Label>
                          <Input
                            id="pg-user"
                            placeholder="username"
                            className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pg-password" className="text-slate-300">Password</Label>
                          <Input
                            id="pg-password"
                            type="password"
                            placeholder="password"
                            className="bg-slate-700/30 backdrop-blur-sm border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <Button 
                    onClick={handleConnect}
                    disabled={connectionStatus === 'connecting'}
                    className="w-full bg-cyan-500/90 hover:bg-cyan-600 text-slate-900 font-semibold backdrop-blur-sm"
                  >
                    {connectionStatus === 'connecting' && (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent mr-2" />
                    )}
                    {connectionStatus === 'success' && <CheckCircle className="mr-2" size={18} />}
                    {connectionStatus === 'error' && <AlertCircle className="mr-2" size={18} />}
                    
                    {connectionStatus === 'idle' && 'Test Connection'}
                    {connectionStatus === 'connecting' && 'Connecting...'}
                    {connectionStatus === 'success' && 'Connected!'}
                    {connectionStatus === 'error' && 'Connection Failed'}
                  </Button>

                  {connectionStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg backdrop-blur-sm">
                      <p className="text-green-400 text-sm font-medium">
                        ✅ Database connection successful! You can now use this configuration.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Implementation Code</h3>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600/50 overflow-hidden">
                  <pre className="text-xs sm:text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
                    <code>
                      {activeDbTab === 'supabase' && supabaseCode}
                      {activeDbTab === 'mongodb' && mongoCode}
                      {activeDbTab === 'postgres' && postgresCode}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 Portfolio. Crafted with security in mind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SinglePagePortfolio;
