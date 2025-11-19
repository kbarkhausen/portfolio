import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowLeft, Cloud, Brain, Building2, Settings, Database, Globe, Sparkles } from 'lucide-react';

const skillsList = [
  {
    title: "Cloud Architecture",
    description: "Deep expertise in Microsoft Azure and AWS, specializing in cloud-native solutions and microservices architecture.",
    icon: Cloud,
    gradient: "from-blue-600 to-cyan-500",
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
    icon: Brain,
    gradient: "from-blue-600 to-cyan-500",
    detailedDescription: "I've been at the forefront of AI integration in enterprise systems, implementing machine learning models, RAG pipelines, and intelligent automation solutions that transform business processes.",
    experience: "5+ years of AI/ML implementation experience",
    technologies: [
      "Azure AI Services (OpenAI, Cognitive Services, Semantic Kernel)",
      "AWS AI Services (Bedrock, SageMaker, Data Transformation service)",
      "Vector Databases (Pinecone, Azure Cognitive Search)",
      "RAG (Retrieval-Augmented Generation) Pipelines",
      "Document Intelligence & Data Extraction (invoices, manifests, forms)",
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
    icon: Building2,
    gradient: "from-slate-600 to-blue-600",
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
    icon: Settings,
    gradient: "from-cyan-500 to-blue-600",
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
    icon: Database,
    gradient: "from-blue-700 to-cyan-600",
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
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
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

  const IconComponent = selectedSkill?.icon || Sparkles;

  return (
    <section className="transition-opacity duration-300 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
          {!selectedSkill ? (
            "Core Competencies"
          ) : (
            <div className="flex items-center space-x-4">
              <span 
                className="text-2xl text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors"
                onClick={closeSkillDetail}
              >
                Core Competencies
              </span>
              <span className="text-2xl text-gray-500">{'>'}</span>
              <span className={`text-2xl bg-gradient-to-r ${selectedSkill.gradient} bg-clip-text text-transparent`}>
                {selectedSkill.title}
              </span>
            </div>
          )}
        </h2>
      </div>
      
      {!selectedSkill ? (
        /* Skills Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <div
                key={index} 
                className="group glass-dark rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                onClick={() => openSkillDetail(skill)}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <SkillIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{skill.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-4 transition-all">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Detailed Skill View */
        <div className="animate-fadeIn">
          <div className="glass-dark rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-500/20">
              <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedSkill.gradient}`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedSkill.title}</h3>
                <p className="text-cyan-400 font-medium">{selectedSkill.experience}</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                  Overview
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedSkill.detailedDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                  Technologies & Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSkill.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 glass-dark rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedSkill.gradient} group-hover:scale-150 transition-transform`}></div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
                  Key Achievements
                </h4>
                <div className="space-y-4">
                  {selectedSkill.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 glass-dark rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors group">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 mt-2 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                      <span className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back Button */}
              <div className="pt-6 border-t border-blue-500/20">
                <button
                  onClick={closeSkillDetail}
                  className="inline-flex items-center gap-2 px-6 py-3 glass-dark rounded-xl hover:scale-105 transition-all duration-300 border border-blue-500/20 hover:border-cyan-500/40 text-white font-semibold"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to All Skills
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills; 