import { Card, CardContent } from '../ui/card';
import { Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react';

const ExperienceCard = ({ title, company, period, location, description, index, isLast }) => (
  <div className="relative">
    {/* Timeline Dot */}
    <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-1 flex items-center justify-center z-10">
      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
        <Briefcase className="w-5 h-5 text-cyan-400" />
      </div>
    </div>
    
    {/* Timeline Line extending from bottom of this card through gap to next card */}
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
        index={0}
        isLast={false}
        title="AI Solutions Architect & Technical Consultant"
        company="FIVE STARS TECHNOLOGY, LLC"
        period="Mar 2006 - Present"
        location="Miami, Florida"
        description={
          <>
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
              <p className="text-white font-medium">
                Independent consulting practice delivering AI-powered enterprise solutions, software architecture, and digital transformation for organizations including <span className="text-cyan-400 font-semibold">Cartier, Ritz Carlton, McAfee, and Aflac</span>.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Design and implement AI solutions including document intelligence, data extraction, and agentic workflows that automate complex business processes",
                "Architect cloud-native solutions on Azure and AWS, modernizing legacy systems into scalable, intelligent platforms",
                "Collaborate directly with C-level executives to translate business objectives into actionable technical strategies",
                "Author of 'The AI-Augmented Architect' — comprehensive guide to AI-assisted software development",
                "Deliver measurable results: 97% reduction in reporting cycles, 300% performance improvements, 40% cost reductions"
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
        index={1}
        isLast={false}
        title="Senior Software Architect"
        company="ELLUCIAN (formerly Anthology)"
        period="Apr 2014 - Mar 2026"
        location="Remote"
        description={
          <>
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
              <p className="text-white font-medium">
                Led AI-driven initiatives transforming development workflows, data operations, and operational monitoring across enterprise education technology platforms.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Spearheaded data transformation projects leveraging AI to analyze complex data patterns, generate intelligent migration strategies, and automate manual processes",
                "Improved velocity using AI-powered code generation tools, accelerating project delivery while maintaining high code quality standards",
                "Generated automated code tests using AI, enabling comprehensive test coverage with reduced manual effort",
                "Established Test Driven Development (TDD) and loosely coupled architecture standards across development teams",
                "Led architectural guidance for major C# solution enhancements, driving modernization initiatives",
                "Transformed development practices through cloud-based solution implementation and modern DevOps workflows"
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
        index={2}
        isLast={false}
        title="Senior Solution Architect & Team Leader"
        company="AVISENA"
        period="Apr 2013 - Apr 2014"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              "Delivered 300% improvement in system response time by modernizing legacy solution to .NET MVC4 and re-architecting data access layer",
              "Established Test Driven Development (TDD) practices across the development team, mentoring all developers and elevating code quality standards",
              "Transformed software architecture through SOA implementation, resulting in enhanced speed, capability, and system reliability",
              "Led end-to-end software development initiatives, driving modernization efforts that significantly improved operational performance"
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
        index={3}
        isLast={false}
        title="Regional I.T. Manager / Sr. Programmer"
        company="RICHEMONT LATIN AMERICA & CARIBBEAN LLC"
        period="May 2004 - Mar 2006"
        location="Miami, Florida"
        description={
          <>
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
              <p className="text-white font-medium mb-2">
                <span className="text-cyan-400 font-semibold">Richemont</span> is the parent company for <span className="text-cyan-400 font-semibold">Cartier</span>, one of the most recognized luxury brands in the world.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Delivered 40% increase in department productivity while reducing IT budget by 30% through lean practices and cross-functional team leadership",
                "Owned end-to-end IT operations strategy, budgets, and delivery for Latin America & Caribbean region, driving infrastructure and software initiatives",
                "Served as player-coach (PM + senior engineer), directing cross-functional IT team and establishing operational excellence standards"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        }
      />
      <ExperienceCard 
        index={4}
        isLast={false}
        title="Sr. Programmer / Project Manager"
        company="DIGITALERA GROUP LLC"
        period="Sept 2000 - May 2004"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              "Architected and delivered enterprise B2B solution for Cartier Latin America, automating retail operations across the entire region",
              "Led full software development lifecycle from requirements gathering and specification writing to UI design, data modeling, and implementation",
              "Optimized project costs through strategic offshore team management while maintaining quality through rigorous code reviews and QA processes"
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
        index={5}
        isLast={false}
        title="Sr. Programmer / Project Manager"
        company="TRAPEZOID INC."
        period="Jan 2000 - Sept 2000"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              "Led architecture and development of software solutions for diverse client portfolio, from startups to mid-to-large enterprises, delivering operational improvements",
              "Directed all software projects and development teams (including offshore), establishing technical standards and driving successful project delivery"
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
        index={6}
        isLast={true}
        title="Sr. Programmer / Oracle DBA"
        company="CHS ELECTRONICS INC."
        period="Sept 1998 - Dec 1999"
        location="Miami, Florida"
        description={
          <ul className="space-y-3">
            {[
              "Delivered 60% reduction in customer service operational costs through development of self-service web-portal for 4,000+ customer base",
              "Architected and developed Internet E-Commerce solution as senior team member, enabling scalable self-service capabilities that transformed customer service operations"
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