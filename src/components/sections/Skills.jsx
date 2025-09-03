import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowLeft } from 'lucide-react';

const skillsList = [
  {
    title: "Cloud Architecture",
    description: "Deep expertise in Microsoft Azure and AWS, specializing in cloud-native solutions and microservices architecture.",
    icon: "☁️",
    detailedDescription: "I've architected and implemented cloud-native solutions for enterprise clients, focusing on scalability, security, and cost optimization. My experience spans from initial cloud migration strategies to complex multi-cloud architectures.",
    experience: "8+ years of hands-on cloud architecture experience",
    technologies: [
      "Microsoft Azure (App Services, Functions, AKS, Cosmos DB)",
      "AWS (EC2, Lambda, RDS, S3)",
      "Docker & Kubernetes",
      "Terraform & ARM Templates",
      "Azure DevOps & GitHub Actions",
      "Microservices Architecture",
      "Serverless Computing",
      "Cloud Security & Compliance"
    ],
    achievements: [
      "Led cloud migration for 50+ applications",
      "Reduced infrastructure costs by 40%",
      "Implemented zero-downtime deployment strategies"
    ]
  },
  {
    title: "AI Innovation",
    description: "Experienced in AI via advanced prompt engineering and Semantic Kernel implementation.",
    icon: "🤖",
    detailedDescription: "I've been at the forefront of AI integration in enterprise systems, implementing machine learning models, RAG pipelines, and intelligent automation solutions that transform business processes.",
    experience: "5+ years of AI/ML implementation experience",
    technologies: [
      "Azure AI Services (OpenAI, Cognitive Services)",
      "Semantic Kernel & LangChain",
      "Vector Databases (Pinecone, Azure Cognitive Search)",
      "Machine Learning Models",
      "RAG (Retrieval-Augmented Generation) Pipelines",
      "Prompt Engineering",
      "AI Ethics & Responsible AI",
      "Natural Language Processing"
    ],
    achievements: [
      "Implemented AI-powered reporting system reducing cycle time by 97%",
      "Built intelligent document processing with 95% accuracy",
      "Designed agentic AI workflows for enterprise automation"
    ]
  },
  {
    title: "Software Architecture",
    description: "16+ years architecting enterprise solutions, specializing in microservices and domain-driven design.",
    icon: "🏗️",
    detailedDescription: "I've designed and implemented enterprise-scale software solutions that handle millions of transactions, focusing on maintainability, scalability, and business alignment through clean architecture principles.",
    experience: "16+ years of enterprise architecture experience",
    technologies: [
      ".NET Framework & .NET Core",
      "C#, JavaScript, TypeScript",
      "Microservices Architecture",
      "Domain-Driven Design (DDD)",
      "Clean Architecture",
      "Event-Driven Architecture",
      "CQRS Pattern",
      "SOLID Principles"
    ],
    achievements: [
      "Architected systems processing 10M+ daily transactions",
      "Led 20+ enterprise application redesigns",
      "Established architectural standards used by 100+ developers"
    ]
  },
  {
    title: "Development Process",
    description: "Expert in TDD, CI/CD practices, and Git version control.",
    icon: "⚙️",
    detailedDescription: "I've established and optimized development processes that improve code quality, reduce time-to-market, and create sustainable development practices for growing engineering teams.",
    experience: "15+ years of process improvement experience",
    technologies: [
      "Test-Driven Development (TDD)",
      "CI/CD Pipelines",
      "Git & GitHub",
      "Azure DevOps",
      "Agile & Scrum Methodologies",
      "Code Review Processes",
      "Static Code Analysis",
      "Performance Testing"
    ],
    achievements: [
      "Reduced deployment time from days to minutes",
      "Improved code coverage from 40% to 90%+",
      "Established CI/CD practices for 15+ development teams"
    ]
  },
  {
    title: "Enterprise Data",
    description: "20+ years experience with SQL Server, Neo4j, and Elasticsearch platforms.",
    icon: "🗄️",
    detailedDescription: "I've designed and optimized data architectures for enterprise systems, ensuring data integrity, performance, and scalability while implementing modern data patterns and storage solutions.",
    experience: "20+ years of data architecture experience",
    technologies: [
      "SQL Server & Azure SQL",
      "Neo4j Graph Database",
      "Elasticsearch & Kibana",
      "Redis & Azure Cache",
      "Data Modeling & Design",
      "ETL/ELT Processes",
      "Data Warehousing",
      "Performance Tuning"
    ],
    achievements: [
      "Optimized database queries improving performance by 300%",
      "Designed data models for 100+ enterprise applications",
      "Implemented data migration strategies for 1M+ records"
    ]
  },
  {
    title: "Web Technologies",
    description: "Extensive experience with ASP.NET Core, REST APIs, and modern frontend frameworks.",
    icon: "🌐",
    detailedDescription: "I've built modern web applications and APIs that serve millions of users, focusing on performance, security, and user experience while maintaining enterprise-grade reliability and scalability.",
    experience: "18+ years of web development experience",
    technologies: [
      "ASP.NET Core & Web API",
      "REST & GraphQL APIs",
      "React & Angular",
      "TypeScript & JavaScript",
      "SignalR & WebSockets",
      "OAuth & JWT Authentication",
      "API Gateway & Load Balancing",
      "Performance Optimization"
    ],
    achievements: [
      "Built APIs serving 5M+ daily requests",
      "Implemented real-time features for 10K+ concurrent users",
      "Reduced API response time by 60%"
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openSkillDetail = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSkillDetail = () => {
    setSelectedSkill(null);
  };

  return (
    <section className="transition-opacity duration-300">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">
        {!selectedSkill ? (
          "Core Competencies"
        ) : (
          <div className="flex items-center space-x-3">
            <span 
              className="text-2xl text-indigo-400 hover:text-indigo-600 cursor-pointer transition-colors"
              onClick={closeSkillDetail}
            >
              Core Competencies
            </span>
            <span className="text-2xl text-gray-400">{'>'}</span>
            <span className="text-4xl">{selectedSkill.icon}</span>
            <span className="text-2xl text-indigo-600">{selectedSkill.title}</span>
          </div>
        )}
      </h2>
      
      {!selectedSkill ? (
        /* Skills Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <Card 
              key={index} 
              className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => openSkillDetail(skill)}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-indigo-600">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
                <div className="mt-4 text-indigo-500 text-sm font-medium">
                  Click to learn more →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* Detailed Skill View */
        <div className="animate-fadeIn">

          {/* Content */}
          <div className="space-y-8">
            {/* Description with experience included */}
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h4>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedSkill.detailedDescription}</p>
              <p className="text-indigo-600 font-medium text-lg">{selectedSkill.experience}</p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">Technologies & Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedSkill.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">Key Achievements</h4>
              <div className="space-y-3">
                {selectedSkill.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills; 