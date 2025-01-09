import { Card, CardContent } from '../ui/card';

const skillsList = [
  {
    title: "Cloud Architecture",
    description: "Deep expertise in Microsoft Azure and AWS, specializing in cloud-native solutions and microservices architecture.",
    icon: "☁️"
  },
  {
    title: "AI Innovation",
    description: "Experienced in AI via advanced prompt engineering and Semantic Kernel implementation.",
    icon: "🤖"
  },
  {
    title: "Software Architecture",
    description: "16+ years architecting enterprise solutions, specializing in microservices and domain-driven design.",
    icon: "🏗️"
  },
  {
    title: "Development Process",
    description: "Expert in TDD, CI/CD practices, and Git version control.",
    icon: "⚙️"
  },
  {
    title: "Enterprise Data",
    description: "20+ years experience with SQL Server, Neo4j, and Elasticsearch platforms.",
    icon: "🗄️"
  },
  {
    title: "Web Technologies",
    description: "Extensive experience with ASP.NET Core, REST APIs, and modern frontend frameworks.",
    icon: "🌐"
  }
];

const Skills = () => (
  <section className="transition-opacity duration-300">
    <h2 className="text-3xl font-bold mb-8 text-indigo-600">Core Competencies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsList.map((skill, index) => (
        <Card key={index} className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="font-bold text-xl mb-3 text-indigo-600">{skill.title}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Skills; 