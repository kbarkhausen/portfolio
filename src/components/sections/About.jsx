import { Card, CardContent } from '../ui/card';
import { Brain, Cloud, Zap, Target, TrendingUp, Globe } from 'lucide-react';

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
      {/* Title with Icon */}
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
          Modernizing Enterprise Software Architecture with{' '}
          <span className="text-gradient">AI, Cloud, and Scalable Innovation</span>
        </h3>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full"></div>
      </div>

      {/* Introduction with Highlight Box */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
        <p className="text-gray-200 text-lg leading-relaxed">
          With <span className="text-cyan-400 font-semibold">25+ years</span> as a Principal .NET Architect, I specialize in designing cloud-native, enterprise-scale software solutions that blend <span className="text-blue-400 font-semibold">AI/ML capabilities</span> with deep system modernization. I've delivered business-critical platforms for global leaders like <span className="text-cyan-300 font-semibold">Cartier, Aflac, and McAfee</span>, transforming legacy systems into modern, intelligent platforms — including reducing a <span className="text-cyan-400 font-semibold">30-day reporting cycle to 1 day</span> for a luxury brand now used worldwide.
        </p>
      </div>

      {/* AI Integration Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-cyan-400" />
          <h4 className="text-2xl font-semibold text-white">AI & Automation Expertise</h4>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I bring technical depth across the Microsoft stack (C#, .NET, SQL Server, Azure), with a growing portfolio of work in AI integration:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Embedding machine learning models into transactional systems',
            'Leveraging Azure AI Services, Semantic Kernel, and vector databases like Pinecone',
            'Architecting secure, scalable APIs and RAG pipelines',
            'Designing modular systems that support agentic AI workflows and legacy co-existence'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 glass-dark rounded-lg border border-blue-500/20 hover:border-cyan-500/40 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Role Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-blue-400" />
          <h4 className="text-2xl font-semibold text-white">My role as a technology leader</h4>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I serve as a technical leader driving:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'AI-enablement of existing enterprise platforms',
            '.NET modernization for scalable, secure cloud deployments',
            'Continuous improvement in DevOps, CI/CD, and software quality',
            'Mentorship and best-practice enforcement across globally distributed teams'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 glass-dark rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-cyan-400" />
          <h4 className="text-2xl font-semibold text-white">Value Proposition</h4>
        </div>
        <p className="text-gray-200 text-lg leading-relaxed">
          I thrive at the intersection of <span className="text-cyan-400 font-semibold">strategy and execution</span> — architecting for scalability, innovating with AI, and aligning software platforms with business growth. Whether as a hands-on architect, strategic consultant, or AI integration lead, I bring clarity, innovation, and measurable results to every project.
        </p>
      </div>

      {/* Closing Statement */}
      <div className="flex items-start gap-4 p-6 rounded-xl glass-dark border border-blue-500/20">
        <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Fluent in <span className="text-cyan-400 font-semibold">English and Spanish</span>, I'm passionate about empowering organizations to adopt AI responsibly and at scale — transforming not just their technology, but their trajectory.
          </p>
          <p className="text-white text-xl font-bold">
            Ready to bring transformative technical leadership to any project.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About; 