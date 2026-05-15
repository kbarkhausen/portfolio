import { Brain, Zap, Target, TrendingUp, Globe } from 'lucide-react';

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
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
          Building enterprise software that ships faster, scales better, and gets smarter with{' '}
          <span className="text-gradient">AI-augmented delivery</span>
        </h3>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full"></div>
      </div>

      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-slate-800/30 border border-cyan-500/30">
        <p className="text-white text-xl leading-relaxed font-medium">
          I lead as a <span className="text-cyan-400 font-semibold">player-coach</span>, setting architecture, writing production code, and helping teams use AI to improve delivery speed and decision quality without sacrificing engineering standards.
        </p>
      </div>

      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
        <p className="text-gray-200 text-lg leading-relaxed">
          I bring <span className="text-cyan-400 font-semibold">20+ years</span> building and shipping enterprise and subscription SaaS on Azure and .NET. My work spans architecture, modernization, distributed systems, and AI-enabled delivery, with hands-on impact across organizations and global brands including <span className="text-cyan-300 font-semibold">Cartier, McAfee, Aflac, and Ritz-Carlton</span>.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-cyan-400" />
          <h4 className="text-2xl font-semibold text-white">AI-Augmented Engineering</h4>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          My recent work sits on two connected tracks, AI-assisted software delivery and intelligent features embedded directly into products and workflows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'AI-assisted development with Claude Code, Cursor, Copilot, and MCP-based workflows',
            'Embedding LLMs, agents, and document intelligence into legacy and greenfield systems',
            'Event-driven architectures using Azure Service Bus, Outbox, CQRS/MediatR, and modern API patterns',
            'Human-in-the-loop decisioning, confidence scoring, and measurable automation outcomes'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 glass-dark rounded-lg border border-blue-500/20 hover:border-cyan-500/40 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-blue-400" />
          <h4 className="text-2xl font-semibold text-white">What I lead</h4>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I help organizations move faster by combining engineering leadership with direct execution:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Enterprise architecture, re-platforming, and legacy .NET modernization',
            'Code review, TDD, CI/CD, observability, and engineering quality standards',
            'Remote, onshore, and offshore team leadership with practical delivery discipline',
            'Roadmap shaping, vendor decisions, tooling strategy, and AI adoption'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 glass-dark rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-cyan-400" />
          <h4 className="text-2xl font-semibold text-white">Value Proposition</h4>
        </div>
        <p className="text-gray-200 text-lg leading-relaxed">
          I bridge <span className="text-cyan-400 font-semibold">strategy and execution</span>. That means defining architecture, sequencing modernization work, shipping production code, and using AI where it creates real leverage, lower cycle time, fewer escalations, and better business outcomes.
        </p>
      </div>

      <div className="flex items-start gap-4 p-6 rounded-xl glass-dark border border-blue-500/20">
        <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            I am fluent in <span className="text-cyan-400 font-semibold">English and Spanish</span>, and I care about practical, responsible AI adoption that helps teams deliver more without turning engineering into theater.
          </p>
          <p className="text-white text-xl font-bold">
            Ready to lead engineering organizations and deliver AI-enabled systems that make a measurable difference.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
