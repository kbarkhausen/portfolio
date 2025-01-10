import { Card, CardContent } from '../ui/card';

const About = () => (
  <section className="transition-opacity duration-300">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">About Me</h2>
        
        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Transforming Enterprise Software Architecture with Innovation and AI
        </h3>

        {/* Introduction Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          With over 25 years of experience as a .NET Solution Architect, I bring a unique blend of technical mastery and strategic vision to enterprise software development. Throughout my career, I've architected and delivered high-impact solutions for industry leaders including Cartier, Aflac, and McAfee, consistently driving innovation and operational excellence.
        </p>

        {/* Expertise Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          As a seasoned enterprise architect, I specialize in leveraging cutting-edge technologies to solve complex business challenges. My expertise spans the entire Microsoft technology stack, including .NET, Azure, and SQL Server, complemented by deep knowledge in modern frameworks and AI integration. I've pioneered groundbreaking solutions that have transformed business operations, such as reducing reporting cycles from 30 days to just one business day for a global luxury brand, leading to international adoption of the system.
        </p>

        {/* Value Proposition */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          What sets me apart is my ability to bridge the gap between technical excellence and business value. I don't just architect solutions; I revolutionize processes, mentor teams, and drive organizational change. My approach combines strategic thinking with hands-on expertise, whether I'm designing complex rules engines, implementing advanced security mechanisms, or integrating AI capabilities to enhance software quality and automation.
        </p>

        {/* Current Role and Specializations */}
        <div className="mb-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-3">
            In my current role at Anthology Inc., I've established myself as a technical leader who delivers results. I specialize in:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed ml-4 space-y-2">
            <li>Architecting scalable, enterprise-level .NET solutions</li>
            <li>Integrating AI and machine learning capabilities into existing systems</li>
            <li>Implementing advanced security mechanisms and authentication protocols</li>
            <li>Leading complex system migrations and modernization initiatives</li>
            <li>Mentoring development teams and establishing best practices</li>
            <li>Driving continuous improvement in code quality and development processes</li>
          </ul>
        </div>

        {/* Passion and Commitment */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I'm passionate about leveraging emerging technologies, particularly artificial intelligence, to create future-ready solutions that drive business success. Whether working as a team leader, solution architect, or independent consultant, I bring a proven track record of transforming technical challenges into business opportunities.
        </p>

        {/* Closing Statement */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          My commitment to excellence, combined with bilingual capabilities in English and Spanish, makes me a valuable asset for organizations looking to innovate and scale their technical capabilities. I thrive on challenges that require both technical depth and strategic thinking, consistently delivering solutions that exceed expectations and drive measurable business value.
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