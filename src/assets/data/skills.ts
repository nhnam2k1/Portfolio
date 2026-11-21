export type Skill = {
  name: string;
  years?: number;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java" },
      { name: "C#" },
      { name: "C++" },
      { name: "Python" },
    ],
  },
  {
    category: "Backend Frameworks",
    skills: [
      { name: "ASP.NET Core" },
      { name: "Spring Boot" },
      { name: "RESTful APIs" },
    ],
  },
  {
    category: "Databases & Caching",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Azure Cosmos DB" },
      { name: "OpenSearch" },
    ],
  },
  {
    category: "Messaging & Streaming",
    skills: [
      { name: "Apache Kafka" },
      { name: "Azure Service Bus" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "Azure" },
      { name: "Kubernetes" },
      { name: "Docker" },
      { name: "MicroK8s" },
    ],
  },
  {
    category: "CI/CD & Observability",
    skills: [
      { name: "Harness" },
      { name: "GitLab CI/CD" },
      { name: "SonarQube" },
      { name: "Trivy" },
    ],
  },
];
