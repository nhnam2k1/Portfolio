export type Project = {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Virtual Human",
    summary:
      "AI software architecture for interaction between virtual and real humans.",
    stack: [
      "Spring Boot",
      "Apache Kafka",
      "Strimzi",
      "Docker",
      "Kubernetes",
      "Docker-in-Docker",
    ],
    highlights: [
      "Applied compression algorithms and optimized message formats to improve Kafka message latency by 50%.",
      "Tuned Parallel Garbage Collector to keep Kafka broker memory usage around 600MB while maintaining low message latency.",
      "Implemented CI/CD pipeline with Unit Tests, SonarQube analysis, and Trivy scanning to automate quality and security checks.",
    ],
    demoUrl: "https://portfolio.drieam.app/s/GuxUr36X/dmYorrdMjiyMTrarj97K3tio",
  },
  {
    title: "ChatsApp",
    summary:
      "Cloud-native chat application built with React and ASP.NET Core on Azure.",
    stack: [
      "React JS",
      "ASP.NET Core",
      "MongoDB",
      "Docker",
      "Azure Container App",
      "Azure Message Bus",
      "Azure API Management",
    ],
    highlights: [
      "Built scalable backend architecture using ASP.NET Core, Azure Container Apps, Message Bus, API Management, and MongoDB.",
      "Implemented CI/CD pipeline with Unit Tests, SonarQube analysis, and Trivy scanning to automate quality and security checks.",
      "Designed and load-tested real-time messaging architecture; evaluated WebSocket-based transport options and selected SignalR to support around 30,000 concurrent connections in a single pod instance.",
      "Earned Advanced (4/4) in DevOps and Security by Design, and Proficient (3/4) in Cloud Native, Scalable Architectures, and Distributed Data.",
    ],
    demoUrl: "https://portfolio.drieam.app/s/GuxUr36X/nRQWULvBCeP9Ca5n5X9WmkWa",
  },
  {
    title: "Vanderlande Tool (REST APIs)",
    summary:
      "Modernization of an internal test integration tool used in other company departments.",
    stack: ["C#", "NUnit", "REST APIs", "ALM"],
    highlights: [
      "Modernized C# source code and reduced processing time from 2–3 hours to 15–100 seconds.",
      "Implemented 50 unit tests using NUnit for behavior validation before deployment.",
      "Released new version to departments across the organization after a 3-month rollout.",
    ],
  },
];
