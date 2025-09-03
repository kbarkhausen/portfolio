import { Card, CardContent } from '../ui/card';

const About = () => (
  <section className="transition-opacity duration-300">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">About Me</h2>
        
        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Modernizing Enterprise Software Architecture with AI, Cloud, and Scalable Innovation
        </h3>

        {/* Introduction Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          With 25+ years as a Principal .NET Architect, I specialize in designing cloud-native, enterprise-scale software solutions that blend AI/ML capabilities with deep system modernization. I've delivered business-critical platforms for global leaders like Cartier, Aflac, and McAfee, transforming legacy systems into modern, intelligent platforms — including reducing a 30-day reporting cycle to 1 day for a luxury brand now used worldwide.
        </p>

        {/* Technical Expertise */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I bring technical depth across the Microsoft stack (C#, .NET, SQL Server, Azure), with a growing portfolio of work in AI integration, including:
        </p>

        {/* AI Integration List */}
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed ml-4 space-y-2 mb-6">
          <li>Embedding machine learning models into transactional systems</li>
          <li>Leveraging Azure AI Services, Semantic Kernel, and vector databases like Pinecone</li>
          <li>Architecting secure, scalable APIs and RAG pipelines</li>
          <li>Designing modular systems that support agentic AI workflows and legacy co-existence</li>
        </ul>

        {/* Current Role and Specializations */}
        <div className="mb-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-3">
            Currently at Anthology Inc., I serve as a technical leader driving:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed ml-4 space-y-2">
            <li>AI-enablement of existing enterprise platforms</li>
            <li>.NET modernization for scalable, secure cloud deployments</li>
            <li>Continuous improvement in DevOps, CI/CD, and software quality</li>
            <li>Mentorship and best-practice enforcement across globally distributed teams</li>
          </ul>
        </div>

        {/* Value Proposition */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I thrive at the intersection of strategy and execution — architecting for scalability, innovating with AI, and aligning software platforms with business growth. Whether as a hands-on architect, strategic consultant, or AI integration lead, I bring clarity, innovation, and measurable results to every project.
        </p>

        {/* Closing Statement */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Fluent in English and Spanish, I'm passionate about empowering organizations to adopt AI responsibly and at scale — transforming not just their technology, but their trajectory.
        </p>

        {/* Call to Action */}
        <p className="text-gray-800 text-lg font-semibold">
          Ready to bring transformative technical leadership to any project.
        </p>
      </CardContent>
    </Card>
  </section>
);

export default About; 