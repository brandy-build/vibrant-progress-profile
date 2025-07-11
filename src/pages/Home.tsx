
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
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

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Circle */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-cyan-400 flex items-center justify-center bg-slate-800/50 animate-fade-in">
          <span className="text-cyan-400 text-2xl font-mono">{'{{NAME}}'}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          {'Prajwal L Chawda '}
        </h1>
        {/* Main Heading */}
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          {'Kali'}
        </h2>

        {/* Animated Tagline */}
        <div className="h-12 mb-8">
          <p className="text-2xl md:text-3xl text-cyan-400 font-mono">
            {'{{'}
            <span className="animate-pulse">{displayedText}</span>
            <span className="animate-pulse">|</span>
            {'}}'}
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Link to="/projects">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8">
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
