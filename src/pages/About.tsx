
const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Bio</h2>
            <div className="text-slate-400 font-mono text-sm bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              {'{{BIO}}'}
            </div>
          </div>

          {/* Skills & Expertise Preview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Skills & Expertise</h2>
            <div className="text-slate-400 font-mono text-sm bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              {'{{SKILLS_LIST}}'}
            </div>
          </div>
        </div>

        {/* Skills Preview Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-slate-400 text-sm">Skill Categories</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">81%</div>
              <div className="text-slate-400 text-sm">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
