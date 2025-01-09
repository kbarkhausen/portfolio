import { Card, CardContent } from '../ui/card';

const ExperienceCard = ({ title, company, period, location, description }) => (
  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <CardContent className="p-6">
      <h3 className="font-bold text-xl text-indigo-600">{title}</h3>
      <p className="text-gray-700 font-medium text-lg">{company}</p>
      <p className="text-gray-500 mt-1">{period} | {location}</p>
      <div className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </div>
    </CardContent>
  </Card>
);

const Experience = () => (
  <section className="transition-opacity duration-300">
    <h2 className="text-3xl font-bold mb-8 text-indigo-600">Professional Experience</h2>
    <div className="space-y-8">
      <ExperienceCard 
        title=".NET Architect / Cloud and TDD evangelist"
        company="ANTHOLOGY"
        period="Apr 2014 - Present"
        location="Boca Raton, Florida"
        description={
          <ul className="list-disc pl-4 space-y-2">
            <li>Lead architect providing guidance on major features and improvements to existing C# solutions</li>
            <li>Primary evangelist for TDD and loosely coupled architectures</li>
            <li>Implemented cloud-based solutions and modern development practices</li>
          </ul>
        }
      />
      <ExperienceCard 
        title="Sr. Solution Architect & Team Leader"
        company="AVISENA"
        period="Apr 2013 - Apr 2014"
        location="Miami, Florida"
        description={
          <ul className="list-disc pl-4 space-y-2">
            <li>Migrated company solutions to MVC4 while re-architecting data access layer</li>
            <li>Implemented SOA architecture</li>
            <li>Trained developers on TDD and SOLID principles</li>
          </ul>
        }
      />
      <ExperienceCard 
        title="Solution Architect & Developer (Consultant)"
        company="Five Stars Technology, LLC"
        period="Mar 2006 - Apr 2013"
        location="Miami, Florida"
        description={
          <>
            <p className="mb-4">
              As an independent Solutions Architect and Technical Consultant, I spearheaded enterprise software solutions for well-known companies including Cartier, Ritz Carlton, and McAfee.
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Operated as full-stack technical consultant and project lead, managing entire project lifecycles</li>
              <li>Architected and implemented mission-critical solutions using Microsoft technologies (C#, ASP.NET MVC, Azure)</li>
              <li>Built high-performing development teams and established technical standards</li>
              <li>Implemented automated workflows and cloud architectures, achieving significant operational cost reductions</li>
              <li>Enabled new digital revenue channels through system modernization</li>
            </ul>
          </>
        }
      />
    </div>
  </section>
);

export default Experience; 