import { Card, CardContent } from '../ui/card';
import { Brain, Cloud, Zap, Target, TrendingUp, Globe, Lightbulb, RefreshCw, Gauge, Code2 } from 'lucide-react';

const About = () => (
  <section className="transition-opacity duration-300 animate-fade-in">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
        <Brain className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
        About Me
      </h2>
    </div>
    
    <div className="glass-dark rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
      {/* Hero Statement */}
      <div className="mb-10 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-slate-800/40 border border-cyan-500/30">
        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed text-center">
          I help organizations harness <span className="text-gradient">AI as a force multiplier</span>—not a bolt-on feature—to unlock new capabilities, accelerate delivery, and achieve strategic goals faster.
        </p>
      </div>

      {/* Core Qualities */}
      <div className="mb-10">
        <p className="text-gray-200 text-xl leading-relaxed mb-8">
          With <span className="text-cyan-400 font-semibold">25+ years</span> architecting enterprise software, I combine deep technical expertise with the adaptability and critical thinking needed to navigate complex, evolving landscapes. I learn fast, think in systems, and stay effective when stakes are high and requirements shift.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Lightbulb, label: "Critical Thinking", color: "from-yellow-500 to-amber-500" },
            { icon: RefreshCw, label: "Adaptability", color: "from-green-500 to-emerald-500" },
            { icon: Gauge, label: "Fast Learner", color: "from-blue-500 to-cyan-500" },
            { icon: Target, label: "Results-Driven", color: "from-purple-500 to-pink-500" }
          ].map((quality, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 glass-dark rounded-xl border border-blue-500/20 hover:border-cyan-500/40 transition-all hover:-translate-y-1">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${quality.color} mb-3`}>
                <quality.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 font-medium text-sm text-center">{quality.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Foundation */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="w-6 h-6 text-blue-400" />
          <h4 className="text-2xl font-semibold text-white">Technical Foundation</h4>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          My core expertise spans mission-critical systems using <span className="text-cyan-400 font-semibold">.NET, Azure, SQL Server</span>, and cloud-native architectures. I've built production systems in:
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {['C#', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'Perl'].map((lang, idx) => (
            <span key={idx} className="px-4 py-2 glass-dark rounded-lg border border-blue-500/30 text-cyan-300 font-mono text-sm hover:border-cyan-500/50 transition-colors">
              {lang}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-lg">
          Choosing the right tool for each problem. I mentor teams on best practices, modern engineering principles, and delivering reliable software at scale.
        </p>
      </div>

      {/* AI Integration */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-cyan-400" />
          <h4 className="text-2xl font-semibold text-white">AI Integration</h4>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I embed AI into both software systems and development workflows:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Recommendation engines & automation agents',
            'Semantic search & RAG pipelines',
            'Smart refactoring & automated testing',
            'Architectural validation & code generation'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 glass-dark rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-lg mt-4">
          My goal: help organizations reduce technical debt, increase reliability, and ship faster by making AI a natural part of how they build.
        </p>
      </div>

      {/* Track Record */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <h4 className="text-2xl font-semibold text-white">Track Record</h4>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I've helped organizations like <span className="text-cyan-400 font-semibold">Cartier, Aflac, and McAfee</span> solve complex problems, modernize legacy systems, and build future-ready platforms. Whether reengineering outdated architectures, implementing secure multi-tenant SaaS platforms, or leveraging AI to multiply team output—I bring deep technical insight and a strategic mindset to every engagement.
        </p>
      </div>

      {/* Current Focus & Closing */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-blue-900/30 via-slate-800/30 to-cyan-900/30 border border-blue-500/20">
        <div className="flex items-start gap-4">
          <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-gray-200 text-lg leading-relaxed mb-4">
              Fluent in <span className="text-cyan-400 font-semibold">English and Spanish</span>. Currently driving AI-powered data extraction and intelligent migration solutions at <span className="text-cyan-400 font-semibold">Ellucian</span>.
            </p>
            <p className="text-white text-xl font-bold">
              Ready to bring transformative technical leadership to your next challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
