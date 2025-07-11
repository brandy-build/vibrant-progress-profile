
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Let's discuss cybersecurity, development projects, or potential collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-cyan-400" size={24} />
                <h2 className="text-2xl font-semibold text-white">Email</h2>
              </div>
              
              <div className="text-slate-400 font-mono text-sm mb-8 bg-slate-700/50 p-4 rounded-lg">
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
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
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
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400"
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
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Connect Online */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Connect Online</h2>
            
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <Github className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                <div>
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-slate-400 text-sm">View my repositories</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <Linkedin className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                <div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <div className="text-slate-400 text-sm">Professional network</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <Twitter className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                <div>
                  <div className="text-white font-medium">Twitter</div>
                  <div className="text-slate-400 text-sm">Follow for updates</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700">
              <Button 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © 2024 Portfolio. Crafted with security in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
