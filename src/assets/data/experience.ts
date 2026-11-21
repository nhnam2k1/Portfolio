export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "NAB Innovation Centre Vietnam",
    role: "DevOps Engineer",
    location: "Ho Chi Minh City, Vietnam",
    period: "Jul 2026 – Nov 2026",
    bullets: [
      "Orchestrated Harness CI/CD pipelines for 30+ services, ensuring reliable patch deployment under strict organizational compliance frameworks (monitoring logs for error rates and checking available pods).",
      "Monitored live deployment health using OpenSearch and led end-to-end incident response (pre, canary, and post-release) to analyze production status and reduce mean-time-to-recovery.",
      "Performed advanced dependency resolution (hotfixes) to resolve critical runtime issues during automated deployments, successfully preventing production outages in complex environments.",
      "Managed end-to-end Change Request (CR/CHG) cycles for all patches (Runsheet and Test Summary Report), ensuring strict adherence to organizational compliance and audit traceability while maintaining aggressive deployment schedules.",
    ],
  },
  {
    company:
      "The lectorate Interaction Design — Fontys ICT InnovationLab",
    role: "Software Engineering (Platform) Intern",
    location: "Eindhoven, Netherlands",
    period: "Feb 2025 – Jul 2025",
    bullets: [
      "Developed and maintained Kafka topic management features and their associated message schemas.",
      "Set up Apache Kafka and Kubernetes clusters on Fontys' Virtual Machines for testing and production environments.",
      "Collaborated with the Tech Lead and research group students to test and integrate Kafka queues into academic assignments.",
    ],
  },
  {
    company: "Vanderlande Industries",
    role: "Software Engineering Intern",
    location: "Veghel, Netherlands",
    period: "Sep 2022 – Jan 2023",
    bullets: [
      "Improved RESTful APIs for the test integration tool, reducing processing time by 95%.",
      "Collaborated with other engineers on setting up and testing new automated CI/CD pipelines.",
    ],
  },
];
