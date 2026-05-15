import { Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react';

const ExperienceCard = ({ title, company, period, location, description, isLast }) => (
  <div className="relative">
    <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-1 flex items-center justify-center z-10">
      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
        <Briefcase className="w-5 h-5 text-cyan-400" />
      </div>
    </div>
    
    {!isLast && (
      <div className="absolute left-6 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500" style={{ top: 'calc(1.5rem + 3rem)', bottom: 'calc(-3rem - 1.5rem)' }}></div>
    )}

    <div className="ml-16 glass-dark rounded-2xl p-6 md:p-8 border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="font-bold text-2xl text-white mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg mb-2">
            <span>{company}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-300 leading-relaxed space-y-2">
        {description}
      </div>
    </div>
  </div>
);

const Experience = () => (
  <section className="transition-opacity duration-300 animate-fade-in">
    <div className="flex items-center gap-3 mb-12">
      <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
        <Sparkles className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
        Professional Experience
      </h2>
    </div>
    <div className="relative space-y-12">
      <ExperienceCard 
        isLast={false}
        title="Principal Engineer & AI Solutions Architect"
        company="5 STARS TECHNOLOGY"
        period="Feb 2026 - Present"
        location="Miami, Florida"
        description={
          <>
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
              <p className="text-white font-medium">
                Founder of a boutique AI engineering practice serving mid-market SaaS, hospitality, healthcare, and logistics clients across South Florida, operating as a hands-on principal engineer and architecture lead.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                'Ship production .NET and Azure systems while leading small onshore and offshore teams and shaping enterprise architecture, cloud-spend, and tooling decisions',
                'Designed and shipped an event-driven shipment-tracking platform from scratch using ASP.NET Core, Vue.js 3, Azure Service Bus, Outbox, EF Core, CQRS/MediatR, SQL Server, xUnit, and Azure DevOps CI/CD',
                'Embed LLMs, classifiers, document intelligence, and decision agents into client systems to lower cycle time, reduce escalations, and improve autonomous decision quality',
                'Run deep AI-augmented delivery workflows, including autonomous dev loops, agentic GitHub Actions pipelines, and modular CLAUDE.md architecture, with measurable impact on shipping velocity'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        }
      />
      <ExperienceCard 
        isLast={false}
        title="AI Solutions Lead / .NET Architect / Cloud & TDD Evangelist"
        company="ANTHOLOGY"
        period="Apr 2014 - Feb 2026"
        location="Boca Raton, Florida"
        description={
          <>
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
              <p className="text-white font-medium">
                Hands-on architect and player-coach on enterprise SaaS platforms for higher education, partnering with product leadership to modernize the platform while shipping roadmap work in parallel.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                'Integrated AI and LLM patterns, including Semantic Kernel, AWS Bedrock, and RAG, into production features and championed AI-assisted coding across the engineering organization',
                'Established standards for clean architecture, TDD, CI/CD quality gates, and observability with OpenTelemetry and Application Insights',
                'Wrote production code on the core platform while leading architecture for major features and platform modernization efforts',
                'Served as the technical bridge between product strategy and day-to-day engineering execution across a multi-tenant product portfolio'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        }
      />
      <ExperienceCard 
        isLast={false}
        title="Sr. Solution Architect & Team Leader"
        company="AVISENA"
        period="Apr 2013 - Apr 2014"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              'Led architecture and team for the re-engineering of a legacy multi-tenant SaaS healthcare platform onto modern .NET',
              'Designed the target architecture using clean boundaries, domain-driven design, and modern patterns',
              'Drove implementation hands-on with the engineering team while establishing testing and review standards that reduced defects and accelerated delivery'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        }
      />
      <ExperienceCard 
        isLast={false}
        title="Solutions Architect & Technology Consultant"
        company="INDEPENDENT PRACTICE"
        period="Mar 2006 - Apr 2013"
        location="Miami, Florida"
        description={
          <>
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
              <p className="text-white font-medium">
                Operated as principal engineer and architect for enterprise clients across retail, financial services, and luxury goods, owning solution design, implementation, and delivery across multi-stakeholder programs.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                'Cartier Latin America: designed and delivered a reporting and operations platform that reduced sales-data consolidation from 45 to 60 days down to 1 to 3 days',
                'McAfee Latin America: designed and shipped a telecom-channel integration platform that supported a new bundled-product model, contributing to higher customer satisfaction and product sales',
                'Richemont IT USA: built an enterprise integration linking social-media platforms to core business systems for stronger campaign attribution and investment decisions',
                'Delivered hands-on .NET, integration, and data-layer solutions while leading distributed remote and offshore contributor pools for clients including Aflac and Ritz-Carlton'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        }
      />
      <ExperienceCard 
        isLast={false}
        title="Regional I.T. Manager / Sr. Programmer"
        company="RICHEMONT LATIN AMERICA & CARIBBEAN LLC"
        period="May 2004 - Mar 2006"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              'Led end-to-end IT operations for Latin America and the Caribbean, owning strategy, budgets, and delivery across infrastructure and software',
              'Directed a cross-functional team as a player-coach, increasing productivity by about 40 percent while operating with about 30 percent less budget',
              'Managed vendor relationships and stakeholder communications across the region'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        }
      />
      <ExperienceCard 
        isLast={false}
        title="Sr. Programmer / Project Manager"
        company="DIGITALERA GROUP LLC"
        period="Sept 2000 - May 2004"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              'Conceived, architected, and delivered a B2B solution for Cartier Latin America to automate retail operations across the region',
              'Gathered requirements, wrote specifications, designed the UI, and managed an offshore development team to lower costs'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        }
      />
      <ExperienceCard 
        isLast={false}
        title="Sr. Programmer / Project Manager"
        company="TRAPEZOID INC."
        period="Jan 2000 - Sept 2000"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              'Led architecture for software projects across onshore and offshore teams',
              'Architected and delivered solutions for start-up and mid-to-large organizations'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        }
      />
      <ExperienceCard 
        isLast={true}
        title="Sr. Programmer / Oracle DBA"
        company="CHS ELECTRONICS INC."
        period="Sept 1998 - Dec 1999"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              'Senior member of the team responsible for building an e-commerce solution serving more than 4,000 customers',
              'Developed a self-service web portal that cut customer service operations costs by more than 60 percent'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        }
      />
    </div>
  </section>
);

export default Experience;
